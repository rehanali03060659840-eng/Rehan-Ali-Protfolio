import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import { profile } from "../data/profile";
import { SocialLinks } from "../components/SocialLinks";
import TechText from "../components/TechText";

const cornerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.86 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 26, delay: i * 0.06 },
  }),
};

export function Hero({ theme }: { theme: "dark" | "light" }) {
  const [nameFontSize, setNameFontSize] = useState(120);
  const [nameBoxHeight, setNameBoxHeight] = useState(200);
  const [canHover, setCanHover] = useState(true);
  const [cardHovered, setCardHovered] = useState(false);

  const ink = theme === "light" ? "#111111" : "#ffffff";
  const showCorners = !canHover || cardHovered;
  const isWorking = profile.availability === "working";
  const availability = {
    color: isWorking ? "#3ddc84" : "#a78bfa",
    text: isWorking ? "Currently working on a project" : "Open to work, let's talk",
  };

  useEffect(() => {
    const applyNameSize = () => {
      const width = window.innerWidth;
      if (width <= 560) {
        setNameFontSize(62);
        setNameBoxHeight(118);
      } else if (width <= 800) {
        setNameFontSize(84);
        setNameBoxHeight(156);
      } else {
        setNameFontSize(120);
        setNameBoxHeight(200);
      }
    };

    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const applyHover = () => setCanHover(hoverQuery.matches);

    applyNameSize();
    applyHover();
    window.addEventListener("resize", applyNameSize);
    hoverQuery.addEventListener("change", applyHover);
    return () => {
      window.removeEventListener("resize", applyNameSize);
      hoverQuery.removeEventListener("change", applyHover);
    };
  }, []);

  return (
    <section
      id="home"
      className="hero wrap"
      style={{
        marginInline: "auto",
        position: "relative",
        display: "grid",
        alignItems: "center",
      }}
    >
      <div
        className="hero-copy"
        style={{
          position: "relative",
          zIndex: 2,
          animation: "rise 0.7s both",
        }}
      >
        <div
          className="eyebrow"
          style={{
            font: '10px "DM Mono",\n    monospace',
            letterSpacing: "0.18em",
            color: "#626f86",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "9px 12px",
            border: "1px solid var(--line)",
            background: "rgba(255, 255, 255, 0.82)",
            borderRadius: "4px",
            borderColor: "rgba(69, 91, 137, 0.17)",
          }}
        >
          <span
            className="status-dot"
            style={{
              height: "6px",
              width: "6px",
              background: "#41a783",
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(65, 167, 131, 0.4)",
            }}
          />{" "}
          HELLO, I'M
        </div>
        <div
          className="hero-name"
          style={{
            width: "100%",
            height: nameBoxHeight,
            position: "relative",
            margin: "6px 0 2px",
          }}
        >
          <TechText
            text={profile.name}
            fontWeight={600}
            fontSize={nameFontSize}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            fontFamily=""
            color={ink}
            accentColor={ink}
            letterSpacing={-0.05}
            reach={200}
            softness={0.7}
            strokeWidth={1.5}
            speed={1}
            lineStyle="dashed"
            selection
            labels
            draggable
            sweep
          />
        </div>
        <h2
          className="hero-role"
          style={{
            color: "#1d2940",
          }}
        >
          {profile.role}
        </h2>
        <p
          className="hero-sub"
          style={{
            margin: "24px 0 0",
            color: "#55647b",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          React{" "}
          <i
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#7d70df",
            }}
          />{" "}
          TypeScript(Tsx){" "}
          <i
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#7d70df",
            }}
          />{" "}
          JavaScript(Jsx){" "}
          <i
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#7d70df",
            }}
          />{" "}
          Node.js{" "}
          <i
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#7d70df",
            }}
          />{" "}
          NestJS{" "}
          <i
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#7d70df",
            }}
          />{" "}
          MongoDB
        </p>
        <p
          className="hero-description"
          style={{
            maxWidth: "435px",
            lineHeight: 1.9,
            margin: "17px 0 23px",
          }}
        >
          I build modern, responsive and scalable web applications and turn
          ideas into real working products.
        </p>
        <div
          className="hero-actions"
          style={{
            display: "flex",
            gap: "11px",
            flexWrap: "wrap",
          }}
        >
          <a
            className="button button-primary"
            href="#projects"
            style={{
              textDecoration: "none",
              WebkitTapHighlightColor: "transparent",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderRadius: "4px",
              fontWeight: 700,
              border: "1px solid transparent",
              transition:
                "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease",
              background: "linear-gradient(110deg, #4e70da, #7558d2)",
            }}
          >
            View my projects <ArrowUpRight size={17} />
          </a>
          <a
            className="button button-quiet"
            href="#contact"
            style={{
              textDecoration: "none",
              WebkitTapHighlightColor: "transparent",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderRadius: "4px",
              fontWeight: 700,
              border: "1px solid transparent",
              transition:
                "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease",
            }}
          >
            Contact me <ArrowRight size={16} />
          </a>
          <a
            className="button button-quiet hero-cv"
            href="/documents/Rehan-Ali-CV.pdf"
            download="Rehan-Ali-CV.pdf"
            style={{
              textDecoration: "none",
              WebkitTapHighlightColor: "transparent",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderRadius: "4px",
              fontWeight: 700,
              border: "1px solid transparent",
              transition:
                "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease",
            }}
          >
            <Download size={15} /> Download CV
          </a>
        </div>
        <SocialLinks
          className="hero-socials"
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 3,
            marginTop: "32px",
            marginBottom: "64px",
          }}
        />
      </div>
      <div
        className="hero-art"
        aria-label="Portrait and code editor"
        style={{
          position: "relative",
          display: "grid",
          placeItems: "center",
          animation: "rise 0.8s 0.12s both",
        }}
      >
        <div
          className="art-orbit orbit-one"
          style={{
            position: "absolute",
            border: "1px solid rgba(169, 159, 255, 0.13)",
            borderRadius: "50%",
            transform: "rotate(-24deg)",
          }}
        />
        <div
          className="art-orbit orbit-two"
          style={{
            position: "absolute",
            border: "1px solid rgba(169, 159, 255, 0.13)",
            borderRadius: "50%",
            transform: "rotate(48deg)",
            borderColor: "rgba(106, 219, 212, 0.1)",
          }}
        />
        <div
          className="art-glow"
          style={{
            position: "absolute",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background:
              "radial-gradient(\n    circle,\n    rgba(119, 105, 210, 0.2),\n    rgba(65, 86, 152, 0.08) 44%,\n    transparent 70%\n  )",
            filter: "blur(4px)",
          }}
        />
        <div
          className="developer-portrait"
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
        >
          <img
            className="hero-portrait-image"
            src="/rehan-ali-portrait.jpeg"
            alt={`${profile.name} portrait`}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectFit: "cover",
              objectPosition: "center 34%",
            }}
          />
          <motion.div
            className="hero-corner hero-corner--tl"
            custom={0}
            variants={cornerVariants}
            initial="hidden"
            animate={showCorners ? "visible" : "hidden"}
          >
            {profile.name}
          </motion.div>
          <motion.div
            className="hero-corner hero-corner--tr"
            custom={1}
            variants={cornerVariants}
            initial="hidden"
            animate={showCorners ? "visible" : "hidden"}
          >
            {profile.role}
          </motion.div>
          <motion.div
            className="hero-corner hero-corner--bl"
            custom={2}
            variants={cornerVariants}
            initial="hidden"
            animate={showCorners ? "visible" : "hidden"}
          >
            <span>
              Internship completed
              <small>Tech Vezoto</small>
            </span>
          </motion.div>
          <motion.div
            className="hero-corner hero-corner--br"
            custom={3}
            variants={cornerVariants}
            initial="hidden"
            animate={showCorners ? "visible" : "hidden"}
          >
            <motion.span
              className="hero-corner-dot"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.45, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: availability.color }}
            />
            {availability.text}
          </motion.div>
          <div className="portrait-code">
            {"{"} <b>build</b>: <i>"ideas"</i> {"}"}
          </div>
        </div>
        <div
          className="code-card"
          style={{
            position: "relative",
            border: "1px solid rgba(181, 178, 225, 0.2)",
            borderRadius: "8px",
            background:
              "linear-gradient(\n    145deg,\n    rgba(24, 26, 39, 0.96),\n    rgba(13, 16, 26, 0.97)\n  )",
            boxShadow:
              "0 24px 70px #05060c,\n    0 0 40px rgba(136, 121, 224, 0.11)",
            overflow: "hidden",
            transform: "rotate(1.2deg)",
          }}
        >
          <div
            className="code-content"
            style={{
              font: '12px/2.25 "DM Mono",\n    monospace',
              color: "#d3d1e1",
            }}
          >
            <div
              style={{
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              <em
                style={{
                  fontStyle: "normal",
                  color: "#55596c",
                }}
              >
                01
              </em>
              <code
                style={{
                  font: "inherit",
                }}
              >
                <span
                  className="code-purple"
                  style={{
                    color: "#c5a0ff",
                  }}
                >
                  const
                </span>{" "}
                developer{" "}
                <span
                  className="code-blue"
                  style={{
                    color: "#7acbe9",
                  }}
                >
                  =
                </span>{" "}
                {"{"}
              </code>
            </div>
            <div
              style={{
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              <em
                style={{
                  fontStyle: "normal",
                  color: "#55596c",
                }}
              >
                02
              </em>
              <code
                style={{
                  font: "inherit",
                }}
              >
                &nbsp;&nbsp;name:{" "}
                <span
                  className="code-green"
                  style={{
                    color: "#9fdfc0",
                  }}
                >
                  "Rehan Ali"
                </span>
                ,
              </code>
            </div>
            <div
              style={{
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              <em
                style={{
                  fontStyle: "normal",
                  color: "#55596c",
                }}
              >
                03
              </em>
              <code
                style={{
                  font: "inherit",
                }}
              >
                &nbsp;&nbsp;role:{" "}
                <span
                  className="code-green"
                  style={{
                    color: "#9fdfc0",
                  }}
                >
                  "Full Stack Dev"
                </span>
                ,
              </code>
            </div>
            <div
              style={{
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              <em
                style={{
                  fontStyle: "normal",
                  color: "#55596c",
                }}
              >
                04
              </em>
              <code
                style={{
                  font: "inherit",
                }}
              >
                &nbsp;&nbsp;build:{" "}
                <span
                  className="code-purple"
                  style={{
                    color: "#c5a0ff",
                  }}
                >
                  (ideas)
                </span>{" "}
                <span
                  className="code-blue"
                  style={{
                    color: "#7acbe9",
                  }}
                >
                  =&gt;
                </span>{" "}
                <span
                  className="code-green"
                  style={{
                    color: "#9fdfc0",
                  }}
                >
                  "reality"
                </span>
              </code>
            </div>
            <div
              style={{
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              <em
                style={{
                  fontStyle: "normal",
                  color: "#55596c",
                }}
              >
                05
              </em>
              <code
                style={{
                  font: "inherit",
                }}
              >
                {"}"}
              </code>
            </div>
            <div
              className="code-cursor"
              style={{
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              <em
                style={{
                  fontStyle: "normal",
                  color: "#55596c",
                }}
              >
                06
              </em>
              <code
                style={{
                  font: "inherit",
                  color: "#ad9fff",
                }}
              >
                <span>▍</span>
              </code>
            </div>
          </div>
          <div
            className="code-footer"
            style={{
              borderTop: "1px solid var(--line)",
              padding: "9px 13px",
              display: "flex",
              justifyContent: "space-between",
              color: "#777b8e",
              font: '8px "DM Mono",\n    monospace',
            }}
          >
            <span>
              <span
                className="tiny-dot"
                style={{
                  height: "5px",
                  width: "5px",
                  background: "#67dfbe",
                  borderRadius: "50%",
                  boxShadow: "0 0 12px #67dfbe",
                }}
              />{" "}
              TypeScript
            </span>
            <span>UTF-8&nbsp;&nbsp; LF</span>
          </div>
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#about"
        style={{
          color: "#768299",
          textDecoration: "none",
          WebkitTapHighlightColor: "transparent",
          position: "absolute",
          left: "0",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          font: '9px "DM Mono",\n    monospace',
          letterSpacing: "0.12em",
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
      <div
        className="hero-index"
        style={{
          position: "absolute",
          right: "0",
          color: "#768299",
          font: '10px "DM Mono",\n    monospace',
        }}
      >
        01{" "}
        <span
          style={{
            display: "inline-block",
            height: "1px",
            background: "rgba(63, 81, 121, 0.22)",
            margin: "0 10px 3px",
          }}
        />{" "}
        07
      </div>
    </section>
  );
}
