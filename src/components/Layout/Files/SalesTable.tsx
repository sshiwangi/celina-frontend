"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import Papa from "papaparse";

interface SalesData {
  id: number;
  name: string;
  phone: string;
  callSummary: string;
  leadConversionRate: string;
  salesSuccessRate: string;
  [key: string]: string | number; // For dynamic columns
}

interface Column {
  id: string;
  name: string;
}

const SalesTable = () => {
  const [data, setData] = useState<SalesData[]>([]);
  const [columns, setColumns] = useState<Column[]>([
    { id: "name", name: "Name" },
    { id: "phone", name: "Phone" },
    { id: "callSummary", name: "Call Summary" },
    { id: "leadConversionRate", name: "Lead Conversion Rate" },
    { id: "salesSuccessRate", name: "Sales Success Rate" },
  ]);
  const [showAddColumn, setShowAddColumn] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");

  const handleFileUpload = (files: FileList) => {
    const file = files[0];
    Papa.parse(file, {
      complete: (results: { data: string[][] }) => {
        // Transform CSV data to match our data structure
        const transformedData = results.data
          .slice(1)
          .map((row: string[], index: number) => ({
            id: index + 1,
            name: row[0],
            phone: row[1],
            callSummary: "Pending",
            leadConversionRate: "0%",
            salesSuccessRate: "0%",
          }));
        setData(transformedData);
      },
      header: false,
    });
  };

  const addColumn = () => {
    if (newColumnName.trim()) {
      const columnId = newColumnName.toLowerCase().replace(/\s+/g, "_");
      setColumns([...columns, { id: columnId, name: newColumnName }]);
      setData(data.map((row) => ({ ...row, [columnId]: "-" })));
      setNewColumnName("");
      setShowAddColumn(false);
    }
  };

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-text">Sales Data</h2>
        <button
          onClick={() => setShowAddColumn(true)}
          className="flex items-center gap-2 px-3 py-1.5 bg-primary/80 text-white rounded-lg hover:bg-primary transition-all duration-150 text-sm"
        >
          <Plus size={16} /> Add Column
        </button>
      </div>

      {showAddColumn && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background p-4 rounded-lg shadow-lg min-w-[300px]">
            <h3 className="text-lg font-semibold mb-4 text-text">
              Add New Column
            </h3>
            <input
              type="text"
              value={newColumnName}
              onChange={(e) => setNewColumnName(e.target.value)}
              placeholder="Enter column name"
              className="w-full p-2 mb-4 bg-secondary border border-border rounded text-text"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddColumn(false)}
                className="px-4 py-2 text-text/60 hover:text-text"
              >
                Cancel
              </button>
              <button
                onClick={addColumn}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto border border-border rounded-lg">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background/70">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="px-6 py-3 text-left text-xs font-medium text-text/60 uppercase tracking-wider"
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-background divide-y divide-border">
            {data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-secondary/50 transition-colors"
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className="px-6 py-4 text-sm text-text whitespace-nowrap"
                  >
                    {row[column.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;
