import { Code2, Trophy } from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/[0.06] bg-[#070707]"
    >
      <SectionContainer>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
          Activities
        </p>

        <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          Experience through
          <span className="text-zinc-600"> building and participation.</span>
        </h2>

        <div className="mt-14 space-y-5">
          <article className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                <Trophy className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
                  2025 — 2026
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  WINGS 2K26 Hackathon
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Government College of Engineering, Aurangabad
                </p>

                <p className="mt-5 max-w-3xl leading-7 text-zinc-500">
                  Participated in a technical hackathon environment,
                  exploring problem-solving, teamwork and technology-driven
                  solution development.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300">
                <Code2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
                  Continuous Learning
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  AI • Development • Cybersecurity
                </h3>

                <p className="mt-5 max-w-3xl leading-7 text-zinc-500">
                  Continuously developing skills across artificial
                  intelligence, software development, Linux/system
                  administration and cybersecurity.
                </p>
              </div>
            </div>
          </article>
        </div>
      </SectionContainer>
    </section>
  );
}