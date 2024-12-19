"use client";

import { motion } from "framer-motion";
import DarkVoiceCircle from "@/components/Home/voice-circle";
import Navbar from "@/components/Home/navbar";
import MicCircle from "@/components/Home/mic-circle";
import WaveBackground from "@/components/Home/wave-background";
import ParticleCircle from "@/components/Home/particle-circle";
import HeroWaves from "@/components/Home/wave-background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#1b1a1f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#121_20%,rgba(24,24,27,0)_80%)] opacity-70" />

      <Navbar />

      <div className="max-w-7xl mx-auto px-8 pt-40">
        <div className="flex flex-col items-center justify-center gap-16">
          <motion.h1
            className="text-7xl lg:text-8xl font-medium text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            You Build, <br /> Celina will Sell.
          </motion.h1>

          {/* <DarkVoiceCircle /> */}
          <MicCircle />
        </div>
      </div>
    </main>
  );
}
