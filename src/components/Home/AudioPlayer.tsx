"use client";

import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  audioData: {
    audio_end_ms: number;
    event_id: string;
    item_id: string;
    type: string;
  };
  audioBuffer?: string; // Base64 audio data
}

const AudioPlayer = ({ audioData, audioBuffer }: AudioPlayerProps) => {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!audioBuffer) return;

    const playAudio = async () => {
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext();
        }

        const ctx = audioContextRef.current;
        const binaryData = atob(audioBuffer);
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const view = new Uint8Array(arrayBuffer);

        for (let i = 0; i < binaryData.length; i++) {
          view[i] = binaryData.charCodeAt(i);
        }

        const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);
        const source = ctx.createBufferSource();
        source.buffer = decodedBuffer;

        // Add gain control
        const gainNode = ctx.createGain();
        gainNode.gain.value = 1.0; // Adjust volume as needed

        // Connect nodes: source -> gain -> destination
        source.connect(gainNode);
        gainNode.connect(ctx.destination);

        // Start playback
        source.start(0);

        // Handle end time if provided
        if (audioData.audio_end_ms) {
          setTimeout(() => {
            try {
              source.stop();
            } catch (err) {
              // Ignore errors if already stopped
            }
          }, audioData.audio_end_ms);
        }

        // Cleanup when source ends
        source.onended = () => {
          source.disconnect();
          gainNode.disconnect();
        };
      } catch (error) {
        console.error("Audio playback error:", error);
      }
    };

    playAudio();

    return () => {
      if (audioContextRef.current?.state !== "closed") {
        audioContextRef.current?.close().catch(console.error);
      }
    };
  }, [audioBuffer, audioData.audio_end_ms]);

  return null;
};

export default AudioPlayer;
