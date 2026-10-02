import { SectionTitle } from "../components/SectionTitle";

export function About() {
  return (
    <section id="about" className="section wrap about-section" style={{ marginInline: "auto" }}>
      <SectionTitle index="01" kicker="A LITTLE ABOUT ME">
        Turning curiosity
        <br />
        into <span className="gradient-text">craft.</span>
      </SectionTitle>
      <div className="about-body">
        <p className="lead">I enjoy bringing useful ideas to life on the web.</p>
        <p>
          From polished React interfaces to dependable Node.js and NestJS backends, I like working across the full stack. I build with
          TypeScript, MongoDB and Mongoose, and enjoy solving the details that make an application feel complete.
        </p>
        <p>
          Each project is a chance to learn something new, write better software, and make something people can actually use.
        </p>
      </div>
    </section>
  );
}
