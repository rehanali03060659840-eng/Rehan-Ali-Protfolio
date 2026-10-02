import { ScrollReveal } from "../components/ScrollReveal";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";

export function Home({ theme }: { theme: "dark" | "light" }) {
  return (
    <>
      <ScrollReveal>
        <Hero theme={theme} />
      </ScrollReveal>
      <ScrollReveal>
        <Projects limit={4} showAllLink />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}