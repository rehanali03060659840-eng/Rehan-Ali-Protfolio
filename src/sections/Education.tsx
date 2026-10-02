import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import { motion } from "motion/react";
import { cardVariants } from "../components/ScrollReveal";
export function Education() {
    return (<section id="education" className="section wrap education-section" style={{
        marginInline: "auto",
        paddingTop: "70px",
        paddingBottom: "85px",
        background: "transparent"
    }}>
      <motion.div className="education-card" variants={cardVariants} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 240, damping: 24 }} style={{
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: "linear-gradient(115deg, #fff, #f0f4ff)",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        color: "#26344d",
        borderColor: "rgba(45, 66, 105, 0.13)",
        boxShadow: "0 10px 30px rgba(34, 54, 89, 0.055)"
    }}>
        <div className="education-icon" style={{
        border: "1px solid rgba(173, 157, 255, 0.22)",
        background: "linear-gradient(140deg, #eeedff, #e6f2ff)",
        borderRadius: "5px",
        display: "grid",
        placeItems: "center",
        color: "#5e54c7",
        flexShrink: 0,
        borderColor: "rgba(88, 93, 186, 0.12)"
    }}>
          <GraduationCap size={25}/>
        </div>
        <div>
          <span className="kicker" style={{
        font: "10px \"DM Mono\",\n    monospace",
        letterSpacing: "0.18em",
        color: "#626f86"
    }}>EDUCATION</span>
          <h2 style={{
        margin: "9px 0 6px",
        letterSpacing: "-0.035em",
        color: "#24324b"
    }}>{education[0].institution}</h2>
          <p style={{
        margin: "0",
        color: "#66748a"
    }}>
            {education[0].qualification} <span>·</span> {education[0].completed}
          </p>
        </div>
        <span className="education-decoration" style={{
        position: "absolute",
        right: "24px",
        bottom: "-28px",
        lineHeight: 1,
        fontWeight: 800,
        letterSpacing: "-0.1em",
        color: "rgba(89, 91, 169, 0.10)"
    }}>ED.</span>
      </motion.div>
    </section>);
}
