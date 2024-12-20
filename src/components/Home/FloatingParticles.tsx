import { motion } from "framer-motion";

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${
            i % 2 === 0 ? "#22d3ee" : "#0ea5e9"
          } 0%, transparent 70%)`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          filter: "blur(1px)",
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 2, 0],
          y: [-50, 50],
          x: [-20, 20],
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
