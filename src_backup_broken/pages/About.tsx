import { ScrollReveal } from "../components/ScrollReveal";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Education } from "../sections/Education";
import { Skills } from "../sections/Skills";

export function AboutPage() {
  return (
    <>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Education />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
    </>
  );
}
