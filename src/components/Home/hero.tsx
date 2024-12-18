"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, FileText, Search, Layout } from "lucide-react";
import { FloatingOrb } from "./floating-orb";
import Image from "next/image";

interface PartnerLogoProps {
  src: string;
  alt: string;
}

// const PartnerLogo: FC<PartnerLogoProps> = ({ src, alt }) => (
//   <Image
//     src={src}
//     alt={alt}
//     width={120}
//     height={40}
//     className="opacity-50 hover:opacity-75 transition-opacity"
//   />
// );

export const HeroSection: FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-purple/20 via-transparent to-transparent opacity-30" />

      {/* Floating orbs */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-brand-purple/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Never Miss a Lead Again
          <br />
          With Our AI Sales Agent{" "}
          <span className="relative inline-block">
            Celina
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to" />
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Meet Celina, your 24/7 AI sales assistant who engages prospects,
          qualifies leads, and closes deals while you sleep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Button className="px-8 py-4 bg-white text-dark-900 hover:bg-white/90 rounded-md text-sm font-medium">
            GET STARTED
          </Button>
        </motion.div>

        {/* App preview */}
        <motion.div
          className="mt-20 relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-dark-800 shadow-glow border border-white/[0.05] p-3">
            {/* Top bar */}
            <div className="flex items-center gap-4 mb-4 px-2">
              <Home className="w-5 h-5 text-gray-400" />
              <FileText className="w-5 h-5 text-gray-400" />
              <Search className="w-5 h-5 text-gray-400" />
              <Layout className="w-5 h-5 text-gray-400" />
            </div>

            {/* AI Assistant Image */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/heroimg.png"
                alt="AI Assistant"
                width={1200}
                height={800}
                className="w-full"
              />

              {/* Code generation popup */}
              {/* <div className="absolute top-4 right-4 bg-dark-800/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-purple/20 rounded-lg flex items-center justify-center">
                  <code className="text-white text-sm">{`</>`}</code>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Code generation
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-6 h-6 rounded-full bg-gray-700" />
                    <span className="w-6 h-6 rounded-full bg-gray-700 -ml-2" />
                    <span className="w-6 h-6 rounded-full bg-gray-700 -ml-2" />
                    <span className="text-gray-400 text-xs ml-2">1m ago</span>
                  </div>
                </div>
              </div> */}

              {/* AI Generation Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="bg-dark-800/90 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-brand-purple border-t-transparent animate-spin" />
                  <span className="text-white text-sm">AI is generating</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner logos */}
        <div className="mt-32">
          <p className="text-gray-500 text-sm tracking-wider mb-8">
            HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
          </p>
          <div className="flex justify-center items-center gap-12 opacity-50">
            {/* <Image
              src="/pixelwave.svg"
              alt="Pixelwave"
              width={120}
              height={40}
            />
            <Image src="/techno.svg" alt="Techno" width={120} height={40} />
            <Image
              src="/yourlogo.svg"
              alt="Your Logo"
              width={120}
              height={40}
            />
            <Image src="/openai.svg" alt="OpenAI" width={120} height={40} />
            <Image src="/microsoft.svg" alt="Open" width={120} height={40} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
