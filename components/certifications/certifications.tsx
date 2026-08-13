import { Award, ExternalLink } from "lucide-react";

import { SectionContainer } from "@/components/layout/section-container";

const certifications = [
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    type: "Technical Certification",
  },
  {
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    type: "12-Week Course",
  },
  {
    title: "Red Hat System Administration I",
    issuer: "Red Hat",
    type: "RH124 — Version 9.3",
  },
];

export function Certifications() {
  return (
    <section className="border-t border-white/[0.06] bg-black">
      <SectionContainer>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
          Certifications
        </p>

        <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          Learning beyond
          <span className="text-zinc-600"> the classroom.</span>
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {certifications.map((certificate) => (
            <article
              key={certificate.title}
              className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-violet-400/20"
            >
              <div className="flex items-center justify-between">
                <Award className="h-6 w-6 text-violet-300" />

                <ExternalLink className="h-4 w-4 text-zinc-700 transition group-hover:text-zinc-300" />
              </div>

              <h3 className="mt-10 text-lg font-semibold leading-7 text-white">
                {certificate.title}
              </h3>

              <p className="mt-3 text-sm text-violet-300">
                {certificate.issuer}
              </p>

              <p className="mt-2 text-sm text-zinc-600">
                {certificate.type}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}