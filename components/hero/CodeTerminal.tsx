"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Circle,
} from "lucide-react";

const lines = [
  "$ initialize_ai()",
  "> loading neural system...",
  "> Python ............. READY",
  "> Machine Learning ... READY",
  "> Web Stack .......... READY",
  "> GitHub ............. CONNECTED",
];

export default function CodeTerminal() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.8,
        duration: 0.7,
      }}
      className="
        absolute
        right-[-2%]
        top-[34%]
        z-40
        hidden
        w-64
        overflow-hidden
        rounded-2xl
        border
        border-cyan-400/15
        bg-slate-950/75
        shadow-[0_0_50px_rgba(34,211,238,0.1)]
        backdrop-blur-2xl
        xl:block
      "
    >

      <div
        className="
          flex
          items-center
          gap-2
          border-b
          border-white/[0.06]
          px-4
          py-3
        "
      >

        <Circle
          size={7}
          className="fill-red-400 text-red-400"
        />

        <Circle
          size={7}
          className="fill-yellow-400 text-yellow-400"
        />

        <Circle
          size={7}
          className="fill-green-400 text-green-400"
        />

        <Terminal
          size={13}
          className="ml-auto text-slate-500"
        />

      </div>

      <div className="p-4">

        <div className="mb-3 text-[9px] uppercase tracking-[0.25em] text-cyan-400">
          AI Developer Terminal
        </div>

        <div className="space-y-1 font-mono text-[9px] leading-relaxed">

          {lines.map((line, index) => (
            <motion.div
              key={line}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1 + index * 0.18,
              }}
              className={
                index === 0
                  ? "text-orange-400"
                  : "text-slate-400"
              }
            >
              {line}
            </motion.div>
          ))}

        </div>

        <div className="mt-4 border-t border-white/[0.06] pt-3">

          <div className="flex items-center justify-between">

            <span className="text-[9px] text-slate-500">
              SYSTEM STATUS
            </span>

            <span className="text-[9px] text-emerald-400">
              ONLINE
            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}