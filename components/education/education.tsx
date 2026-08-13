import { GraduationCap } from "lucide-react";

import { profile } from "@/data/profile";
import { SectionContainer } from "@/components/layout/section-container";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/[0.06] bg-[#070707]"
    >
      <SectionContainer>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
          Education
        </p>

        <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          Academic foundation.
        </h2>

        <div className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-medium text-violet-300">
                  {profile.education.period}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  {profile.education.degree}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {profile.education.institution}
                </p>

                <p className="mt-1 text-sm text-zinc-600">
                  {profile.education.university}
                </p>
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Current CGPA
              </p>

              <p className="mt-2 text-4xl font-bold text-white">
                {profile.education.cgpa}
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}