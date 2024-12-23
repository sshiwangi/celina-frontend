"use client";

import { useState } from "react";
import { modelConfig } from "./personality";

export default function ModelTab() {
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(250);
  const [detectEmotion, setDetectEmotion] = useState(false);
  const [firstMessage, setFirstMessage] = useState(
    "Hi there! I'm Leo, your go-to for any SmartHome Innovations queries. How can I assist you today?"
  );

  return (
    <div className="flex h-full flex-col lg:gap-4 bg-background/70 rounded-2xl sm:px-4 pt-4 sm:py-4 border border-border">
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

      {/* Content */}
      <div className="flex flex-col lg:flex-row lg:gap-4 overflow-hidden h-full rounded-xl p-4 m-[-1px] border border-border shadow-md shadow-black/10">
        {/* Provider & Model Selection */}
        <div className="border-b border-input lg:w-72 lg:order-2 lg:border-0">
          <div className="flex flex-wrap gap-6 lg:gap-2 mb-2 lg:pt-1 min-h-40">
            {/* Provider Select */}
            <div className="space-y-2 w-full">
              <label className="font-medium text-sm text-muted-foreground">
                Provider
              </label>
              <select className="w-full h-9 rounded-md px-3 bg-secondary text-text border border-border">
                <option value="openai">OpenAI</option>
              </select>
            </div>

            {/* Model Select */}
            <div className="space-y-2 w-full">
              <label className="font-medium text-sm text-muted-foreground">
                Model
              </label>
              <select className="w-full h-9 rounded-md px-3 bg-secondary text-text border border-border">
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              </select>
            </div>
          </div>

          {/* Temperature */}
          <div className="space-y-2 w-full mt-4">
            <label className="font-medium text-sm text-muted-foreground flex items-center gap-2">
              Temperature
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                step="0.1"
                min="0"
                max="2"
                className="h-9 rounded-md px-3 w-16 ml-auto bg-secondary text-text border border-border"
              />
            </label>
            <div className="h-1 w-full bg-primary/20 rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${(temperature / 2) * 100}%` }}
              />
            </div>
          </div>

          {/* Max Tokens */}
          <div className="space-y-2 w-full mt-4">
            <label className="font-medium text-sm text-muted-foreground">
              Max Tokens
            </label>
            <input
              type="number"
              value={maxTokens}
              onChange={(e) => setMaxTokens(Number(e.target.value))}
              className="w-full h-9 rounded-md px-3 bg-secondary text-text border border-border"
            />
          </div>

          {/* Detect Emotion Toggle */}
          <div className="flex justify-between items-center mt-4">
            <label className="font-medium text-sm text-muted-foreground">
              Detect Emotion
            </label>
            <button
              onClick={() => setDetectEmotion(!detectEmotion)}
              className={`
                w-9 h-5 rounded-full transition-colors 
                ${detectEmotion ? "bg-primary" : "bg-gray-700/70"}
                relative
              `}
            >
              <span
                className={`
                  block h-4 w-4 rounded-full bg-white shadow-sm transition-transform
                  ${detectEmotion ? "translate-x-4" : "translate-x-0.5"}
                `}
              />
            </button>
          </div>
        </div>

        {/* First Message & System Prompt */}
        <div className="lg:order-1 w-full mt-4 lg:mt-0">
          <div className="space-y-4 h-full">
            {/* First Message */}
            <div className="space-y-2">
              <label className="font-medium text-sm text-muted-foreground">
                Greetings
              </label>
              <input
                value={modelConfig.greeting}
                onChange={(e) => setFirstMessage(e.target.value)}
                className="w-full h-9 rounded-md px-3 bg-secondary text-text border border-border"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm text-muted-foreground">
                Personality
              </label>
              <textarea
                className="w-full min-h-[100px] rounded-md px-3 py-2 bg-secondary text-text border border-border resize-y"
                placeholder="Define personality here..."
                value={modelConfig.personality}
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-sm text-muted-foreground">
                Voice Tonality
              </label>
              <select
                className="w-full h-9 rounded-md px-3 bg-secondary text-text border border-border"
                defaultValue="professional"
              >
                <option value="professional">Professional & Polished</option>
                <option value="friendly">Friendly & Warm</option>
                <option value="casual">Casual & Relaxed</option>
                <option value="empathetic">Empathetic & Understanding</option>
                <option value="energetic">Energetic & Enthusiastic</option>
                <option value="formal">Formal & Business-like</option>
                <option value="confident">Confident & Authoritative</option>
                <option value="soothing">Soothing & Calming</option>
                <option value="educational">Educational & Informative</option>
                <option value="persuasive">Persuasive & Engaging</option>
              </select>
              <p className="text-xs text-text/60 mt-1">
                Select the tone of voice for the AI assistant's speech delivery.
              </p>
            </div>

            {/* Instructions */}
            <div className="space-y-2">
              <label className="font-medium text-sm text-muted-foreground">
                Instructions
              </label>
              <textarea
                className="w-full min-h-[500px] h-full rounded-md px-3 py-2 bg-secondary text-text border border-border resize-y"
                placeholder="Add your instructions here..."
                value={modelConfig.instructions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
