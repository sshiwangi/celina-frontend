"use client";

import React from "react";
import {
  DollarSign,
  Clock,
  Phone,
  MoreVertical,
  CircleParkingOffIcon,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  stats: Array<{
    color: string;
    width: string;
    isFirst?: boolean;
    isLast?: boolean;
  }>;
  icon?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  stats,
  icon,
}) => {
  return (
    <div className="group h-auto flex-1 border border-border p-[12px] rounded-2xl transition-all duration-150 ease-in-out bg-secondary">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-2 mb-2 text-base md:text-md lg:text-lg">
          <div className="flex items-center gap-2">
            <div className="bg-foreground border border-border rounded-xl p-[6px] shadow-sm shadow-black/10">
              {icon || (
                <DollarSign className="w-[18px] h-[18px] text-icon/50" />
              )}
            </div>
            <h3 className="font-bold text-text/70">{title}</h3>
            <CircleParkingOffIcon className="w-[16px] h-[16px] text-yellow-300" />
          </div>
          <div className="font-bold font-mono text-primary bg-background/40 rounded-xl p-[6px] px-3 border border-border">
            {value} <span className="text-text/20">{unit}</span>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <div className="relative w-full h-[6px] my-1 flex">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative h-[13px]"
                  style={{ width: stat.width }}
                >
                  <div
                    className={`h-full ${
                      stat.isFirst ? "rounded-l-full" : ""
                    } ${stat.isLast ? "rounded-r-full" : ""}`}
                    style={{
                      backgroundColor: `${stat.color}66`,
                      border: `1px solid ${stat.color}cc`,
                      width: "100%",
                      height: "13px",
                      opacity: 0.7,
                    }}
                  >
                    <div className="w-full h-full text-text text-xs text-center flex items-center justify-center cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AssistantDetailsProps {
  assistant: {
    name: string;
  };
}

export const AssistantDetails: React.FC<AssistantDetailsProps> = ({
  assistant,
}) => {
  return (
    <div
      className="flex flex-col hide-scrollbar w-full"
      data-testid="assistant-viewer"
    >
      <div data-testid="assistant-details-card">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start py-4 px-2">
          <div className="inline-flex mb-2 w-full sm:w-auto">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div
                  className="chakra-editable w-full text-text"
                  data-testid="assistant-name-editable"
                >
                  <span
                    tabIndex={0}
                    style={{ paddingTop: 0, paddingBottom: 0, width: "100%" }}
                    className="chakra-editable__preview"
                  >
                    {assistant.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="chakra-stack inline-flex flex-row-reverse gap-2 w-full sm:w-auto justify-end">
            <div className="chakra-stack">
              <div style={{ opacity: 1 }}>
                <button className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-1 ring-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-cyan-500/30">
                  <span className="mr-2">
                    <Phone className="w-6 h-6 text-white/50" />
                  </span>
                  <div className="text-md font-medium ml-1">
                    Talk with Assistant
                  </div>
                </button>
              </div>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 w-10 min-w-[40px]">
              <MoreVertical className="w-4 h-4 text-icon/50 rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantDetails;
