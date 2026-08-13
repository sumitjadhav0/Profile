import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <a
        href="#projects"
        className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.12)]"
      >
        View Projects

        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      <a
        href="#about"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-zinc-200 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.08]"
      >
        Explore My Work

        <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
      </a>
    </div>
  );
}