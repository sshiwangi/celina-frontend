"use client";

import { useState, useRef } from "react";
import { PlayCircle, StopCircle } from "lucide-react";

export interface Voice {
  id: string;
  name: string;
  voice: string;
  previewText: string;
}

const OPENAI_VOICES: Voice[] = [
  {
    id: "alloy",
    name: "Alloy",
    voice: "alloy",
    previewText: "Hey there! I'm Alloy, a versatile voice ready to help.",
  },
  {
    id: "echo",
    name: "Echo",
    voice: "echo",
    previewText: "Hi, I'm Echo, your friendly AI assistant.",
  },
  {
    id: "fable",
    name: "Fable",
    voice: "fable",
    previewText: "Hello, I'm Fable, bringing stories to life.",
  },
  {
    id: "onyx",
    name: "Onyx",
    voice: "onyx",
    previewText: "Greetings, I'm Onyx, ready to assist you.",
  },
  {
    id: "nova",
    name: "Nova",
    voice: "nova",
    previewText: "Hi there, I'm Nova, here to help you out.",
  },
  {
    id: "shimmer",
    name: "Shimmer",
    voice: "shimmer",
    previewText: "Hello! I'm Shimmer, delighted to assist you.",
  },
];

interface VoiceDropdownProps {
  selectedVoice: Voice;
  onVoiceSelect: (voice: Voice) => void;
}

export default function VoiceDropdown({
  selectedVoice,
  onVoiceSelect,
}: VoiceDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

 const playVoicePreview = async (voice: Voice) => {
   try {
     if (playingVoice === voice.id) {
       audioRef.current?.pause();
       setPlayingVoice(null);
       return;
     }

     if (audioRef.current) {
       audioRef.current.pause();
     }

     const response = await fetch("https://api.openai.com/v1/audio/speech", {
       method: "POST",
       headers: {
         Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
         "Content-Type": "application/json", // This was missing
       },
       body: JSON.stringify({
         // Send as JSON, not FormData
         model: "tts-1",
         input: voice.previewText,
         voice: voice.voice,
         response_format: "mp3",
       }),
     });

     if (!response.ok) {
       const errorData = await response.json();
       console.error("API Error:", errorData);
       throw new Error(errorData.error?.message || "Failed to fetch audio");
     }

     const audioBlob = await response.blob();
     const audioUrl = URL.createObjectURL(audioBlob);

     const audio = new Audio(audioUrl);
     audioRef.current = audio;

     audio.onended = () => {
       setPlayingVoice(null);
       URL.revokeObjectURL(audioUrl);
     };

     const playPromise = audio.play();
     if (playPromise !== undefined) {
       playPromise
         .then(() => {
           setPlayingVoice(voice.id);
         })
         .catch((err) => {
           console.error("Playback failed:", err);
           setPlayingVoice(null);
         });
     }
   } catch (error) {
     console.error("Error playing voice preview:", error);
     setPlayingVoice(null);
   }
 };
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full items-center ring-1 ring-transparent text-sm font-bold 
                 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] group rounded-lg 
                 hover:border-border hover:shadow-sm hover:shadow-black/10 hover:text-text h-10 px-4 py-2 
                 justify-between text-ellipsis overflow-hidden whitespace-nowrap bg-secondary text-text 
                 hover:bg-foreground border border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out"
        role="combobox"
        aria-expanded={isOpen}
        data-testid="voice-selection-button"
      >
        {selectedVoice.name} ({selectedVoice.id})
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="h-4 w-4 opacity-50"
          data-testid="voice-selection-caret-icon"
        >
          <path
            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-secondary border border-border rounded-lg shadow-lg overflow-hidden">
          {OPENAI_VOICES.map((voice) => (
            <div
              key={voice.id}
              className="flex items-center justify-between px-4 py-2 hover:bg-foreground cursor-pointer"
              onClick={() => {
                onVoiceSelect(voice);
                setIsOpen(false);
              }}
            >
              <span className="text-sm font-medium text-text">
                {voice.name}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playVoicePreview(voice);
                }}
                className="p-1 hover:bg-background rounded-full transition-colors"
              >
                {playingVoice === voice.id ? (
                  <StopCircle className="w-5 h-5 text-primary" />
                ) : (
                  <PlayCircle className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}