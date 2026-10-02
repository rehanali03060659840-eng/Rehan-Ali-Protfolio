import { ArrowUpRight, Download } from "lucide-react";
export function Resume({ available }: {
    available: boolean;
}) {
    return (<section id="resume" className="section resume-section" style={{
        background: "linear-gradient(115deg, #edf2ff, #f4f0ff 70%, #eef6fc)",
        borderBlock: "1px solid rgba(184, 176, 255, 0.12)",
        overflow: "hidden"
    }}>
      <div className="wrap resume-wrap" style={{
        marginInline: "auto",
        display: "grid",
        alignItems: "center",
        position: "relative"
    }}>
        <div>
          <span className="kicker" style={{
        font: "10px \"DM Mono\",\n    monospace",
        letterSpacing: "0.18em",
        color: "#626f86"
    }}>A CLOSER LOOK</span>
          <h2 style={{
        letterSpacing: "-0.065em",
        lineHeight: 1.08,
        margin: "15px 0 0",
        fontWeight: 650,
        color: "#1d2940"
    }}>
            Want to know
            <br />
            more <span className="gradient-text" style={{
        color: "transparent",
        background: "linear-gradient(100deg, #c1b6ff 2%, #9a8cff 42%, #6bded6 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundImage: "linear-gradient(105deg, #426dd6 0%, #7958d3 46%, #348ec3 82%, #426dd6 100%)",
        backgroundSize: "220% auto",
        animation: "gradientFlow 9s ease-in-out infinite"
    }}>about me?</span>
          </h2>
          <p>
            My resume has the details, projects, and experience in one place.
          </p>
        </div>
        <div className="resume-actions" style={{
        position: "relative",
        zIndex: 1,
        display: "grid",
        gap: "9px"
    }}>
          {available ? (<>
              <a className="button button-primary" href="/resume/Rehan-Ali-CV.pdf" download="Rehan-Ali-CV.pdf" style={{
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "4px",
            fontWeight: 700,
            borderWidth: "1px",
            borderStyle: "solid",
            transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease",
            background: "linear-gradient(110deg, #4e70da, #7558d2)"
        }}>
                <Download size={16}/> Download CV
              </a>
              <a className="button button-outline" href="/resume/Rehan-Ali-CV.pdf" target="_blank" rel="noreferrer" style={{
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "4px",
            fontWeight: 700,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "transparent",
            transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease"
        }}>
                View CV <ArrowUpRight size={15}/>
              </a>
            </>) : (<span className="resume-missing">
              Add your CV PDF to <code>public/resume/Rehan-Ali-CV.pdf</code> to
              enable the download and preview.
            </span>)}
          <span className="resume-hint" style={{
        gridColumn: "1/-1",
        color: "#777b8d",
        fontSize: "9px"
    }}>
            PDF · {available ? "Rehan-Ali-CV.pdf" : "No CV file found"}
          </span>
        </div>
        <div className="resume-art" style={{
        position: "absolute",
        color: "rgba(170, 157, 255, 0.13)",
        transform: "rotate(-38deg)"
    }}>
          <ArrowUpRight size={95} strokeWidth={0.7}/>
        </div>
      </div>
    </section>);
}
