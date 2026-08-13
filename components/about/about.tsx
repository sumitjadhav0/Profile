import {
  BrainCircuit,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { profile } from "@/data/profile";
import { SectionContainer } from "@/components/layout/section-container";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-white/[0.06] bg-black"
    >
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              About Me
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building my path
              <span className="block text-zinc-600">
                through technology.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-300">
              {profile.description}
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              I enjoy building practical applications, exploring
              AI-powered solutions, understanding software systems and
              continuously improving my development skills.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={GraduationCap}
                title="Education"
                value={profile.education.degree}
              />

              <InfoCard
                icon={BrainCircuit}
                title="Focus"
                value="AI • ML • Software Engineering"
              />

              <InfoCard
                icon={Sparkles}
                title="CGPA"
                value={`${profile.education.cgpa} / 10`}
              />

              <InfoCard
                icon={MapPin}
                title="Location"
                value={profile.location}
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

interface InfoCardProps {
  icon: typeof GraduationCap;
  title: string;
  value: string;
}

function InfoCard({
  icon: Icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-violet-400/20">
      <Icon className="h-5 w-5 text-violet-300" />

      <p className="mt-5 text-xs uppercase tracking-[0.2em] text-zinc-600">
        {title}
      </p>

      <p className="mt-2 text-sm font-medium leading-6 text-zinc-200">
        {value}
      </p>
    </div>
  );
}