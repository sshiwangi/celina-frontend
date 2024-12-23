"use client";

import React, { useState } from "react";
import ModelTab from "./ModelTab";
import VoiceTab from "./VoiceTab";
import ToolsTab from "./ToolsTab";

export interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  testId: string;
}

const tabs: Tab[] = [
  {
    id: "llm-model",
    label: "Model",
    icon: (
      <svg
        width="26"
        height="21"
        viewBox="0 0 26 21"
        fill="none"
        className="h-[14px] w-[14px] fill-primary transition-all"
      >
        {/* SVG path for model */}
        <path
          d="M0 10.0586C0 13.623 2.44141 15.9863 6.10352 15.9863C9.70703 15.9863 12.1191 13.8672 12.1191 10.6738..."
          fillOpacity="0.85"
        />
      </svg>
    ),
    title: "Model",
    testId: "assistant-tab-llm-model",
  },

  {
    id: "voice",
    label: "Voice",
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        className="h-[14px] w-[14px] fill-icon/30 group-hover:fill-primary transition-all"
      >
        <path
          d="M9 13.5C11.475 13.5 13.5 11.475 13.5 9V4.5C13.5 2.025 11.475 0 9 0C6.525 0 4.5 2.025 4.5 4.5V9C4.5 11.475 6.525 13.5 9 13.5ZM8.25 4.5C8.25 4.0875 8.5875 3.75 9 3.75C9.4125 3.75 9.75 4.0875 9.75 4.5V9C9.75 9.4125 9.4125 9.75 9 9.75C8.5875 9.75 8.25 9.4125 8.25 9V4.5ZM16.5 9C16.5 12.675 13.675 15.5 10 15.5H8C4.325 15.5 1.5 12.675 1.5 9H0C0 13.025 3.2 16.225 7.25 16.45V19.5H10.75V16.45C14.8 16.225 18 13.025 18 9H16.5Z"
          fillOpacity="0.85"
        />
      </svg>
    ),
    title: "Voice",
    testId: "assistant-tab-voice",
  },
  {
    id: "tools",
    label: "Tools",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="h-[14px] w-[14px] fill-icon/30 group-hover:fill-primary transition-all"
      >
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          fillOpacity="0.85"
        />
      </svg>
    ),
    title: "Tools",
    testId: "assistant-tab-tools",
  },
];

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "llm-model":
      return <ModelTab />;
    case "voice":
      return <VoiceTab />;
    case "tools":
      return <ToolsTab />;
    default:
      return null;
  }
};

export default function AssistantTabs() {
  const [activeTab, setActiveTab] = useState("llm-model");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-testid="assistant-tabs-card" className="h-full">
      <div
        dir="ltr"
        data-orientation="horizontal"
        className="flex flex-col flex-1 pt-8 h-full"
        data-testid="assistant-tabs"
      >
        <div className="flex flex-wrap items-start justify-between py-4 px-4 z-10 gap-y-2 text-white">
          {/* Desktop Tabs */}
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="items-center justify-center text-muted-foreground overflow-x-auto p-1.5 gap-x-2  backdrop-blur-lg border border-border rounded-xl shadow-sm shadow-black/20 xl:flex hidden"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                data-state={activeTab === tab.id ? "active" : "inactive"}
                className={`
                  inline-flex items-center justify-center whitespace-nowrap px-3 py-1 
                  text-sm font-medium hover:bg-hover disabled:pointer-events-none 
                  disabled:opacity-50 focus:border data-[state=active]:shadow 
                  data-[state=active]:bg-foreground data-[state=active]:text-primary 
                  data-[state=active]:border-border border-transparent group rounded-[8px] 
                  gap-x-2 m-0 transition-all duration-100 ease-in-out active:scale-[0.95] 
                  text-text/50 hover:text-text/90
                `}
                onClick={() => setActiveTab(tab.id)}
                data-testid={tab.testId}
              >
                {tab.icon}
                <span className="block text-text/90 transition-all">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="xl:hidden block mb-4 w-auto relative">
            <button
              type="button"
              className="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input px-3 py-2 text-sm shadow-sm ring-offset-background w-[130px] text-text"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="flex items-center">
                {tabs.find((tab) => tab.id === activeTab)?.icon}
                <span className="ml-2">
                  {tabs.find((tab) => tab.id === activeTab)?.label}
                </span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
                className="h-4 w-4 opacity-50"
              >
                <path
                  d="M4.93179 5.43179C4.75605 5.60753..."
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 w-full mt-1 border border-border rounded-md shadow-lg">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-hover"
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsOpen(false);
                    }}
                  >
                    <span className="flex items-center">
                      {tab.icon}
                      <span className="ml-2">{tab.label}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-4 h-full">
          <div className="pb-4 h-full flex flex-col overflow-auto flex-1">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
