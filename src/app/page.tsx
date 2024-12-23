"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Home/navbar";
import FloatingParticles from "@/components/Home/FloatingParticles";
import { useCallback, useEffect, useRef, useState } from "react";
import { MicIcon, StopCircle } from "lucide-react";
import AudioPlayer from "@/components/Home/AudioPlayer";

interface AudioBlobProps {
  isListening?: boolean;
  audioLevel?: number;
}

interface WebRTCConnection {
  peerConnection: RTCPeerConnection | null;
  dataChannel: RTCDataChannel | null;
  audioStream: MediaStream | null;
  audioAnalyzer?: AnalyserNode | null;
  audioContext?: AudioContext | null;
}

const AudioBlob: React.FC<AudioBlobProps> = ({
  isListening = false,
  audioLevel = 0,
}) => {
  const [points, setPoints] = useState(Array(40).fill(0));
  const [baseRotation, setBaseRotation] = useState(0);

  const generatePoints = useCallback(
    (intensity: number) => {
      return Array(40)
        .fill(0)
        .map((_, i) => {
          if (!isListening) {
            return 90 + Math.sin(i * 0.5 + Date.now() / 1000) * 4;
          }

          const variance =
            Math.random() *
            intensity *
            Math.sin(Date.now() / 200 + i) *
            (1 + audioLevel / 100);
          return 90 + variance;
        });
    },
    [isListening, audioLevel]
  );

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setBaseRotation((prev) => (prev + 1.2) % 360); // Faster rotation
    }, 16);

    const morphInterval = setInterval(() => {
      setPoints(generatePoints(isListening ? 45 : 0)); // More intense morphing
    }, 40); // Faster updates

    return () => {
      clearInterval(rotationInterval);
      clearInterval(morphInterval);
    };
  }, [isListening, generatePoints]);

  const createBlobPath = () => {
    const center = { x: 200, y: 200 };
    return (
      points
        .map((radius, index) => {
          const angle = (index / points.length) * Math.PI * 2;
          const x = center.x + Math.cos(angle) * radius;
          const y = center.y + Math.sin(angle) * radius;
          return index === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        })
        .join(" ") + " Z"
    );
  };

  return (
    <div className="relative w-[350px] h-[350px] group">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl animate-pulse" />

      <svg viewBox="0 0 400 400" className="w-full h-full transform-gpu">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" result="coloredBlur" />
            <feFlood floodColor="#0FF" floodOpacity="0.3" result="glowColor" />
            <feComposite
              in="glowColor"
              in2="coloredBlur"
              operator="in"
              result="softGlow"
            />
            <feMerge>
              <feMergeNode in="softGlow" />
              <feMergeNode in="softGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#06B6D4", stopOpacity: 0.9 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#22D3EE", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#0EA5E9", stopOpacity: 0.9 }}
            />
          </linearGradient>
        </defs>
        <motion.path
          d={createBlobPath()}
          fill="url(#blobGradient)"
          filter="url(#glow)"
          style={{ transformOrigin: "center" }}
          animate={{
            rotate: baseRotation,
            scale: isListening ? [1, 1.02, 1] : 1,
          }}
          transition={{
            rotate: { duration: 0.016, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity },
          }}
        />
      </svg>

      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 rounded-full transition-all duration-300" />
    </div>
  );
};

