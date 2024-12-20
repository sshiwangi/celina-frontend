"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { PhoneCall } from "lucide-react";

const SalesList = () => {

  const reports = [
    {
      name: "Today's Calls",
      date: new Date().toLocaleDateString(),
      count: 25,
    },
    {
      name: "Yesterday's Calls",
      date: new Date(Date.now() - 86400000).toLocaleDateString(),
      count: 32,
    },
    {
      name: "This Week",
      date: "Last 7 days",
      count: 158,
    },
  ];

  return (
    <div className="w-64 border-r border-border bg-background/50 p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 px-2 py-1.5">
        <PhoneCall size={16} className="text-text/60" />
        <h2 className="text-sm font-medium text-text/80">Sales Reports</h2>
      </div>

      <div className="flex flex-col gap-1">
        {reports.map((report, index) => (
          <button
            key={index}
            onClick={() => {}}
            className="flex flex-col gap-1 p-2 hover:bg-secondary/80 rounded-lg transition-all duration-150 text-left"
          >
            <span className="text-sm font-medium text-text/80">
              {report.name}
            </span>
            <span className="text-xs text-text/60">
              {report.date} • {report.count} calls
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SalesList;
