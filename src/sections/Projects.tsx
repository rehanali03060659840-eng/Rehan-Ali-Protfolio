import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";

type ProjectsProps = {
  limit?: number;
  showAllLink?: boolean;
};

export function Projects({ limit, showAllLink = false }: ProjectsProps = {}) {
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="section wrap" style={{ marginInline: "auto" }}>
      <SectionTitle index="03" kicker="SELECTED WORK">
        My projects
      </SectionTitle>
      <div className="projects-toolbar">
        <p>A selection of projects and ideas brought to life.</p>
      </div>
      <div className="projects-grid">
        {list.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {showAllLink && (
        <div className="projects-view-all">
          <Link className="button button-primary" to="/projects">
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  );
}
