import { ArrowUp } from "lucide-react";

import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="text-sm font-semibold text-white">
            {profile.name}
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            AI & Full Stack Developer
          </p>
        </div>

        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>

        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/20 hover:text-white"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}