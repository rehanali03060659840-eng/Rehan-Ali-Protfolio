import { useEffect, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {experience, profile, projects, skills, socials } from "./data";
import SwarmCursor from "./components/SwarmCursor";
import { useTheme } from "./hooks/useTheme";

const nav = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];
const filters = ["All", "Frontend", "Backend", "Full Stack", "Other"];
const skillIcon = (name: string) =>
  name.includes("Mongo") || name === "Mongoose" || name === "PostgreSQL"
    ? Database
    : name === "Docker" || name === "Git" || name === "GitHub"
      ? Layers3
      : Code2;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [theme] = useTheme();
  const [formState, setFormState] = useState<{
    kind: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ kind: "idle", message: "" });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const [, id] of nav) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 170) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim(),
      from = String(data.get("email") || "").trim(),
      message = String(data.get("message") || "").trim();
    if (
      name.length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from) ||
      message.length < 20
    ) {
      setFormState({
        kind: "error",
        message:
          "Please enter your name, a valid email, and a message of at least 20 characters.",
      });
      return;
    }
    const {
      VITE_CONTACT_SERVICE_ID,
      VITE_CONTACT_TEMPLATE_ID,
      VITE_CONTACT_PUBLIC_KEY,
    } = import.meta.env;
    if (
      !VITE_CONTACT_SERVICE_ID ||
      !VITE_CONTACT_TEMPLATE_ID ||
      !VITE_CONTACT_PUBLIC_KEY
    ) {
      setFormState({
        kind: "error",
        message:
          "The contact form is not configured yet. Please use the email link to get in touch.",
      });
      return;
    }
    setFormState({ kind: "loading", message: "Sending your message…" });
    try {
      await emailjs.send(
        VITE_CONTACT_SERVICE_ID,
        VITE_CONTACT_TEMPLATE_ID,
        { from_name: name, from_email: from, message },
        { publicKey: VITE_CONTACT_PUBLIC_KEY },
      );
      setFormState({
        kind: "success",
        message: "Your message was sent. Thanks for reaching out!",
      });
      form.reset();
    } catch {
      setFormState({
        kind: "error",
        message:
          "The message could not be sent right now. Please email me directly.",
      });
    }
  };

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );
  const socialIcon = (kind: string) =>
    kind === "github" ? (
      <Github size={17} />
    ) : kind === "linkedin" ? (
      <Linkedin size={17} />
    ) : (
      <Mail size={17} />
    );
  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`;
  }, []);

  return (
    <>
      <SwarmCursor
        className="swarm-background"
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
        color={theme === "light" ? "#111111" : "#ffffff"}
        accentColor={theme === "light" ? "#111111" : "#ffffff"}
        count={8}
        size={5}
        speed={2.5}
        spread={100}
        wander={0.25}
        trail={0.75}
        opacity={theme === "light" ? 0.25 : 0.35}
        scatterOnClick
      />
      <div className="site-content">
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-inner wrap">
          <a
            className="brand"
            href="#home"
            onClick={() => setMenuOpen(false)}
            aria-label={`${profile.name}, home`}
          >
            <span className="brand-mark">
              R<span>.</span>
            </span>
            <span>
              {profile.name}
              <small>FULL STACK DEVELOPER</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, id]) => (
              <a
                className={active === id ? "nav-active" : ""}
                key={id}
                href={`#${id}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div
          className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={15} />
            </a>
          ))}
        </div>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </div>
            <p className="hello">
              Hello, I'm <span>{profile.name}</span>
            </p>
            <h1>
              Building digital
              <br />
              <span className="gradient-text">experiences</span>
              <br />
              that work.
            </h1>
            <p className="hero-sub">
              Full Stack Developer <i /> React <i /> TypeScript <i /> Node.js{" "}
              <i /> NestJS
            </p>
            <p className="hero-description">
              I build modern, responsive and scalable web applications—and enjoy
              turning ideas into real working products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Let's connect <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-socials">
              {socials.map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={s.label}
                  >
                    {socialIcon(s.kind)}
                    <span>{s.label}</span>
                  </a>
                ) : (
                  <span
                    className="social-unset"
                    key={s.label}
                    title={`${s.label} URL needs to be added`}
                  >
                    {socialIcon(s.kind)}
                    <span>{s.label}</span>
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-glow" />
            <div className="code-card">
              <div className="code-top">
                <span />
                <span />
                <span />
                <b>rehan.dev</b>
                <i>•••</i>
              </div>
              <div className="code-content">
                <div>
                  <em>01</em>
                  <code>
                    <span className="code-purple">const</span> developer{" "}
                    <span className="code-blue">=</span> {"{"}
                  </code>
                </div>
                <div>
                  <em>02</em>
                  <code>
                    &nbsp;&nbsp;name:{" "}
                    <span className="code-green">"{profile.name}"</span>,
                  </code>
                </div>
                <div>
                  <em>03</em>
                  <code>
                    &nbsp;&nbsp;role:{" "}
                    <span className="code-green">"Full Stack Dev"</span>,
                  </code>
                </div>
                <div>
                  <em>04</em>
                  <code>
                    &nbsp;&nbsp;build:{" "}
                    <span className="code-purple">(ideas)</span>{" "}
                    <span className="code-blue">=&gt;</span>{" "}
                    <span className="code-green">"reality"</span>
                  </code>
                </div>
                <div>
                  <em>05</em>
                  <code>{"}"}</code>
                </div>
                <div className="code-cursor">
                  <em>06</em>
                  <code>
                    <span>▍</span>
                  </code>
                </div>
              </div>
              <div className="code-footer">
                <span>
                  <span className="tiny-dot" /> TypeScript
                </span>
                <span>UTF-8&nbsp;&nbsp; LF</span>
              </div>
            </div>
            <div className="floating-tag tag-react">
              <b>⚛</b> React
            </div>
            <div className="floating-tag tag-node">
              <b>⬡</b> Node.js
            </div>
            <div className="hero-stamp">
              <Code2 size={16} /> &lt; creativity /&gt;
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
          <div className="hero-index">
            01 <span /> 06
          </div>
        </section>

        <section id="about" className="section wrap">
          <SectionHeading
            index="01"
            kicker="A LITTLE ABOUT ME"
            title={
              <>
                Turning curiosity
                <br />
                into <span className="gradient-text">craft.</span>
              </>
            }
          />
          <div className="about-grid">
            <div className="about-intro">
              <div className="about-avatar">
                <span>RA</span>
                <div className="avatar-orbit" />
                <Sparkles className="avatar-spark" size={20} />
              </div>
              <div>
                <p className="about-name">{profile.name}</p>
                <p className="muted">
                  Full Stack Developer <span className="online-pip" />
                </p>
              </div>
              <p className="about-note">
                Thoughtful code. Useful products.
                <br />
                <span>Always learning, always building.</span>
              </p>
            </div>
            <div className="about-body">
              <p className="lead">
                I enjoy bringing useful ideas to life on the web.
              </p>
              <p>
                From polished React interfaces to dependable Node.js and NestJS
                backends, I like working across the full stack. I build with
                TypeScript, MongoDB and Mongoose, and enjoy solving the details
                that make an application feel complete.
              </p>
              <p>
                Each project is a chance to learn something new, write better
                software, and make something people can actually use.
              </p>
              <div className="info-grid">
                <Info
                  icon={<MapPin />}
                  label="BASED IN"
                  value="Lahore, Pakistan"
                />
                <Info icon={<Mail />} label="EMAIL" value={profile.email} />
                <Info
                  icon={<BriefcaseBusiness />}
                  label="FOCUS"
                  value="Full Stack Development"
                />
                <Info
                  icon={<Layers3 />}
                  label="BUILDING WITH"
                  value="React · NestJS · MongoDB"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-soft">
          <div className="wrap">
            <SectionHeading
              index="02"
              kicker="MY TOOLKIT"
              title={
                <>
                  Tools of the
                  <br />
                  <span className="gradient-text">trade.</span>
                </>
              }
            />
            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-group" key={group.group}>
                  <div className="skill-group-head">
                    <span className="skill-group-icon">
                      <Code2 size={18} />
                    </span>
                    <h3>{group.group}</h3>
                    <span className="skill-count">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="skill-list">
                    {group.items.map((skill) => {
                      const Icon = skillIcon(skill);
                      return (
                        <span className="skill-pill" key={skill}>
                          <Icon size={14} />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section wrap">
          <SectionHeading
            index="03"
            kicker="SELECTED WORK"
            title={
              <>
                Things I've <span className="gradient-text">built.</span>
              </>
            }
          />
          <div className="projects-toolbar">
            <p>A selection of projects and ideas brought to life.</p>
            <div className="filter-list" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  className={filter === item ? "filter-active" : ""}
                  key={item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-info">
                  <div className="project-heading">
                    <span className="project-type">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live preview <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={14} /> Source code
                      </a>
                    )}
                    {!project.live && !project.github && (
                      <span className="project-private">
                        Project links coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-soft">
          <div className="wrap">
            <SectionHeading
              index="04"
              kicker="THE JOURNEY SO FAR"
              title={
                <>
                  Learning by <span className="gradient-text">doing.</span>
                </>
              }
            />
            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-mark">
                    <span>0{index + 1}</span>
                    <i />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-meta">
                      <span>{item.label}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className="project-stack">
                      {item.chips.map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section wrap education-section">
          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={25} />
            </div>
            <div>
              <span className="kicker">EDUCATION</span>
              <h2>
                Government College
                <br className="mobile-break" /> of Science, Lahore
              </h2>
              <p>Education details can be added here when available.</p>
            </div>
            <span className="education-decoration">ED.</span>
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <div className="wrap resume-wrap">
            <div>
              <span className="kicker">A CLOSER LOOK</span>
              <h2>
                Want to know
                <br />
                more <span className="gradient-text">about me?</span>
              </h2>
              <p>
                My resume has the details, projects, and experience in one
                place.
              </p>
            </div>
            <div className="resume-actions">
              <a
                className="button button-primary"
                href="/resume/Rehan-Ali-CV.pdf"
                download="Rehan-Ali-CV.pdf"
              >
                <Download size={16} /> Download CV
              </a>
              <a
                className="button button-outline"
                href="/resume/Rehan-Ali-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV <ArrowUpRight size={15} />
              </a>
              <span className="resume-hint">
                PDF · Add your file to <code>public/resume/</code>
              </span>
            </div>
            <div className="resume-art">
              <ArrowDownRight size={95} strokeWidth={0.7} />
            </div>
          </div>
        </section>

        <section id="contact" className="section wrap contact-section">
          <SectionHeading
            index="05"
            kicker="LET'S MAKE SOMETHING"
            title={
              <>
                Have a project
                <br />
                in <span className="gradient-text">mind?</span>
              </>
            }
          />
          <div className="contact-grid">
            <div className="contact-copy">
              <p>
                I'm always happy to talk about ideas, collaborations, and
                interesting work. Send a note and I'll get back to you.
              </p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                <span>
                  <Mail size={19} />
                </span>
                <div>
                  <small>DROP ME A LINE</small>
                  <b>{profile.email}</b>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <div className="contact-location">
                <MapPin size={16} />
                <span>Lahore, Pakistan</span>
                <i />
                <span>Open to opportunities</span>
              </div>
              <div className="contact-social">
                {socials.map((s) =>
                  s.href ? (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                    >
                      {socialIcon(s.kind)}
                    </a>
                  ) : null,
                )}
              </div>
            </div>
            <form className="contact-form" onSubmit={sendMessage} noValidate>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    required
                    minLength={2}
                  />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                </label>
              </div>
              <label>
                Your message
                <textarea
                  name="message"
                  placeholder="Tell me a little about what you have in mind…"
                  rows={5}
                  required
                  minLength={20}
                />
              </label>
              <div className="form-bottom">
                <button
                  className="button button-primary"
                  type="submit"
                  disabled={formState.kind === "loading"}
                >
                  {formState.kind === "loading" ? "Sending…" : "Send message"}
                  {formState.kind === "success" ? (
                    <Check size={16} />
                  ) : (
                    <Send size={15} />
                  )}
                </button>
                <span
                  aria-live="polite"
                  className={`form-status form-${formState.kind}`}
                >
                  {formState.message}
                </span>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-main">
          <a className="brand" href="#home">
            <span className="brand-mark">
              R<span>.</span>
            </span>
            <span>
              {profile.name}
              <small>FULL STACK DEVELOPER</small>
            </span>
          </a>
          <p>
            Designed with intention.
            <br />
            <span>Built with curiosity.</span>
          </p>
          <div className="footer-links">
            {nav
              .filter(([, id]) => id !== "resume")
              .map(([label, id]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
          </div>
          <button className="back-top" onClick={() => scrollTo("home")}>
            Back to top <ArrowUpRight size={15} />
          </button>
        </div>
        <div className="wrap footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span>
            Made for the web <span className="footer-heart">✳</span>
          </span>
          <a href="#home">
            <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
      </div>
    </>
  );
}

function SectionHeading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      <div className="heading-decoration">
        <span /> <span /> <span />
      </div>
    </div>
  );
}
function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="info-card">
      <span className="info-icon">{icon}</span>
      <div>
        <small>{label}</small>
        <b>{value}</b>
      </div>
    </div>
  );
}

export default App;
