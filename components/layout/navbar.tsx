"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";

const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                SJ
              </span>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">
                  {profile.name}
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  AI & Full-Stack
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-7 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#contact"
                className="group flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-400/30 hover:bg-blue-500/10"
              >
                Let's Talk
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 md:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {open && (
            <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}