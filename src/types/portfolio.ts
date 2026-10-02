export type ProjectCategory = "Frontend" | "Backend" | "Full Stack";
export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  accent: string;
  icon: "cms" | "school" | "shop" | "anime" | "video";
  image?: string;
  live?: string;
  github?: string;
}
export interface SkillGroup {
  group: "Frontend" | "Backend" | "Database" | "Tools";
  items: string[];
}
export interface ExperienceItem {
  label: string;
  title: string;
  date: string;
  body: string;
  chips: string[];
}
export interface EducationItem {
  institution: string;
  qualification: string;
  completed: string;
}
export interface SocialLink {
  label: string;
  href: string;
  kind: "github" | "linkedin" | "mail" | "whatsapp" | "phone";
}
export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  availability: string;
  whatsapp: string;
  whatsappHref: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  linkedinHref: string;
}
