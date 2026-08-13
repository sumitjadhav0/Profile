"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    label: "PY",
    className: "left-[8%] top-[20%]",
  },
  {
    label: "ML",
    className: "right-[8%] top-[25%]",
  },
  {
    label: "JS",
    className: "left-[12%] bottom-[22%]",
  },
  {
    label: "DB",
    className: "right-[12%] bottom-[18%]",
  },
];

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0">

      {/* Connection lines */}

      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 600 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M100 130 L300 300 L500 150"
          stroke="url(#cyanGradient)"
          strokeWidth="1"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [0, -80],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M110 470 L300 300 L490 480"
          stroke="url(#orangeGradient)"
          strokeWidth="1"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [0, 80],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <defs>

          <linearGradient
            id="cyanGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#22d3ee" />
            <stop
              offset="1"
              stopColor="#8b5cf6"
            />
          </linearGradient>

          <linearGradient
            id="orangeGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#f97316" />
            <stop
              offset="1"
              stopColor="#22d3ee"
            />
          </linearGradient>

        </defs>
      </svg>

      {/* Nodes */}

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className={`
            absolute
            ${node.className}
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/30
            bg-slate-950/70
            text-[10px]
            font-bold
            tracking-wider
            text-cyan-300
            shadow-[0_0_25px_rgba(34,211,238,0.12)]
            backdrop-blur-xl
          `}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {node.label}
        </motion.div>
      ))}

    </div>
  );
}