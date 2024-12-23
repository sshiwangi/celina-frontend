import React, { useState } from "react";
import { PhoneCall, Plus } from "lucide-react";

interface SalesData {
  id: string | number;
  name: string;
  phone: string;
  callStatus: string;
  summary: string;
  leadConversionRate: string;
  salesSuccessRate: string;
  callDuration: string;
  [key: string]: string | number;
}

interface Column {
  id: string;
  name: string;
}

interface SalesTableProps {
  data: SalesData[];
}

const defaultColumns: Column[] = [
  { id: "name", name: "Name" },
  { id: "phone", name: "Phone" },
  { id: "callStatus", name: "Call Status" },
  { id: "summary", name: "Call Summary" },
  { id: "leadConversionRate", name: "Lead Conversion Rate" },
  { id: "salesSuccessRate", name: "Sales Success Rate" },
  { id: "callDuration", name: "Call Duration" },
];

const callStatuses = [
  "In Call",
  "Call Ended",
  "No Answer",
  "Busy",
  "Call Failed",
  "Voicemail",
];
const callDurations = ["0:30", "1:15", "2:45", "3:20", "4:00", "5:10", "0:45"];

const SalesTable = ({ data: initialData }: SalesTableProps) => {
  const [columns, setColumns] = useState<Column[]>(defaultColumns);
  const [showAddColumn, setShowAddColumn] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [data, setData] = useState<SalesData[]>(
    initialData.map((item) => ({
      ...item,
      callStatus: "-",
      callDuration: "-",
    }))
  );
  const [isSimulatingCalls, setIsSimulatingCalls] = useState(false);

  const simulateCallAPI = async (
    phoneNumber: string
  ): Promise<{ status: string; duration: string }> => {
    // Simulate API delay
    await new Promise((resolve) =>
      setTimeout(resolve, 5000 + Math.random() * 2000)
    );

    // Randomly select a status and duration
    const status =
      callStatuses[Math.floor(Math.random() * callStatuses.length)];
    const duration =
      status === "No Answer" || status === "Busy" || status === "Call Failed"
        ? "0:00"
        : callDurations[Math.floor(Math.random() * callDurations.length)];

    return { status, duration };
  };

  const startCalling = async () => {
    if (isSimulatingCalls) return;
    setIsSimulatingCalls(true);

    // Set all statuses to "Initiating..." at once
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        callStatus: "Initiating...",
        callDuration: "0:00",
      }))
    );

    // Create promises for all calls
    const callPromises = data.map(async (row, index) => {
      try {
        const { status, duration } = await simulateCallAPI(row.phone);
        return { index, status, duration };
      } catch (error) {
        console.error("Error simulating call:", error);
        return { index, status: "Call Failed", duration: "0:00" };
      }
    });

    // Wait for all calls to complete and update statuses
    const results = await Promise.all(callPromises);

    setData((prevData) => {
      const newData = [...prevData];
      results.forEach(({ index, status, duration }) => {
        newData[index] = {
          ...newData[index],
          callStatus: status,
          callDuration: duration,
        };
      });
      return newData;
    });

    setIsSimulatingCalls(false);
  };

  const addColumn = () => {
    if (newColumnName.trim()) {
      const columnId = newColumnName.toLowerCase().replace(/\s+/g, "_");
      setColumns([...columns, { id: columnId, name: newColumnName }]);
      setNewColumnName("");
      setShowAddColumn(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-text">Sales Data</h2>
        <button
          onClick={() => setShowAddColumn(true)}
          className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
                   focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
                   [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 inline-flex 
                   items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-1 ring-cyan-500/20 
                   bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500"
        >
          <Plus size={16} /> Add Column
        </button>
      </div>

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
            {data.length > 0 ? (
              data.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-secondary/50 transition-colors border-b border-border/30"
                >
                  {columns.map((column) => (
                    <td
                      key={column.id}
                      className="px-6 py-4 text-sm text-text whitespace-nowrap"
                    >
                      {column.id === "callStatus" ? (
                        <span
                          className={`
                            px-2 py-1 rounded-full text-xs
                            ${
                              row[column.id] === "Initiating..."
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
                      ) : (
                        row[column.id]
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

      <div className="flex w-full justify-center items-center p-4">
        <button
          onClick={startCalling}
          disabled={isSimulatingCalls}
          className={`flex items-center gap-2 px-3 py-1.5 text-white rounded-lg text-sm transition-all duration-150 
                   bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500
                   ring-1 ring-cyan-500/20 shadow-sm shadow-black/20 hover:shadow-cyan-500/30
                   disabled:opacity-50 disabled:cursor-not-allowed ${
                     isSimulatingCalls ? "opacity-50 cursor-not-allowed" : ""
                   }`}
        >
          <PhoneCall size={16} />
          {isSimulatingCalls ? "Calling in Progress..." : "Start Calling"}
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
                className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
                         text-white h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap text-sm font-bold 
                         group rounded-lg ring-1 ring-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-400 
                         hover:from-cyan-500 hover:to-blue-500"
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
