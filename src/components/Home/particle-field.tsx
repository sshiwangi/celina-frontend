"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: Point[] = [];
    const particleCount = 200;
    const connectionDistance = 50;
    const particleSize = 2;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      points.forEach((point, i) => {
        point.x += point.dx;
        point.y += point.dy;

        // Bounce off walls
        if (point.x < 0 || point.x > canvas.width) point.dx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(point.x, point.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = "#a8ff95";
        ctx.fill();

        // Connect nearby particles
        points.slice(i + 1).forEach((otherPoint) => {
          const distance = Math.hypot(
            point.x - otherPoint.x,
            point.y - otherPoint.y
          );
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(168, 255, 149, ${
              1 - distance / connectionDistance
            })`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};

export default ParticleField;
