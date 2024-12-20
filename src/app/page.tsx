"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Home/navbar";
import FloatingParticles from "@/components/Home/FloatingParticles";
import { useCallback, useEffect, useState } from "react";
import { MicIcon, StopCircle } from "lucide-react";

interface AudioBlobProps {
  isListening?: boolean;
}

const AudioBlob: React.FC<AudioBlobProps> = ({ isListening = true }) => {
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
            Math.random() * intensity * Math.sin(Date.now() / 200 + i);
          return 90 + variance;
        });
    },
    [isListening]
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
  const [isListening, setIsListening] = useState(false);

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
            Engineers Gonna Build, <br /> AI's Gonna Sell.
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
            <AudioBlob isListening={isListening} />

            <div className="absolute w-full -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
              {!isListening ? (
                <button
                  onClick={() => setIsListening(true)}
                  className="p-4 flex items-center justify-center text-md rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl font-medium hover:from-cyan-500 hover:to-blue-600 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-cyan-400/20"
                >
                  <MicIcon />
                  {/* Try Celina */}
                </button>
              ) : (
                <button
                  onClick={() => setIsListening(false)}
                  className="p-4 flex items-center justify-center text-md rounded-full bg-red-500/10 text-red-400 border border-red-400/30 hover:bg-red-500/20 transition-all"
                >
                  <StopCircle />
                </button>
              )}
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
