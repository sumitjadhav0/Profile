"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import { profile } from "@/data/profile";
import GlowButton from "@/components/ui/GlowButton";

export default function HeroContent() {
  return (
    <div className="relative z-50">

      {/* =====================================================
          AVAILABILITY STATUS
      ===================================================== */}

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
          duration: 0.6,
        }}
        className="
          mb-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-emerald-400/20
          bg-emerald-400/[0.04]
          px-4
          py-2
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-emerald-300
          backdrop-blur-xl
        "
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-emerald-400
            shadow-[0_0_12px_rgba(52,211,153,0.9)]
          "
        />

        {profile.availability}

      </motion.div>


      {/* =====================================================
          GREETING
      ===================================================== */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
        className="
          mb-3
          text-lg
          font-medium
          text-slate-300
          md:text-xl
        "
      >
        Hey, I&apos;m{" "}

        <span className="text-orange-400">
          {profile.name}
        </span>
      </motion.p>


      {/* =====================================================
          MAIN HERO TITLE
      ===================================================== */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
          duration: 0.7,
        }}
        className="
          max-w-4xl
          text-5xl
          font-black
          leading-[0.95]
          tracking-[-0.05em]
          text-white
          sm:text-6xl
          lg:text-7xl
          xl:text-8xl
        "
      >
        AI & Software

        <span
          className="
            block
            bg-gradient-to-r
            from-white
            via-cyan-200
            to-orange-400
            bg-clip-text
            text-transparent
          "
        >
          Developer
        </span>
      </motion.h1>


      {/* =====================================================
          ROLE
      ===================================================== */}

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
          delay: 0.35,
          duration: 0.6,
        }}
        className="
          mt-5
          flex
          flex-wrap
          items-center
          gap-2
        "
      >
        <span
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-3
            py-1.5
            text-xs
            text-slate-300
            backdrop-blur-xl
          "
        >
          {profile.role}
        </span>

        <span className="text-slate-600">
          •
        </span>

        <span className="text-xs text-cyan-400">
          {profile.shortRole}
        </span>
      </motion.div>


      {/* =====================================================
          TAGLINE
      ===================================================== */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className="
          mt-6
          max-w-2xl
          text-lg
          font-medium
          leading-8
          text-slate-200
        "
      >
        {profile.tagline}
      </motion.p>


      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        className="
          mt-3
          max-w-2xl
          text-sm
          leading-7
          text-slate-400
          sm:text-base
        "
      >
        {profile.description}
      </motion.p>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
        }}
        className="
          mt-5
          flex
          items-center
          gap-2
          text-xs
          text-slate-500
        "
      >
        <MapPin
          size={14}
          className="text-cyan-400"
        />

        <span>
          {profile.location}
        </span>
      </motion.div>


      {/* =====================================================
          ACTION BUTTONS
      ===================================================== */}

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
          delay: 0.65,
          duration: 0.6,
        }}
        className="
          mt-8
          flex
          flex-wrap
          gap-3
        "
      >

        <GlowButton href="#projects">
          Explore Projects
        </GlowButton>

        <GlowButton
          href="#contact"
          variant="secondary"
        >
          Let&apos;s Connect
        </GlowButton>

        {/* Resume */}

        <a
          href={profile.resume}
          download
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-3
            text-sm
            font-medium
            text-slate-300
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:bg-cyan-400/[0.05]
            hover:text-white
          "
        >
          Download Resume

          <ArrowUpRight size={15} />
        </a>

      </motion.div>


      {/* =====================================================
          SOCIAL LINKS
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
        }}
        className="
          mt-7
          flex
          flex-wrap
          items-center
          gap-3
        "
      >

        {/* GitHub */}

        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-xs
            text-slate-400
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-white/20
            hover:bg-white/[0.06]
            hover:text-white
          "
        >

          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.08
              3.29 9.39 7.86 10.91.58.11.79-.25.79-.56
              0-.27-.01-1.16-.01-2.11-3.2.7-3.88-1.36
              -3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69
              -1.05-.72.08-.71.08-.71 1.16.08 1.77
              1.19 1.77 1.19 1.03 1.76 2.7 1.25
              3.36.96.1-.75.4-1.25.73-1.54
              -2.56-.29-5.25-1.28-5.25-5.69
              0-1.26.45-2.29 1.19-3.1
              -.12-.29-.52-1.47.11-3.06
              0 0 .97-.31 3.18 1.18
              .92-.26 1.9-.39 2.88-.39
              .98 0 1.96.13 2.88.39
              2.21-1.5 3.18-1.18 3.18-1.18
              .63 1.59.23 2.77.11 3.06
              .74.81 1.19 1.84 1.19 3.1
              0 4.42-2.7 5.4-5.27 5.68
              .41.36.78 1.07.78 2.16
              0 1.56-.01 2.81-.01 3.19
              0 .31.21.67.8.56
              A11.51 11.51 0 0 0 23.5 12
              C23.5 5.65 18.35.5 12 .5Z"
            />
          </svg>

          GitHub

          <ArrowUpRight
            size={13}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />

        </a>


        {/* LinkedIn */}

        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-xs
            text-slate-400
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:bg-cyan-400/[0.05]
            hover:text-white
          "
        >

          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04
              -1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05
              c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32
              7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54
              20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0
              1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77
              1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
            />
          </svg>

          LinkedIn

          <ArrowUpRight
            size={13}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />

        </a>


        {/* Email */}

        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-xs
            text-slate-400
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-orange-400/30
            hover:bg-orange-400/[0.05]
            hover:text-white
          "
        >

          <Mail size={14} />

          Email

          <ArrowUpRight
            size={13}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />

        </a>

      </motion.div>


      {/* =====================================================
          STATS
      ===================================================== */}

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
          delay: 0.9,
        }}
        className="
          mt-8
          grid
          max-w-2xl
          grid-cols-3
          gap-3
        "
      >

        {/* Projects */}

        <div
          className="
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            p-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/20
            hover:bg-cyan-400/[0.03]
          "
        >
          <div
            className="
              text-xl
              font-bold
              text-white
            "
          >
            {profile.stats.projects}
          </div>

          <div
            className="
              mt-1
              text-[9px]
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Projects
          </div>
        </div>


        {/* Technologies */}

        <div
          className="
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            p-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/20
            hover:bg-cyan-400/[0.03]
          "
        >
          <div
            className="
              text-xl
              font-bold
              text-white
            "
          >
            {profile.stats.technologies}
          </div>

          <div
            className="
              mt-1
              text-[9px]
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Technologies
          </div>
        </div>


        {/* Focus */}

        <div
          className="
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            p-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-orange-400/20
            hover:bg-orange-400/[0.03]
          "
        >
          <div
            className="
              text-sm
              font-bold
              leading-6
              text-orange-300
            "
          >
            {profile.stats.focus}
          </div>

          <div
            className="
              mt-1
              text-[9px]
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Core Focus
          </div>
        </div>

      </motion.div>


      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="
          mt-10
          hidden
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-slate-500
          md:flex
        "
      >

        <span
          className="
            flex
            h-8
            w-5
            items-start
            justify-center
            rounded-full
            border
            border-white/20
            p-1
          "
        >

          <motion.span
            className="
              h-1.5
              w-0.5
              rounded-full
              bg-orange-400
            "
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
            }}
          />

        </span>

        Scroll to explore

        <ArrowDown size={12} />

      </motion.a>

    </div>
  );
}