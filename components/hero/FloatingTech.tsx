"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Python",
    position: "left-[4%] top-[10%]",
    color: "text-yellow-300",
  },
  {
    name: "AI",
    position: "right-[5%] top-[8%]",
    color: "text-cyan-300",
  },
  {
    name: "ML",
    position: "right-[1%] bottom-[30%]",
    color: "text-purple-300",
  },
  {
    name: "JS",
    position: "left-[2%] bottom-[28%]",
    color: "text-yellow-200",
  },
];

export default function FloatingTech() {
  return (
    <>
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`
            absolute
            ${tech.position}
            z-30
            flex
            h-12
            min-w-12
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-slate-950/70
            px-3
            text-[10px]
            font-bold
            backdrop-blur-xl
            ${tech.color}
          `}
          animate={{
            y: [0, -14, 0],
            rotate: [0, index % 2 ? -4 : 4, 0],
          }}
          transition={{
            duration: 4 + index * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tech.name}
        </motion.div>
      ))}
    </>
  );
}