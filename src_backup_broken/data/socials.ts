import type { SocialLink } from "../types/portfolio";
import { personal } from "./personal";
export const socials: SocialLink[] = [
  { label: "LinkedIn", href: personal.linkedinHref, kind: "linkedin" },
  { label: "Email", href: `mailto:${personal.email}`, kind: "mail" },
  { label: "WhatsApp", href: personal.whatsappHref, kind: "whatsapp" },
  { label: "Phone", href: personal.phoneHref, kind: "phone" },
];
