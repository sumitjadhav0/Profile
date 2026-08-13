"use client";

import { motion } from "framer-motion";

export function AIBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Main blue glow */}
      <motion.div
        className="absolute left-1/2 top-[-20%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet glow */}
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[130px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom cyan glow */}
      <motion.div
        className="absolute bottom-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[130px]"
        animate={{
          x: [0, 80, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 80%)",
        }}
      />

      {/* Floating AI nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-blue-400/40"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 29) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.25)_60%,rgba(5,8,22,0.75)_100%)]" />
    </div>
  );
}