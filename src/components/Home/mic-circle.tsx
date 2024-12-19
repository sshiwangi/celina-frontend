"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MicCircle = () => {
  const [yOffset, setYOffset] = useState(0);

  // Smooth floating animation
  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 1000;

      // Create a smooth sine wave motion
      const newOffset = Math.sin(progress * 2) * 8;
      setYOffset(newOffset);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      id="circle"
      className="w-[94px] h-[94px] md:w-[120px] md:h-[120px] relative cursor-pointer [filter:brightness(0.8)]"
      tabIndex={0}
      style={{
        transform: `translateY(${yOffset}px) translateZ(0)`,
      }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(148, 255, 210, 0.2) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      <div className="h-full w-full">
        <div className="h-full w-full">
          {/* Main circle container */}
          <div
            className="h-full w-full rounded-full relative overflow-hidden bg-[rgba(148,255,210,0.05)]"
            style={{
              boxShadow: "rgba(148, 255, 210, 0.2) 0px 20px 50px 40px",
            }}
          >
            {/* Gradient waves */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(148, 255, 210, 0.15) 0%, transparent 70%)",
                }}
              />
            ))}

            {/* Center microphone icon */}
            <div className="absolute z-10 w-full h-full flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9998 25.3333V28M15.9998 25.3333C11.0955 25.3333 8.19552 22.3268 6.68555 20M15.9998 25.3333C20.9041 25.3333 23.804 22.3268 25.314 20M21.3331 9.33333V14.6667C21.3331 17.6122 18.9453 20 15.9998 20C13.0543 20 10.6664 17.6122 10.6664 14.6667V9.33333C10.6664 6.38781 13.0543 4 15.9998 4C18.9453 4 21.3331 6.38781 21.3331 9.33333Z"
                  stroke="#94FFD2"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>

            {/* Backdrop blur layer */}
            <div className="absolute inset-0 backdrop-blur-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicCircle;
