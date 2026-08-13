import {
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Laptop,
  Terminal,
} from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";
import { skillGroups } from "@/data/skills";

const icons = [
  Code2,
  Globe,
  BrainCircuit,
  Database,
  Laptop,
  Terminal,
];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/[0.06] bg-[#070707]"
    >
      <SectionContainer>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Technical Stack
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools I use to
            <span className="text-zinc-600"> build and learn.</span>
          </h2>

          <p className="mt-6 leading-7 text-zinc-500">
            A growing technical stack developed through academic work,
            personal projects and continuous experimentation.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];

            return (
              <article
                key={group.title}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}