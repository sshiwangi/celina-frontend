import { SYSTEM_MESSAGE } from "@/utils/prompt";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not set");
    }

    // Create a realtime session with OpenAI
    const response = await fetch(
      "https://api.openai.com/v1/realtime/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-realtime-preview-2024-12-17",
          instructions: SYSTEM_MESSAGE,
          voice: "shimmer",
          turn_detection: {
            type: "server_vad",
            threshold: 1,
            prefix_padding_ms: 300,
            silence_duration_ms: 500,
            create_response: true,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI Session Error:", error);
      throw new Error(
        `OpenAI returned ${response.status}: ${JSON.stringify(error)}`
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Session API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate session",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
