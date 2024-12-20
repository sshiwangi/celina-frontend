"use client";

import React from "react";
import { CircleParkingOffIcon } from "lucide-react";

const mockInstructions = `Product: Enterprise Software Solution
Target Market: Medium to large businesses
Key Points:
- Focus on cost savings and efficiency improvements
- Highlight cloud-based features and scalability
- Emphasize 24/7 customer support
- Discuss integration capabilities with existing systems
- Mention 30-day free trial option

Pricing Strategy:
- Basic Plan: $499/month
- Professional Plan: $999/month
- Enterprise Plan: Custom pricing

Always collect information about:
1. Current business processes
2. Pain points with existing solutions
3. Decision-making timeline
4. Budget constraints`;

const AgentInstructions = () => {
  return (
    <div className="flex flex-col flex-1 lg:gap-4 bg-background/70 rounded-2xl sm:px-4 pt-4 sm:py-4 border border-border">
      <div className="px-2 mb-2 flex flex-row justify-between items-center w-full">
        <div>
          <h2 className="text-lg font-medium text-text">Sales Instructions</h2>
          <p className="text-xs text-text/60">
            Define what products or services the agent will sell and how.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:gap-4 overflow-hidden h-full rounded-xl p-4 m-[-1px] border border-border shadow-md bg-secondary/30">
        <div className="w-full flex h-full flex-col gap-10">
          <div className="h-full flex flex-col pb-4 min-h-80">
            <div className="space-y-2 h-full w-full">
              <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-muted-foreground flex flex-row items-center">
                Sales Strategy & Instructions
                <CircleParkingOffIcon className="w-[12px] h-[12px] fill-yellow-400 ml-2 cursor-pointer" />
              </label>
              <textarea
                value={mockInstructions}
                placeholder="Define sales strategy and instructions..."
                className="flex w-full rounded-md text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 px-3 py-2 mt-2 h-auto min-h-80 box-border resize-y bg-secondary text-text hover:bg-hover border border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out"
              />
            </div>
          </div>
          <button className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-1 ring-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-cyan-500/30">
            Update Instructions
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentInstructions;