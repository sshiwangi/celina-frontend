"use client";
import FileDropzone from "@/components/Layout/Files/FileDropZone";
import FilesList from "@/components/Layout/Files/FilesList";
import SalesTable from "@/components/Layout/Files/SalesTable";
import { extractFileData, mapDataToSchema } from "@/utils/file_handler";
import React, { useState } from "react";

interface UploadedFile {
  name: string;
  type: string;
}

function Files() {
  const [hasUploadedFile, setHasUploadedFile] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [tableData, setTableData] = useState([]);

  const handleFileDrop = async (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];
      try {
        const extractedData = await extractFileData(file);

        if (extractedData.error) {
          console.error("Error extracting file data:", extractedData.error);
          return;
        }

        const mappedData = mapDataToSchema(extractedData);
        setTableData(mappedData);
        setHasUploadedFile(true);

        const newFile = {
          name: file.name,
          type:
            file.type ||
            file.name.split(".").pop()?.toUpperCase() + " File" ||
            "Unknown File",
        };
        setUploadedFiles([...uploadedFiles, newFile]);
      } catch (error) {
        console.error("Error processing file:", error);
      }
    }
  };

  if (!hasUploadedFile) {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="w-full max-w-[330px]">
          <div className="flex flex-col flex-1 gap-4">
            <FileDropzone onFileDrop={handleFileDrop} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col sm:flex-row flex-1 h-full"
      data-testid="documents-page-content"
    >
      <FilesList files={uploadedFiles} onFileSelect={() => {}} />
      <div className="flex-1">
        <SalesTable data={tableData} />
      </div>
    </div>
  );
}

export default Files;
