"use client";
import { useState } from "react";
import AssistantList from "@/components/Layout/Assistant/AssistantList";
import AgentProfile from "@/components/Layout/Assistant/AgentProfile";
import AgentTools from "@/components/Layout/Assistant/AgentTools";
import AgentInstructions from "@/components/Layout/Assistant/AgentInstructions";


export default function AssistantsPage() {
  const [tabs, setTabs] = useState([
    { name: "Agent Profile", isActive: true },
    { name: "Agent Tools", isActive: false },
    { name: "Agent Instructions", isActive: false },
  ]);

  // Keep track of selected tab index
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (clickedIndex: number) => {
    setTabs(
      tabs.map((tab, index) => ({
        ...tab,
        isActive: index === clickedIndex,
      }))
    );
    setSelectedTab(clickedIndex); // Update selected tab
  };

  return (
    <>
      <div
        data-testid="assistant-menu"
        className="border-r border-border hide-scrollbar h-[200px] sm:h-full w-full sm:max-w-[320px]"
      >
        <AssistantList tabs={tabs} onTabClick={handleTabClick} />
      </div>

      <div
        className="flex flex-col hide-scrollbar w-full px-2"
        data-testid="assistant-viewer"
      >
        {selectedTab === 0 && <AgentProfile />}
        {selectedTab === 1 && <AgentTools />}
        {selectedTab === 2 && <AgentInstructions />}
      </div>
    </>
  );
}
