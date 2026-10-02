import type { Project } from "../types/portfolio";
// Add verified URLs here when available. Missing URLs intentionally hide their buttons.
export const projects: Project[] = [
  {
    title: "Full Stack CMS",
    category: "Full Stack",
    description:
      "A CMS project with authentication, content management, and media uploads.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "Firebase",
    ],
    accent: "violet",
    icon: "cms",
  },
  {
    title: "LiveMeet",
    category: "Full Stack",
    description:
      "A real-time meeting platform with authentication, meeting management, chat, and WebSocket communication.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "NestJS",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "JWT",
      "Firebase",
    ],
    accent: "cyan",
    icon: "video",
  },
  {
    title: "School Management System",
    category: "Frontend",
    description:
      "A school management dashboard built with React, TypeScript, MUI, and ECharts.",
    stack: ["React", "TypeScript", "MUI", "ECharts"],
    accent: "cyan",
    icon: "school",
  },
  {
    title: "Buy Yourself",
    category: "Full Stack",
    description:
      "An e-commerce application built with React, TypeScript, Tailwind CSS, and Firebase.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    accent: "pink",
    icon: "shop",
  },
  {
    title: "Anime Streaming Platform",
    category: "Full Stack",
    description:
      "An anime streaming platform project built with Next.js, Tailwind CSS, Supabase, and PostgreSQL.",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    accent: "orange",
    icon: "anime",
  },
];
