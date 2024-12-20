"use client";

import React from "react";
import { CircleParkingOffIcon } from "lucide-react";

const mockAgentData = {
  name: "Sarah Johnson",
  personality:
    "Professional, empathetic, and solution-oriented. Sarah is an experienced sales representative who focuses on building genuine relationships with clients. She's patient yet persistent, always maintaining a positive and helpful demeanor while effectively addressing customer concerns.",
};

const AgentProfile = () => {
  return (
    <div className="flex flex-col flex-1 lg:gap-4 bg-background/70 rounded-2xl sm:px-4 pt-4 sm:py-4 border border-border">
      <div className="px-2 mb-2 flex flex-row justify-between items-center w-full">
        <div>
          <h2 className="text-lg font-medium text-text">Agent Profile</h2>
          <p className="text-xs text-text/60">
            Configure your AI agent's identity and personality.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-4 overflow-hidden h-full rounded-xl p-4 m-[-1px] border border-border shadow-md bg-secondary/30">
        <div className="lg:order-1 w-full">
          {/* Agent Name */}
          <div className="chakra-stack pt-4 lg:pt-0">
            <div className="space-y-2 w-full">
              <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-muted-foreground flex flex-row items-center">
                Agent Name
                <CircleParkingOffIcon className="w-[12px] h-[12px] fill-yellow-400 ml-2 cursor-pointer" />
              </label>
              <input
                value={mockAgentData.name}
                className="flex h-9 w-full rounded-md text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(240,5%,50%)] outline-none focus-visible:ring-1 ring-ring disabled:cursor-not-allowed disabled:opacity-50 px-3 py-1 mt-2 bg-secondary text-text hover:bg-hover border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out border-input"
              />
            </div>
          </div>

          {/* Agent Personality */}
          <div className="h-full flex flex-col pb-4 min-h-80">
            <div className="space-y-2 h-full w-full">
              <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-muted-foreground flex flex-row items-center">
                Agent Personality
                <CircleParkingOffIcon className="w-[12px] h-[12px] fill-yellow-400 ml-2 cursor-pointer" />
              </label>
              <textarea
                value={mockAgentData.personality}
                placeholder="Describe the agent's personality..."
                className="flex w-full rounded-md text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 px-3 py-2 mt-2 h-auto min-h-80 box-border resize-y bg-secondary text-text hover:bg-hover border border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;