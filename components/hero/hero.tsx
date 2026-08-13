"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import { profile } from "@/data/profile";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {/* Status */}
            <motion.div variants={fadeUp}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                {profile.availability}
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp}>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                {profile.shortRole}
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Building
                <span className="block bg-gradient-to-r from-blue-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  intelligent
                </span>
                software.
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
            >
              {profile.description}
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-zinc-200"
              >
                View Projects

                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-3"
            >
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                GH
              </a>

              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-zinc-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
              >
                in
              </a>

              <span className="h-px w-10 bg-white/10" />

              <span className="text-xs text-zinc-600">
                Based in {profile.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-[430px]">
              <div className="absolute inset-8 rounded-full border border-blue-400/10" />

              <div className="absolute inset-16 rounded-full border border-violet-400/10" />

              <motion.div
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/20 bg-slate-950/80 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
                <span className="text-2xl font-bold tracking-tight text-white">
                  SJ
                </span>
              </div>

              <motion.div
                className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
              </motion.div>

              <motion.div
                className="absolute right-8 top-16 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  AI Engineering
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-16 left-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Building
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Real Products
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 md:flex"
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Explore
          </span>

          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}