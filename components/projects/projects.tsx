import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const otherProjects = projects.filter(
    (project) => !project.featured,
  );

  return (
    <section
      id="projects"
      className="border-t border-white/[0.06] bg-black"
    >
      <SectionContainer>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Selected Work
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects that
            <span className="text-zinc-600"> show how I think.</span>
          </h2>
        </div>

        {featured ? (
          <article className="mt-14 overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.10] via-white/[0.03] to-transparent">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.2em] text-violet-300">
                    {featured.number}
                  </span>

                  <span className="h-px w-10 bg-violet-400/30" />

                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Featured Project
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
                  {featured.title}
                </h3>

                <p className="mt-2 text-sm text-violet-300">
                  {featured.category}
                </p>

                <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                  {featured.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {featured.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-zinc-400"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-violet-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {featured.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[350px] border-t border-white/[0.06] bg-black/30 lg:border-l lg:border-t-0">
                <div className="absolute inset-8 rounded-2xl border border-white/[0.08] bg-black/60 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">
                      MARKET ANALYSIS
                    </span>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
                      LIVE DATA
                    </span>
                  </div>

                  <div className="mt-12 flex items-end gap-2">
                    {[30, 48, 35, 65, 52, 78, 60, 90, 70].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t bg-violet-400/40"
                          style={{ height: `${height}px` }}
                        />
                      ),
                    )}
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-2">
                    {["BUY", "HOLD", "SELL"].map((signal) => (
                      <div
                        key={signal}
                        className="rounded-xl border border-white/[0.06] p-3 text-center"
                      >
                        <p className="text-[10px] text-zinc-600">
                          SIGNAL
                        </p>

                        <p className="mt-1 text-xs font-semibold text-zinc-300">
                          {signal}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ) : null}

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/15"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-violet-400">
                  {project.number}
                </span>

                <ArrowUpRight className="h-5 w-5 text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>

              <h3 className="mt-10 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-violet-300">
                {project.category}
              </p>

              <p className="mt-5 leading-7 text-zinc-500">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}