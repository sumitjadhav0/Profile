"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 sm:px-8 lg:px-10">
        <div className="max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              {profile.availability}
            </span>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-10 text-sm font-medium uppercase tracking-[0.35em] text-violet-400"
          >
            AI • Software • Full Stack
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-5 text-6xl font-bold tracking-[-0.05em] text-white sm:text-7xl lg:text-9xl"
          >
            Sumit
            <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Jadhav.
            </span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-xl font-medium text-zinc-200 sm:text-2xl">
              {profile.role}
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              View Projects

              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Contact Me

              <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-10 flex items-center gap-3"
          >
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:-translate-y-1 hover:border-white/20 hover:text-white"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>

            {profile.socials.github ? (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:-translate-y-1 hover:border-white/20 hover:text-white"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            ) : null}

            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:-translate-y-1 hover:border-white/20 hover:text-white"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-600 transition hover:text-zinc-300 sm:flex"
        >
          Scroll

          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}