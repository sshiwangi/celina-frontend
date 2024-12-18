import { FC } from "react";
import { motion } from "framer-motion";

interface FloatingOrbProps {
  delay: number;
  top: string;
  left: string;
}

export const FloatingOrb: FC<FloatingOrbProps> = ({ delay, top, left }) => {
  return (
    <motion.div
      className="absolute w-4 h-4 rounded-full bg-accent-purple/20"
      style={{ top, left }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
    />
  );
};
