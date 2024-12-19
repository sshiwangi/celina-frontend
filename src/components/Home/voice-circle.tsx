"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";
import { useState } from "react";

const DarkVoiceCircle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-20">
      {/* Text elements */}
      <motion.h2
        className="text-2xl text-[#4FD1C5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Morning, Sophia!
      </motion.h2>

      <div
        className="relative w-[400px] h-[400px] cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        {/* Outer breathing ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at center, #4FD1C5 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Particle wave effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{
                border: "1px solid rgba(79, 209, 197, 0.2)",
                borderRadius: "50%",
                transform: `rotate(${i * 9}deg)`,
              }}
              animate={{
                scale: isActive ? [1, 1.1, 1] : [1, 1.02, 1],
                opacity: isActive ? [0.5, 0.2, 0.5] : [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Dot matrix effect */}
        <motion.div
          className="absolute inset-8 rounded-full overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at center, rgba(79, 209, 197, 0.2) 0%, transparent 70%)",
          }}
        >
          {Array.from({ length: 200 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#4FD1C5]"
              style={{
                left: `${50 + Math.cos((i / 100) * Math.PI * 2) * 45}%`,
                top: `${50 + Math.sin((i / 100) * Math.PI * 2) * 45}%`,
              }}
              animate={{
                opacity: isActive ? [0.2, 0.8, 0.2] : [0.1, 0.4, 0.1],
                scale: isActive ? [0.8, 1.2, 0.8] : [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (i / 200) * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Center mic icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isActive ? [1, 1.1, 1] : [1, 1.05, 1],
              opacity: isActive ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Mic size={32} className="text-[#4FD1C5]" />
          </motion.div>
        </div>
      </div>

      {/* Tap to start text */}
      <motion.p
        className="text-xl text-[#4FD1C5]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Tap to Start
      </motion.p>
    </div>
  );
};

export default DarkVoiceCircle;