export default function Home() {
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  // Add this state at the top of your Home component
  const [audioComponents, setAudioComponents] = useState<JSX.Element[]>([]);
  const [transcription, setTranscription] = useState<string>("");

  const [isListening, setIsListening] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const webRTCRef = useRef<WebRTCConnection>({
    peerConnection: null,
    dataChannel: null,
    audioStream: null,
    audioAnalyzer: null,
    audioContext: null,
  });
  // console.log("webRTCRef has been created:", webRTCRef.current);
  const animationFrameRef = useRef<number>();

  const setupAudioAnalyzer = (stream: MediaStream) => {
    try {
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();

      // Increase sensitivity
      analyser.fftSize = 1024; // Increased from 256 for better resolution
      analyser.minDecibels = -90;
      analyser.maxDecibels = -10;
      analyser.smoothingTimeConstant = 0.85;

      // Connect the stream to the analyzer
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      webRTCRef.current.audioContext = audioContext;
      webRTCRef.current.audioAnalyzer = analyser;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const analyzeAudio = () => {
        if (!webRTCRef.current.audioAnalyzer) return;

        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length;

        // Scale the average to be more responsive
        const scaledLevel = Math.min(100, (average / 128) * 100);
        setAudioLevel(scaledLevel);

        animationFrameRef.current = requestAnimationFrame(analyzeAudio);
      };

      analyzeAudio();
      console.log("Audio analyzer setup complete");
    } catch (error) {
      console.error("Failed to setup audio analyzer:", error);
    }
  };

  const initializeWebRTC = async () => {
    try {
      // Get ephemeral key from your server
      const tokenResponse = await fetch("/api/session"); // Updated path
      console.log("Token response received:", tokenResponse);
      if (!tokenResponse.ok) {
        throw new Error(`Session fetch failed: ${tokenResponse.statusText}`);
      }

      const data = await tokenResponse.json();
      console.log("Session data received:", data);
      if (!data.client_secret?.value) {
        throw new Error("Invalid session response format");
      }

      const EPHEMERAL_KEY = data.client_secret.value;
      console.log("Ephemeral Key:", EPHEMERAL_KEY);

      // Create peer connection
      const pc = new RTCPeerConnection({
        iceServers: [
          {
            urls: "stun:stun.l.google.com:19302",
          },
        ],
      });
      console.log("RTCPeerConnection created:", pc);

      pc.ontrack = (event) => {
        console.log("Received remote track:", event);
        const [remoteStream] = event.streams;

        // Create a new audio element for remote audio
        const remoteAudio = new Audio();
        remoteAudio.srcObject = remoteStream;
        remoteAudio
          .play()
          .catch((err) => console.error("Error playing remote audio:", err));
      };

      webRTCRef.current.peerConnection = pc;

      // Add connection state logging
      pc.onconnectionstatechange = (e) => {
        console.log("Connection state:", pc.connectionState);
      };

      pc.oniceconnectionstatechange = (e) => {
        console.log("ICE connection state:", pc.iceConnectionState);
      };

      // Get microphone access
      try {
        console.log("Attempting to access microphone...");
        const ms = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });
        console.log("Microphone access granted:", ms);
        webRTCRef.current.audioStream = ms;
        pc.addTrack(ms.getTracks()[0]);

        pc.addTransceiver("audio", {
          direction: "sendrecv",
          streams: [ms], // ms is your MediaStream from getUserMedia
        });

        // Set up the audio analyzer here!
        setupAudioAnalyzer(ms); // Add this line

        console.log("Audio track added to peer connection:", ms.getTracks()[0]);
      } catch (micError) {
        console.error("Microphone access error:", micError);
        throw new Error(`Microphone access failed: ${micError.message}`);
      }

      // Setup data channel
      const dc = pc.createDataChannel("oai-events");
      webRTCRef.current.dataChannel = dc;
      console.log("Data channel created:", dc);

      dc.onopen = () => {
        console.log("Data channel opened");
      };
      dc.onclose = () => {
        console.log("Data channel closed");
      };
      dc.onerror = (error) => {
        console.error("Data channel error:", error);
      };

      dc.addEventListener("message", (e) => {
        const data = JSON.parse(e.data);
        console.log("Received message:", data);

        switch (data.type) {
          case "session.created":
            console.log("Session successfully created");
            break;

          case "input_audio_buffer.speech_started":
            setTranscription((prev) => prev + "\nYou: "); // Start new line for user input
            break;

          case "input_audio_buffer.speech_stopped":
            setTranscription((prev) => prev + "\n"); // End user input line
            break;

          case "audio.response.started":
            setTranscription((prev) => prev + "\nAI: "); // Start new line for AI response
            break;

          case "audio.response.message":
            if (data.text) {
              setTranscription((prev) => prev + data.text + " ");
            }
            // Handle audio data if present
            if (data.audio) {
              setAudioComponents((prev) => [
                ...prev,
                <AudioPlayer
                  key={data.event_id || Date.now()}
                  audioData={{
                    audio_end_ms: data.audio_end_ms || 0,
                    event_id: data.event_id || "",
                    item_id: data.item_id || "",
                    type: data.type,
                  }}
                  audioBuffer={data.audio}
                />,
              ]);
            }
            break;

          case "audio.response.ended":
            setTranscription((prev) => prev + "\n"); // End AI response line
            break;

          case "error":
            console.error("Error from OpenAI:", data.error);
            // Show error to user
            setTranscription((prev) => prev + "\nError: " + data.error);
            break;

          case "audio_buffer":
            if (data.audio) {
              setAudioComponents((prev) => [
                ...prev,
                <AudioPlayer
                  key={data.event_id}
                  audioData={{
                    audio_end_ms: data.audio_end_ms,
                    event_id: data.event_id,
                    item_id: data.item_id,
                    type: data.type,
                  }}
                  audioBuffer={data.audio}
                />,
              ]);
            }
            break;
        }
      });

      // Create and set offer
      console.log("Creating offer...");
      const offer = await pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: false,
      });
      console.log("Offer created:", offer);
      await pc.setLocalDescription(offer);
      console.log("Local description set:", offer);

      // Connect to OpenAI's realtime API
      const baseUrl = "https://api.openai.com/v1/realtime";
      const model = "gpt-4o-realtime-preview-2024-12-17";

      console.log("Connecting to OpenAI's realtime API...");
      const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
        method: "POST",
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${EPHEMERAL_KEY}`,
          "Content-Type": "application/sdp",
        },
      });

      console.log("SDP response received:", sdpResponse);
      if (!sdpResponse.ok) {
        console.error("OpenAI API response error:", sdpResponse.statusText);
        throw new Error(`OpenAI API failed: ${sdpResponse.statusText}`);
      }

      const answer = {
        type: "answer" as RTCSdpType,
        sdp: await sdpResponse.text(),
      };
      console.log("Received answer from OpenAI API:", answer);

      await pc.setRemoteDescription(answer);
      console.log("Remote description set:", answer);

      // Add this to check if audio is flowing
      pc.getReceivers().forEach((receiver) => {
        const track = receiver.track;
        if (track.kind === "audio") {
          console.log("Audio track stats:", receiver.getStats());

          // Monitor audio levels
          const audioContext = new AudioContext();
          const source = audioContext.createMediaStreamSource(
            new MediaStream([track])
          );
          const analyser = audioContext.createAnalyser();
          source.connect(analyser);

          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          const checkAudioLevels = () => {
            analyser.getByteFrequencyData(dataArray);
            const audioLevel =
              dataArray.reduce((a, b) => a + b) / dataArray.length;
            console.log("Incoming audio level:", audioLevel);
            requestAnimationFrame(checkAudioLevels);
          };
          checkAudioLevels();
        }
      });
      setIsListening(true);
    } catch (error) {
      console.error("Failed to initialize WebRTC:", error);
      setIsListening(false);
      // You might want to add toast notification here
      alert(`Failed to start: ${error.message}`);
    }
  };

  const stopWebRTC = useCallback(() => {
    // Cancel animation frame first
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }

    // Close audio context
    if (webRTCRef.current.audioContext) {
      webRTCRef.current.audioContext.close();
    }

    if (webRTCRef.current.audioStream) {
      webRTCRef.current.audioStream
        .getTracks()
        .forEach((track) => track.stop());
    }
    if (webRTCRef.current.dataChannel) {
      webRTCRef.current.dataChannel.close();
    }
    if (webRTCRef.current.peerConnection) {
      webRTCRef.current.peerConnection.close();
    }

    webRTCRef.current = {
      peerConnection: null,
      dataChannel: null,
      audioStream: null,
      audioAnalyzer: null,
      audioContext: null,
    };

    setIsListening(false);
    setAudioLevel(0); // Reset audio level
  }, []);

  const handleMicClick = async () => {
    if (!isListening) {
      await initializeWebRTC();
    } else {
      stopWebRTC();
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (isListening) {
        stopWebRTC();
      }
    };
  }, [isListening, stopWebRTC]);

  useEffect(() => {
    if (!audioElementRef.current) {
      const audioEl = new Audio();
      audioEl.autoplay = true;
      audioElementRef.current = audioEl;
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-white">
      <div className="absolute inset-0 " />

      <Navbar />

      <div className="max-w-7xl mx-auto px-8 pt-28">
        <FloatingParticles />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-2/3 h-2/3 bg-cyan-500/20 rounded-full filter blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-2/3 h-2/3 bg-blue-500/20 rounded-full filter blur-[120px] animate-pulse" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.h1
            className="text-7xl lg:text-8xl font-medium text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Engineers Gonna Build&apos; <br /> AI&apos;s Gonna Sell.
          </motion.h1>

          <div className=" text-center">
            <p className="text-lg text-gray-400">
              Stop Chasing Leads. Start Closing Deals.
            </p>
            <p className="text-md">
              <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                15,000 Calls
              </span>
              <span className="text-gray-400">
                {" "}
                a Minute — One Mission: Sell For You.
              </span>
            </p>
          </div>

          <div className="relative w-full flex items-center justify-center mb-20">
            <AudioBlob isListening={isListening} audioLevel={audioLevel} />

            <div className="absolute w-full -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
              <button
                onClick={handleMicClick}
                className={`p-4 flex items-center justify-center text-md rounded-full ${
                  !isListening
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-cyan-400/20"
                    : "bg-red-500/10 text-red-400 border border-red-400/30 hover:bg-red-500/20"
                } transition-all`}
              >
                {!isListening ? <MicIcon /> : <StopCircle />}
              </button>
              <p className="text-gray-400 text-center w-full">
                {isListening
                  ? "Celina is listening... Speak to experience AI sales magic!"
                  : "Click to try Celina"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
