import { ArrowUpRight, Download, FileText, PanelsTopLeft } from "lucide-react";
const documents = [
    {
        title: "Resume / CV",
        description: "My professional CV.",
        path: "/documents/Rehan-Ali-CV.pdf",
        filename: "Rehan-Ali-CV.pdf",
        Icon: PanelsTopLeft,
        view: "View CV",
        download: "Download CV",
    },
    {
        title: "Cover Letter",
        description: "My professional cover letter.",
        path: "/documents/Rehan-Ali-Cover-Letter.pdf",
        filename: "Rehan-Ali-Cover-Letter.pdf",
        Icon: FileText,
        view: "View Cover Letter",
        download: "Download Cover Letter",
    },
];
export function Documents() {
    return (<section id="resume" className="section resume-section" style={{
        background: "linear-gradient(115deg, #edf2ff, #f4f0ff 70%, #eef6fc)",
        borderBlock: "1px solid rgba(184, 176, 255, 0.12)",
        overflow: "hidden"
    }}>
      <div className="wrap" style={{
        marginInline: "auto"
    }}>
        <div className="documents-heading">
          <span className="kicker" style={{
        font: "10px \"DM Mono\",\n    monospace",
        letterSpacing: "0.18em",
        color: "#626f86"
    }}>CAREER DOCUMENTS</span>
          <h2 style={{
        color: "#1d2940",
        margin: "12px 0 8px",
        fontSize: "clamp(32px, 4vw, 48px)",
        letterSpacing: "-0.06em"
    }}>
            Resume <span className="gradient-text" style={{
        color: "transparent",
        background: "linear-gradient(100deg, #c1b6ff 2%, #9a8cff 42%, #6bded6 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundImage: "linear-gradient(105deg, #426dd6 0%, #7958d3 46%, #348ec3 82%, #426dd6 100%)",
        backgroundSize: "220% auto",
        animation: "gradientFlow 9s ease-in-out infinite"
    }}>&amp;</span> Cover Letter
          </h2>
          <p style={{
        color: "#69768c",
        fontSize: "13px"
    }}>View or download my professional documents.</p>
        </div>
        <div className="documents-grid" style={{
        display: "grid",
        gap: "20px",
        marginTop: "34px"
    }}>
          {documents.map(({ title, description, path, filename, Icon, view, download }) => (<article className="document-card" key={title} style={{
            color: "#26344d",
            background: "rgba(255, 255, 255, 0.94)",
            minWidth: "0",
            borderRadius: "9px",
            transition: "transform .24s ease, box-shadow .24s ease, border-color .24s ease"
        }}>
                <span className="document-icon" style={{
            color: "#5e54c7",
            background: "linear-gradient(140deg, #eeedff, #e6f2ff)",
            borderColor: "rgba(88, 93, 186, 0.12)",
            display: "grid",
            placeItems: "center",
            width: "48px",
            height: "48px",
            marginBottom: "21px",
            borderRadius: "12px"
        }}>
                  <Icon size={23}/>
                </span>
                <span className="kicker" style={{
            font: "10px \"DM Mono\",\n    monospace",
            letterSpacing: "0.18em",
            color: "#626f86"
        }}>PDF DOCUMENT</span>
                <h3 style={{
            color: "#24324b",
            margin: "9px 0 6px",
            fontSize: "20px",
            letterSpacing: "-.04em"
        }}>{title}</h3>
                <p style={{
            margin: "0",
            fontSize: "12px"
        }}>{description}</p>
                <div className="document-actions" style={{
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "25px"
        }}>
                  <a className="button button-outline" href={path} target="_blank" rel="noreferrer" style={{
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "4px",
            padding: "13px 16px",
            fontSize: "10px",
            fontWeight: 700,
            borderWidth: "1px",
            borderStyle: "solid",
            transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease"
        }}>
                    {view}
                    <ArrowUpRight size={15}/>
                  </a>
                  <a className="button button-primary" href={path} download={filename} style={{
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "4px",
            padding: "13px 16px",
            fontSize: "10px",
            fontWeight: 700,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "transparent",
            transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease",
            background: "linear-gradient(110deg, #4e70da, #7558d2)"
        }}>
                    <Download size={15}/>
                    {download}
                  </a>
                </div>
              </article>))}
        </div>
      </div>
    </section>);
}
