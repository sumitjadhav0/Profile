"use client";

import Link from "next/link";
import { Download, Menu } from "lucide-react";

import { profile } from "@/data/profile";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header
      className="
        fixed
        left-1/2
        top-4
        z-[100]
        w-[calc(100%-2rem)]
        max-w-7xl
        -translate-x-1/2
      "
    >
      <nav
        className="
          flex
          items-center
          justify-between
          rounded-full
          border
          border-white/[0.08]
          bg-slate-950/60
          px-4
          py-3
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          backdrop-blur-2xl
          sm:px-5
        "
      >

        {/* Logo */}

        <Link
          href="#home"
          className="
            flex
            items-center
            gap-2
            font-bold
            tracking-tight
          "
        >

          <span
            className="
              font-mono
              text-lg
              text-orange-400
            "
          >
            &lt;/&gt;
          </span>

          <span className="hidden sm:block">
            Sumit
            <span className="text-orange-400">
              .
            </span>
          </span>

        </Link>


        {/* Desktop navigation */}

        <div className="hidden items-center gap-1 lg:flex">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                rounded-full
                px-4
                py-2
                text-xs
                text-slate-400
                transition
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              {link.name}
            </Link>
          ))}

        </div>


        {/* Resume */}

        <div className="flex items-center gap-2">

          <a
            href={profile.resume}
            download
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-orange-400/30
              bg-orange-500/10
              px-4
              py-2
              text-[11px]
              font-semibold
              text-orange-300
              transition
              hover:bg-orange-500/20
              sm:flex
            "
          >

            <Download size={13} />

            Resume

          </a>


          <button
            type="button"
            aria-label="Open menu"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-slate-300
              lg:hidden
            "
          >

            <Menu size={17} />

          </button>

        </div>

      </nav>
    </header>
  );
}