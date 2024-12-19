"use client";

import { motion } from "framer-motion";

const AnimatedContent = () => {
  return (
    <div className="grid grid-cols-2 gap-16 items-center">
      {/* Left column */}
      <div>
        <motion.h1
          className="text-7xl font-medium leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work AI for all.
        </motion.h1>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-900 transition-colors">
            GET A DEMO →
          </button>
        </motion.div>

        <motion.div
          className="mt-12 max-w-md p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg">
            The Work AI platform connected to all your data. Find, create, and
            automate anything.
          </p>
          <div className="mt-4">
            <button className="p-3 bg-black rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right column - Custom Animation */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="aspect-square relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Particle system */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-4/5 h-4/5 rounded-full bg-gradient-to-br from-emerald-300/30 to-emerald-500/30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                  style={{
                    left: `${50 + Math.cos((i / 50) * Math.PI * 2) * 45}%`,
                    top: `${50 + Math.sin((i / 50) * Math.PI * 2) * 45}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (i / 50) * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedContent;
