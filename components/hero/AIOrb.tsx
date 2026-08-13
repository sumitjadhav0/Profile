"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function AIOrb() {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

      {/* Large glow */}

      <motion.div
        className="
          absolute
          -inset-20
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating ring */}

      <motion.div
        className="
          absolute
          -inset-8
          rounded-full
          border
          border-cyan-400/20
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Second ring */}

      <motion.div
        className="
          absolute
          -inset-14
          rounded-full
          border
          border-orange-400/15
          border-dashed
        "
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Core */}

      <motion.div
        className="
          relative
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-full
          border
          border-cyan-300/40
          bg-slate-950/80
          shadow-[0_0_70px_rgba(34,211,238,0.35)]
          backdrop-blur-2xl
        "
        animate={{
          boxShadow: [
            "0 0 45px rgba(34,211,238,0.25)",
            "0 0 90px rgba(34,211,238,0.5)",
            "0 0 45px rgba(34,211,238,0.25)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <BrainCircuit
          size={42}
          className="text-cyan-300"
        />

        <span
          className="
            absolute
            -bottom-7
            rounded-full
            border
            border-cyan-400/20
            bg-slate-950/80
            px-3
            py-1
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-cyan-300
          "
        >
          AI CORE
        </span>
      </motion.div>
    </div>
  );
}