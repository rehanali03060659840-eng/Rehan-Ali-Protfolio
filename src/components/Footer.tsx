import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import { navItems } from "./MobileMenu";
import { SocialLinks } from "./SocialLinks";
import { motion } from "motion/react";
export function Footer() {
    const links = navItems.filter(([, id]) => id !== "resume");
    return (<footer className="footer" style={{
        borderTop: "1px solid var(--line)",
        background: "#f3f5fa",
        color: "#34425a",
        borderColor: "rgba(44, 64, 104, 0.13)"
    }}>
      <div className="wrap footer-main" style={{
        marginInline: "auto",
        minHeight: "125px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
        <a className="brand" href="#home" style={{
        color: "#25334d",
        textDecoration: "none",
        WebkitTapHighlightColor: "transparent",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "14px",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        flexShrink: 0
    }}>
          <img className="brand-mark" src="/rehan-ali-portrait.jpeg" alt="" style={{
        width: "38px",
        height: "38px",
        flex: "0 0 38px",
        objectFit: "cover",
        objectPosition: "center 36%",
        borderRadius: "50%",
        border: "2px solid rgba(65, 168, 255, 0.8)",
        boxShadow: "0 0 14px rgba(28, 133, 255, 0.25)"
    }}/>
          <span>
            {profile.name}
            <small style={{
        display: "block",
        color: "#78859a",
        font: "8px \"DM Mono\",\n    monospace",
        letterSpacing: "0.12em",
        marginTop: "2px"
    }}>{profile.role.toUpperCase()}</small>
          </span>
        </a>
        <span className="footer-location">{profile.location}</span>
        <div className="footer-links" style={{
        display: "flex",
        flexWrap: "wrap"
    }}>
          {links.map(([label, id]) => (<a key={id} href={`#${id}`} style={{
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
            transition: "color 0.2s"
        }}>
              {label}
            </a>))}
        </div>
        <SocialLinks className="footer-socials" showLabels={false}/>
        <motion.a className="back-top" href="#home" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} style={{
        textDecoration: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        background: "none",
        border: "0",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "9px"
    }}>
          Back to top <ArrowUpRight size={15}/>
        </motion.a>
      </div>
      <div className="wrap footer-bottom" style={{
        marginInline: "auto",
        paddingBlock: "14px",
        borderTop: "1px solid rgba(190, 196, 232, 0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#77839a",
        font: "8px \"DM Mono\",\n    monospace",
        borderColor: "rgba(44, 64, 104, 0.11)"
    }}>
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span>{profile.role}</span>
        <a href="#home" aria-label="Back to top" style={{
        color: "#5c50bc",
        textDecoration: "none",
        WebkitTapHighlightColor: "transparent",
        display: "grid",
        placeItems: "center",
        width: "25px",
        height: "25px",
        border: "1px solid var(--line)",
        borderRadius: "50%",
        borderColor: "rgba(44, 64, 104, 0.16)"
    }}>
          <ArrowUpRight size={16}/>
        </a>
      </div>
    </footer>);
}
