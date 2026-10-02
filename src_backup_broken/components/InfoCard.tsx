import type { ReactNode } from "react";
export function InfoCard({ icon, label, value, href, }: {
    icon: ReactNode;
    label: string;
    value: string;
    href?: string;
}) {
    const content = (<>
      <span className="info-icon" style={{
        width: "31px",
        height: "31px",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(140deg, #eeedff, #e6f2ff)",
        color: "#5e54c7",
        borderRadius: "4px",
        flexShrink: 0,
        borderColor: "rgba(88, 93, 186, 0.12)"
    }}>{icon}</span>
      <div>
        <small>{label}</small>
        <b>{value}</b>
      </div>
    </>);
    return href ? (<a className="info-card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} style={{
        color: "#273650",
        textDecoration: "none",
        WebkitTapHighlightColor: "transparent",
        border: "1px solid var(--line)",
        borderRadius: "5px",
        background: "rgba(18, 20, 30, 0.54)",
        display: "flex",
        alignItems: "center",
        gap: "11px",
        minWidth: "0"
    }}>
      {content}
    </a>) : (<div className="info-card" style={{
        border: "1px solid var(--line)",
        borderRadius: "5px",
        background: "rgba(18, 20, 30, 0.54)",
        display: "flex",
        alignItems: "center",
        gap: "11px",
        minWidth: "0",
        color: "#273650"
    }}>{content}</div>);
}

