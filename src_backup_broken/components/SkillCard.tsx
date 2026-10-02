import { Blocks, Braces, Cloud, Code2, Container, Database, FileCode2, GitBranch, Github, Monitor, PanelsTopLeft, Server, Terminal, } from "lucide-react";
import { motion } from "motion/react";
import { cardVariants } from "./ScrollReveal";
const skillIcons = {
    HTML: Braces,
    CSS: PanelsTopLeft,
    JavaScript: FileCode2,
    TypeScript: FileCode2,
    React: Blocks,
    Vite: Terminal,
    "Tailwind CSS": PanelsTopLeft,
    "Node.js": Server,
    NestJS: Server,
    "REST APIs": Cloud,
    "JWT Authentication": Code2,
    MongoDB: Database,
    Mongoose: Database,
    Git: GitBranch,
    GitHub: Github,
    Firebase: Cloud,
    Docker: Container,
    "VS Code": Monitor,
};
export function SkillCard({ group, items, }: {
    group: string;
    items: string[];
}) {
    return (<motion.article className="skill-group" variants={cardVariants} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 240, damping: 24 }} style={{
        border: "1px solid var(--line)",
        borderRadius: "6px",
        background: "rgba(255, 255, 255, 0.94)",
        transition: "border-color 0.2s,\n    transform 0.2s",
        color: "#26344d"
    }}>
      <div className="skill-group-head" style={{
        display: "flex",
        alignItems: "center",
        gap: "11px",
        paddingBottom: "18px",
        marginBottom: "17px",
        borderBottom: "1px solid var(--line)"
    }}>
        <span className="skill-group-icon" style={{
        display: "grid",
        placeItems: "center",
        width: "32px",
        height: "32px",
        color: "#5e54c7",
        borderRadius: "4px",
        background: "linear-gradient(140deg, #eeedff, #e6f2ff)",
        borderColor: "rgba(88, 93, 186, 0.12)"
    }}>
          <Code2 size={18}/>
        </span>
        <h3 style={{
        fontSize: "12px",
        margin: "0",
        fontWeight: 650,
        color: "#24324b"
    }}>{group}</h3>
        <span className="skill-count" style={{
        marginLeft: "auto",
        color: "#8591a5",
        font: "9px \"DM Mono\",\n    monospace"
    }}>
          {String(items.length).padStart(2, "0")}
        </span>
      </div>
      <div className="skill-list" style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
    }}>
        {items.map((skill) => {
            const Icon = skillIcons[skill as keyof typeof skillIcons] ?? Code2;
            return (<span className="skill-pill" key={skill} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                border: "1px solid rgba(190, 196, 232, 0.1)",
                borderRadius: "4px",
                padding: "8px 9px",
                fontSize: "9px",
                color: "#43516a",
                background: "#f2f5fa",
                borderColor: "rgba(50, 71, 112, 0.08)"
            }}>
              <Icon size={14}/>
              {skill}
            </span>);
        })}
      </div>
    </motion.article>);
}
