"use client";

import React from "react";
import { CircleParkingOffIcon, Plus } from "lucide-react";

const mockActions = [
  {
    name: "Schedule Follow-up",
    instruction:
      "When prospect shows interest but needs more time, schedule a follow-up call within 48-72 hours. Confirm the best time for their schedule and send a calendar invite.",
  },
  {
    name: "Send Product Demo",
    instruction:
      "If prospect requests more information about specific features, send a customized product demo video focusing on their areas of interest. Follow up within 24 hours.",
  },
  {
    name: "Price Quote",
    instruction:
      "Generate and send detailed price quote based on customer requirements. Include all relevant discounts and package options. Must be sent within 4 hours of request.",
  },
  {
    name: "Escalate to Manager",
    instruction:
      "For deals over $10,000 or when customer requests manager involvement, escalate to sales manager while maintaining relationship. Response required within 2 hours.",
  },
  {
    name: "Technical Consultation",
    instruction:
      "Schedule technical consultation when prospect has specific technical questions. Coordinate with technical team for a deep-dive session within 5 business days.",
  },
];

const ActionItem = ({
  action,
}: {
  action: { name: string; instruction: string };
}) => (
  <div className="border border-border rounded-lg p-4 mb-4 bg-secondary/20">
    <div className="space-y-2 w-full">
      <label className="font-medium text-sm text-muted-foreground">
        Action Name
      </label>
      <input
        value={action.name}
        className="flex h-9 w-full rounded-md text-sm px-3 py-1 mt-2 bg-secondary text-text hover:bg-hover border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out border-input"
      />
    </div>
    <div className="space-y-2 w-full mt-4">
      <label className="font-medium text-sm text-muted-foreground">
        Instructions
      </label>
      <textarea
        value={action.instruction}
        className="flex w-full rounded-md text-sm px-3 py-2 mt-2 h-24 resize-none bg-secondary text-text hover:bg-hover border border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out"
      />
    </div>
  </div>
);

const AgentTools = () => {
  return (
    <div className="flex flex-col flex-1 lg:gap-4 bg-background/70 rounded-2xl sm:px-4 pt-4 sm:py-4 border border-border">
      <div className="px-2 mb-2 flex flex-row justify-between items-center w-full">
        <div>
          <h2 className="text-lg font-medium text-text">Custom Actions</h2>
          <p className="text-xs text-text/60">
            Define custom actions your sales agent can perform.
          </p>
        </div>
        <button className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 inline-flex  items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-1 ring-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-cyan-500/30">
          <Plus size={16} />
          Add Action
        </button>
      </div>

      <div className="flex flex-col lg:gap-4 overflow-hidden h-full rounded-xl p-4 m-[-1px] border border-border shadow-md bg-secondary/30">
        <div className="w-full overflow-y-auto max-h-[calc(100vh-200px)]">
          {mockActions.map((action, index) => (
            <ActionItem key={index} action={action} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentTools;