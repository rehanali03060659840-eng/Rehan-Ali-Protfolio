import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { socials } from "../data/socials";
const icons = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    whatsapp: MessageCircle,
    phone: Phone,
};
export function SocialLinks({ className = "", showLabels = true, style, }: {
    className?: string;
    showLabels?: boolean;
    style?: CSSProperties;
}) {
    return (<div className={className} style={style}>
      {socials
            .filter((item) => item.href)
            .map((item) => {
            const Icon = icons[item.kind];
            return (<motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} aria-label={item.label} whileHover={{ y: -2, scale: 1.06 }} whileTap={{ scale: 0.94 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} style={{
                textDecoration: "none",
                WebkitTapHighlightColor: "transparent"
            }}>
              <Icon size={17}/>
              {showLabels && <span>{item.label}</span>}
            </motion.a>);
        })}
    </div>);
}
