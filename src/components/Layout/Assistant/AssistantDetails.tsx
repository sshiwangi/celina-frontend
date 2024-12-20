"use client";

import React from "react";
import {
  Phone,
  MoreVertical,
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
                  className=" w-full text-text"
                  data-testid="assistant-name-editable"
                >
                  <span
                    tabIndex={0}
                    style={{ paddingTop: 0, paddingBottom: 0, width: "100%" }}
                    className=""
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
