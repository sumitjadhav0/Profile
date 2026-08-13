import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 py-32 lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Engineering with curiosity,
              <span className="text-zinc-500">
                {" "}
                building with purpose.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              I enjoy turning ideas into practical software products,
              especially where artificial intelligence, data and modern
              application development come together.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 py-32 lg:px-8"
        >
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Projects that show how I build.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ProjectCard
              number="01"
              title="AI Video Assistant"
              description="AI-powered video intelligence platform for transcription, summarization and contextual question answering."
              technologies="Python • React • FastAPI • LangChain • Whisper • ChromaDB"
              github="https://github.com/sumitjadhav1703/AI-Video-Assistant"
            />

            <ProjectCard
              number="02"
              title="ResearchMind"
              description="Multi-agent AI research system designed to search, analyze and synthesize information into structured reports."
              technologies="Python • Streamlit • LangChain • Mistral • Tavily"
              github="https://github.com/sumitjadhav1703/Multi_agent_research_system"
            />

            <ProjectCard
              number="03"
              title="AI Market Analysis"
              description="Machine-learning based market analysis dashboard focused on intelligent technical analysis and probability-based alerts."
              technologies="Python • XGBoost • Random Forest • MT5 • FastAPI • MongoDB"
              github="#"
            />

            <ProjectCard
              number="04"
              title="Movie Recommendation System"
              description="Content-based recommendation application using movie metadata and similarity-based recommendation techniques."
              technologies="Python • Pandas • NumPy • Scikit-learn • Streamlit • TMDb"
              github="https://github.com/sumitjadhav1703/movie_recommendation_system"
            />
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 py-32 lg:px-8"
        >
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Technical Stack
            </p>

            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Tools I use to build.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "C++",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Flask",
              "FastAPI",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "XGBoost",
              "LangChain",
              "MongoDB",
              "Git",
              "GitHub",
              "Linux",
              "Power BI",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-400/30 hover:bg-blue-500/5 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl scroll-mt-28 px-6 py-32 lg:px-8"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl sm:p-16">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Let&apos;s build something intelligent.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
              Interested in collaborating, discussing an idea or exploring
              an opportunity? I&apos;d be happy to connect.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-zinc-200"
              >
                Send Email
              </a>

              <a
                href="https://www.linkedin.com/in/sumit-jadhav-7b6175219"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ProjectCard({
  number,
  title,
  description,
  technologies,
  github,
}: {
  number: string;
  title: string;
  description: string;
  technologies: string;
  github: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition duration-500 group-hover:bg-blue-500/10" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium tracking-[0.25em] text-zinc-600">
            {number}
          </span>

          {github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-500 transition hover:text-white"
            >
              GitHub ↗
            </a>
          )}
        </div>

        <h3 className="mt-16 text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">{description}</p>

        <p className="mt-6 text-xs leading-6 text-zinc-600">
          {technologies}
        </p>
      </div>
    </article>
  );
}