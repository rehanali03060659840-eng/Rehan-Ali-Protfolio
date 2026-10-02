import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../types/portfolio";
import { motion } from "motion/react";
import { cardVariants } from "./ScrollReveal";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="project-card"
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.012 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "6px",
        background: "rgba(255, 255, 255, 0.94)",
        transition: "transform 0.25s,\n    border-color 0.25s",
        color: "#26344d",
      }}
    >
      <div
        className="project-info"
        style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}
      >
        <div
          className="project-heading"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <div>
            <span
              className="project-type"
              style={{
                font: '8px "DM Mono",\n    monospace',
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#6f60ca",
              }}
            >
              {project.category}
            </span>
            <h3
              style={{
                margin: "7px 0 0",
                fontSize: "17px",
                letterSpacing: "-0.03em",
                color: "#24324b",
              }}
            >
              {project.title}
            </h3>
          </div>
        </div>
        <p
          style={{
            color: "#66748a",
            fontSize: "10px",
            lineHeight: 1.8,
            margin: "12px 0 13px",
            flex: 1,
          }}
        >
          {project.description}
        </p>
        <div className="project-stack" style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.stack.map((item) => (
            <span key={item} className="project-chip">
              {item}
            </span>
          ))}
        </div>
        <div className="project-links" style={{ marginTop: "auto" }}>
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
            <span className="project-private">Links coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}