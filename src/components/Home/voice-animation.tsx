"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParticleProps {
  index: number;
  total: number;
}

const Particle: React.FC<ParticleProps> = ({ index, total }) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 120;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-blue-400 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        x,
        y,
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: (index / total) * 2,
        ease: "easeInOut",
      }}
    />
  );
};

const VoiceAnimation = () => {
  const [isActive, setIsActive] = useState(false);
  const particleCount = 100;

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center bg-black">
      {/* Glowing ring */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(30,64,175,0.2) 100%)",
          filter: "blur(8px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particle system */}
      <div className="relative w-64 h-64">
        {Array.from({ length: particleCount }).map((_, i) => (
          <Particle key={i} index={i} total={particleCount} />
        ))}
      </div>

      {/* Inner glow */}
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30"
        style={{ filter: "blur(20px)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default VoiceAnimation;
