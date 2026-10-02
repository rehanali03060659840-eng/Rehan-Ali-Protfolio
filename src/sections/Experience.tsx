import { experience } from "../data/experience";
import { SectionTitle } from "../components/SectionTitle";
import { motion } from "motion/react";
import { cardVariants } from "../components/ScrollReveal";
export function Experience() {
    return (<section id="experience" className="section section-soft" style={{
        background: "rgba(235, 240, 249, 0.72)",
        borderBlock: "1px solid rgba(195, 198, 230, 0.045)"
    }}>
      <div className="wrap" style={{
        marginInline: "auto"
    }}>
        <SectionTitle index="04" kicker="THE JOURNEY SO FAR">
          Learning by <span className="gradient-text" style={{
        color: "transparent",
        background: "linear-gradient(100deg, #c1b6ff 2%, #9a8cff 42%, #6bded6 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundImage: "linear-gradient(105deg, #426dd6 0%, #7958d3 46%, #348ec3 82%, #426dd6 100%)",
        backgroundSize: "220% auto",
        animation: "gradientFlow 9s ease-in-out infinite"
    }}>doing.</span>
        </SectionTitle>
        <div className="timeline" style={{
        maxWidth: "780px"
    }}>
          {experience.map((item, index) => (<motion.article className="timeline-item" variants={cardVariants} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 240, damping: 24 }} key={item.title} style={{
            display: "grid",
            paddingBottom: "36px"
        }}>
              <div className="timeline-mark" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            color: "#a99eff",
            font: "9px \"DM Mono\",\n    monospace"
        }}>
                <span style={{
            color: "#6e5cc8",
            background: "#eeecff",
            borderColor: "rgba(92, 82, 181, 0.17)"
        }}>0{index + 1}</span>
                <i style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            border: "1px solid #a397ff",
            background: "#7890d6",
            boxShadow: "0 0 0 4px #eef1fb"
        }}/>
              </div>
              <div className="timeline-content">
                <div className="timeline-meta" style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            color: "var(--muted)",
            font: '16px "DM Mono",\n    monospace',
            letterSpacing: "0.02em"
        }}>
                  <span>{item.label}</span>
                  <span>{item.date}</span>
                </div>
                <h3 style={{
            margin: "12px 0 8px",
            letterSpacing: "-0.02em",
            color: "var(--ink)"
        }}>{item.title}</h3>
                <p style={{
            margin: "0 0 15px",
            maxWidth: "650px",
            lineHeight: 1.9,
            color: "var(--muted)"
        }}>{item.body}</p>
                <div className="project-stack" style={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap"
        }}>
                  {item.chips.map((chip) => (<span key={chip} style={{
                border: "1px solid var(--line)",
                borderRadius: "999px",
                padding: "6px 11px",
                color: "var(--muted)",
                font: '16px "DM Mono",\n    monospace',
                background: "var(--surface-raised)"
            }}>{chip}</span>))}
                </div>
              </div>
            </motion.article>))}
        </div>
      </div>
    </section>);
}
