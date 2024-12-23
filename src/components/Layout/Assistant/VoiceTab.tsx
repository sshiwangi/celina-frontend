"use client";

import { useState } from "react";
import Link from "next/link";
import VoiceDropdown, { Voice } from "./VoiceDropdown";



export default function VoiceTab() {
  const [provider, setProvider] = useState("openai");
  
  const [selectedVoice, setSelectedVoice] = useState<Voice>({
    id: "alloy",
    name: "Alloy",
    voice: "alloy",
    previewText: "Hey there! I'm Alloy, a versatile voice ready to help.",
  });

  return (
    <div className="bg-background/70 rounded-2xl p-4 border border-border">
      {/* Header */}
      <div className="px-2 mb-3">
        <h2
          className="text-lg font-medium text-text"
          data-testid="custom-functions-header"
        >
          Voice Configuration
        </h2>
        <div
          className="text-xs text-text/60"
          data-testid="voice-selection-instructions"
        >
          <p>
            Choose from the list of voices, or sync your{" "}
            <Link
              href="/library/voice"
              className="text-primary hover:underline"
              data-testid="voice-library-link"
            >
              voice library
            </Link>{" "}
            if you aren't able to find your voice in the dropdown. If you are
            still facing any error, you can enable custom voice and add a voice
            ID manually.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-border scale-110 mb-2" />

      {/* Voice Options */}
      <div
        className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-6 px-2"
        data-testid="voice-options-container"
      >
        {/* Provider Selection */}
        <div
          className="space-y-2 flex flex-col flex-1 py-1"
          data-testid="voice-provider-form-item"
        >
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-text/60"
            data-testid="voice-provider-label"
          >
            Provider
          </label>
          <button
            type="button"
            role="combobox"
            aria-expanded={false}
            className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md px-3 py-2 text-sm 
                     ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring focus:border 
                     disabled:cursor-not-allowed disabled:opacity-50 bg-secondary text-text hover:bg-foreground 
                     border border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out"
            data-testid="voice-provider-select-trigger"
          >
            <span data-testid="voice-provider-select-value">{provider}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className="h-4 w-4 opacity-50"
            >
              <path
                d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Voice Selection */}
        <div
          className="space-y-2 flex flex-col flex-1 py-1"
          data-testid="voice-id-form-item"
        >
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm flex text-text/60"
            data-testid="voice-id-label"
          >
            Voice
          </label>
          <VoiceDropdown
            selectedVoice={selectedVoice}
            onVoiceSelect={setSelectedVoice}
          />
        </div>
      </div>

      {/* Custom Voice Toggle */}
    </div>
  );
}
