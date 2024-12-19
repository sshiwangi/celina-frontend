// utils/file_handler.ts
import * as XLSX from "xlsx";
import Papa from "papaparse";

interface ExtractedData {
  headers: string[];
  rows: any[][];
  error?: string;
}

export async function extractFileData(file: File): Promise<ExtractedData> {
  const fileType = file.name.split(".").pop()?.toLowerCase();

  try {
    switch (fileType) {
      case "xlsx":
      case "xls":
        return await extractExcelData(file);
      case "csv":
        return await extractCSVData(file);
      default:
        throw new Error(`Unsupported file type: ${fileType}`);
    }
  } catch (error) {
    console.error("Error extracting file data:", error);
    return {
      headers: [],
      rows: [],
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

async function extractExcelData(file: File): Promise<ExtractedData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, {
          type: "array",
          cellDates: true,
          cellNF: true,
          cellText: true,
        });

        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        const headers = (jsonData[0] as string[]).map((header) =>
          header
            ? String(header).trim()
            : `Column${Math.random().toString(36).slice(2, 7)}`
        );
        const rows = jsonData.slice(1);

        resolve({
          headers,
          rows: rows.map((row) =>
            row.map((cell) =>
              cell !== null && cell !== undefined ? String(cell).trim() : ""
            )
          ),
        });
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error("Failed to read Excel file"));
    reader.readAsArrayBuffer(file);
  });
}

async function extractCSVData(file: File): Promise<ExtractedData> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (results) => {
        if (results.errors.length > 0) {
          reject(
            new Error("Failed to parse CSV file: " + results.errors[0].message)
          );
          return;
        }

        const data = results.data as string[][];
        if (data.length === 0) {
          reject(new Error("CSV file is empty"));
          return;
        }

        const headers = data[0].map((header) =>
          header
            ? header.trim()
            : `Column${Math.random().toString(36).slice(2, 7)}`
        );
        const rows = data
          .slice(1)
          .map((row) =>
            row.map((cell) =>
              cell !== null && cell !== undefined ? cell.trim() : ""
            )
          );

        resolve({ headers, rows });
      },
      error: (error) => {
        reject(new Error("Failed to parse CSV file: " + error.message));
      },
      skipEmptyLines: true,
    });
  });
}

export function mapDataToSchema(extractedData: ExtractedData) {
  const { headers, rows } = extractedData;

  console.log("Mapping data to schema:", { headers, rowCount: rows.length });

  // Create a mapping of header indices to field names
  const fieldMapping: Record<number, string> = {};
  headers.forEach((header, index) => {
    const headerLower = header.toLowerCase();

    if (headerLower.includes("name")) {
      fieldMapping[index] = "name";
    } else if (headerLower.includes("phone") || headerLower.includes("tel")) {
      fieldMapping[index] = "phone";
    } else if (
      headerLower.includes("summary") ||
      headerLower.includes("notes")
    ) {
      fieldMapping[index] = "callSummary";
    } else if (headerLower.includes("conversion")) {
      fieldMapping[index] = "leadConversionRate";
    } else if (headerLower.includes("success")) {
      fieldMapping[index] = "salesSuccessRate";
    } else {
      // For additional fields, use a cleaned version of the header
      fieldMapping[index] = header.toLowerCase().replace(/\s+/g, "_");
    }
  });

  // Transform the rows into the required format
  const transformedData = rows.map((row, rowIndex) => {
    const mappedRow: Record<string, string | number> = {
      id: rowIndex + 1,
      name: "-",
      phone: "-",
      callSummary: "-",
      leadConversionRate: "-",
      salesSuccessRate: "-",
    };

    // Map the data from each row
    row.forEach((value, colIndex) => {
      const fieldName = fieldMapping[colIndex];
      if (fieldName) {
        mappedRow[fieldName] = value || "-";
      }
    });

    console.log(`Mapped row ${rowIndex}:`, mappedRow);
    return mappedRow;
  });

  return transformedData;
}
