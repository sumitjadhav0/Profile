"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Database,
  Network,
} from "lucide-react";

const systems = [
  {
    name: "AI Engine",
    icon: Cpu,
  },
  {
    name: "Neural System",
    icon: Network,
  },
  {
    name: "Data Layer",
    icon: Database,
  },
];

export default function AIStatus() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.7,
        duration: 0.6,
      }}
      className="
        absolute
        bottom-[6%]
        left-[3%]
        z-40
        hidden
        w-64
        rounded-2xl
        border
        border-white/10
        bg-slate-950/65
        p-4
        backdrop-blur-2xl
        lg:block
      "
    >

      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Activity
            size={15}
            className="text-cyan-300"
          />

          <span className="text-xs font-semibold text-white">
            AI SYSTEM
          </span>

        </div>

        <span className="flex items-center gap-1 text-[9px] text-emerald-400">

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />

          ONLINE

        </span>

      </div>

      <div className="space-y-2">

        {systems.map((system) => {
          const Icon = system.icon;

          return (
            <div
              key={system.name}
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-white/[0.06]
                bg-white/[0.02]
                px-3
                py-2
              "
            >

              <div className="flex items-center gap-2">

                <Icon
                  size={13}
                  className="text-slate-400"
                />

                <span className="text-[10px] text-slate-300">
                  {system.name}
                </span>

              </div>

              <span className="text-[9px] text-emerald-400">
                READY
              </span>

            </div>
          );
        })}

      </div>

    </motion.div>
  );
}