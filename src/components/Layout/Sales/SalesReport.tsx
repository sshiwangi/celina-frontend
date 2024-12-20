"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { SalesData } from "@/utils/sales_mock_data";

interface Column {
  id: keyof SalesData | string;
  name: string;
}

interface SalesTableProps {
  data: SalesData[];
}

const defaultColumns: Column[] = [
  { id: "name", name: "Name" },
  // { id: "phone", name: "Phone" },
  { id: "callStatus", name: "Call Status" },
  // { id: "summary", name: "Call Summary" },
  { id: "leadConversionRate", name: "Lead Conversion Rate" },
  // { id: "salesSuccessRate", name: "Sales Success Rate" },
  { id: "callDuration", name: "Call Duration" },
  // { id: "callbackRequested", name: "Callback Requested" },
  // { id: "nextFollowUpDate", name: "Next Follow Up" },
  // { id: "productDiscussed", name: "Product" },
  // { id: "priceQuoted", name: "Price Quoted" },
];

const SalesTable = ({ data }: SalesTableProps) => {
  const [columns, setColumns] = useState<Column[]>(defaultColumns);
  const [showAddColumn, setShowAddColumn] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");

  const addColumn = () => {
    if (newColumnName.trim()) {
      const columnId = newColumnName.toLowerCase().replace(/\s+/g, "_");
      setColumns([...columns, { id: columnId, name: newColumnName }]);
      setNewColumnName("");
      setShowAddColumn(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-bold text-text">Sales Report</h2>
        <button
          onClick={() => setShowAddColumn(true)}
          className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-1 ring-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-cyan-500/30"
        >
          <Plus size={16} /> Add Column
        </button>
      </div>

      <div className="relative overflow-x-auto flex-1">
        <div className="inline-block min-w-full border border-border rounded-lg">
          <table
            className="min-w-full divide-y divide-border table-fixed"
            style={{ width: "max-content" }}
          >
            <thead className="bg-background/70">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.id}
                    className="px-6 py-3 text-left text-xs font-medium text-text/60 uppercase tracking-wider w-48"
                  >
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-background divide-y divide-border">
              {data.length > 0 ? (
                data.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-secondary/50 transition-colors border-b border-border/30"
                  >
                    {columns.map((column) => (
                      <td
                        key={column.id}
                        className="px-6 py-4 text-sm text-text whitespace-nowrap w-48"
                      >
                        {column.id === "callStatus" ? (
                          <span
                            className={`
                              px-2 py-1 rounded-full text-xs
                              ${
                                row[column.id] === "Dialing..."
                                  ? "bg-yellow-100 text-yellow-800"
                                  : ""
                              }
                              ${
                                row[column.id] === "In Call"
                                  ? "bg-green-100 text-green-800"
                                  : ""
                              }
                              ${
                                row[column.id] === "Call Ended"
                                  ? "bg-blue-100 text-blue-800"
                                  : ""
                              }
                              ${
                                row[column.id] === "No Answer"
                                  ? "bg-red-100 text-red-800"
                                  : ""
                              }
                              ${
                                row[column.id] === "Busy"
                                  ? "bg-orange-100 text-orange-800"
                                  : ""
                              }
                              ${
                                row[column.id] === "Call Failed"
                                  ? "bg-red-100 text-red-800"
                                  : ""
                              }
                              ${
                                row[column.id] === "Voicemail"
                                  ? "bg-purple-100 text-purple-800"
                                  : ""
                              }
                            `}
                          >
                            {row[column.id]}
                          </span>
                        ) : column.id === "callbackRequested" ? (
                          row[column.id] ? (
                            "Yes"
                          ) : (
                            "No"
                          )
                        ) : (
                          row[column.id as keyof SalesData]
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-4 text-sm text-text text-center"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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
    </div>
  );
};

export default SalesTable;
