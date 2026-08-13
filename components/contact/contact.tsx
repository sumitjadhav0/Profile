import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

import { profile } from "@/data/profile";
import { SectionContainer } from "@/components/layout/section-container";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] bg-black"
    >
      <SectionContainer>
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-transparent p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/[0.10] blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
                Let&apos;s Connect
              </p>

              <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Have an idea,
                <span className="block text-zinc-500">
                  opportunity or project?
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                I&apos;m interested in internships, software development
                opportunities, technical projects and meaningful
                collaborations.
              </p>

              <a
                href={`mailto:${profile.contact.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Send an Email

                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3">
              <ContactItem
                icon={Mail}
                label="Email"
                value={profile.contact.email}
                href={`mailto:${profile.contact.email}`}
              />

              <ContactItem
                icon={Phone}
                label="Phone"
                value={profile.contact.phone}
                href={`tel:${profile.contact.phone.replace(/\s/g, "")}`}
              />

              <ContactItem
                icon={MapPin}
                label="Location"
                value="Chhatrapati Sambhajinagar, Maharashtra"
              />

              <ContactItem
                icon={FaLinkedinIn}
                label="LinkedIn"
                value="Connect with me"
                href={profile.social.linkedin}
                external
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  external,
}: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/20 p-4 transition hover:border-white/15">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-zinc-300">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          {label}
        </p>

        <p className="mt-1 text-sm text-zinc-300">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {content}
    </a>
  );
}