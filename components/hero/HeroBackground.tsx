"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* =====================================================
          AI / ROBOT BACKGROUND IMAGE
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-no-repeat
          bg-center
          lg:bg-[position:65%_center]
        "
        style={{
          backgroundImage:
            "url('/Images/ai-robotics-background.webp')",
        }}
      />

      {/* =====================================================
          DARK OVERLAY
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/45
        "
      />

      {/* =====================================================
          LEFT SIDE READABILITY GRADIENT
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950/95
          via-slate-950/65
          to-slate-950/20
        "
      />

      {/* =====================================================
          TOP DARK GRADIENT
          ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-slate-950/90
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM DARK GRADIENT
          ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-56
          bg-gradient-to-t
          from-slate-950
          to-transparent
        "
      />

      {/* =====================================================
          CYAN AI GLOW
          ===================================================== */}

      <motion.div
        className="
          absolute
          left-[65%]
          top-[35%]
          h-72
          w-72
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          PURPLE AI GLOW
          ===================================================== */}

      <motion.div
        className="
          absolute
          right-[5%]
          top-[15%]
          h-64
          w-64
          rounded-full
          bg-purple-500/10
          blur-[110px]
        "
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SUBTLE TECH GRID
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />
    </div>
  );
}