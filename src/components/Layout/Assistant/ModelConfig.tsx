"use client";

import React from "react";
import { ChevronDown, CircleParkingOffIcon } from "lucide-react";

interface ModelConfigProps {
  providerValue?: string;
  modelValue?: string;
  temperatureValue?: number;
  maxTokens?: number;
  firstMessage?: string;
  systemPrompt?: string;
  detectEmotion?: boolean;
}

const ModelConfig: React.FC<ModelConfigProps> = ({
  providerValue = "openai",
  modelValue = "gpt-3.5-turbo",
  temperatureValue = 0.7,
  maxTokens = 250,
  firstMessage = "Hello, this is Ava. How may I assist you today?",
  systemPrompt = "",
  detectEmotion = true,
}) => {
  return (
    <div className="flex flex-col lg:gap-4 bg-background/70 rounded-2xl sm:px-4 pt-4 sm:py-4 border border-border">
      {/* Header */}
      <div className="px-2 mb-2 flex flex-row justify-between items-center w-full">
        <div>
          <h2
            className="text-lg font-medium text-text"
            data-testid="privacy-header"
          >
            Model
          </h2>
          <p className="text-xs text-text/60">
            This section allows you to configure the model for the assistant.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:gap-4 overflow-hidden h-full rounded-xl p-4 m-[-1px] border border-border shadow-md bg-secondary/30">
        {/* Right Column - Messages */}
        <div
          className="lg:order-1 w-full"
          data-testid="first-message-prompt-container"
        >
          {/* First Message */}
          <div
            className="chakra-stack pt-4 lg:pt-0"
            data-testid="first-message-box"
          >
            <div className="space-y-2 w-full">
              <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-muted-foreground flex flex-row items-center">
                First Message
                <CircleParkingOffIcon className="w-[12px] h-[12px] fill-yellow-400 ml-2 cursor-pointer" />
              </label>
              <input
                value={firstMessage}
                className="flex h-9 w-full rounded-md text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(240,5%,50%)] outline-none focus-visible:ring-1 ring-ring disabled:cursor-not-allowed disabled:opacity-50 px-3 py-1 mt-2 bg-secondary text-text hover:bg-hover border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out border-input"
              />
            </div>
          </div>

          {/* System Prompt */}
          <div
            className="chakra-stack flex-1 min-h-80"
            data-testid="system-prompt-box"
          >
            <div className="space-y-2 w-full">
              <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-muted-foreground flex flex-row items-center">
                System Prompt
                <CircleParkingOffIcon className="w-[12px] h-[12px] fill-yellow-400 ml-2 cursor-pointer" />
              </label>
              <textarea
                value={systemPrompt}
                placeholder="Add your prompt here..."
                className="flex w-full rounded-md text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 px-3 py-2 mt-2 h-auto min-h-80 box-border resize-y bg-secondary text-text hover:bg-hover border border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelConfig;