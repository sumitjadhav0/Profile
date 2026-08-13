import { About } from "@/components/about/about";
import { Certifications } from "@/components/certifications/certifications";
import { Contact } from "@/components/contact/contact";
import { Education } from "@/components/education/education";
import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/hero/hero";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Certifications />

        <Experience />

        <Contact />
      </main>

      <Footer />
    </>
  );
}