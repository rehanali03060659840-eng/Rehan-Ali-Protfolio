import type { ReactNode } from "react";
export function SectionTitle({ index, kicker, children, }: {
    index: string;
    kicker: string;
    children: ReactNode;
}) {
    return (<div className="section-heading" style={{
        display: "grid",
        alignItems: "start"
    }}>
      <span className="section-index" style={{
        font: "10px \"DM Mono\",\n    monospace",
        color: "#70809a",
        paddingTop: "6px"
    }}>{index}</span>
      <div>
        <span className="kicker" style={{
        font: "10px \"DM Mono\",\n    monospace",
        letterSpacing: "0.18em",
        color: "#626f86"
    }}>{kicker}</span>
        <h2 style={{
        letterSpacing: "-0.065em",
        lineHeight: 1.08,
        margin: "15px 0 0",
        fontWeight: 650,
        color: "#1d2940"
    }}>{children}</h2>
      </div>
      <div className="heading-decoration" style={{
        display: "flex",
        gap: "5px",
        paddingTop: "6px"
    }}>
        <span style={{
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "linear-gradient(90deg, #5878db, #8e6bda)"
    }}/>
        <span style={{
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "linear-gradient(90deg, #5878db, #8e6bda)"
    }}/>
        <span style={{
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "linear-gradient(90deg, #5878db, #8e6bda)"
    }}/>
      </div>
    </div>);
}

