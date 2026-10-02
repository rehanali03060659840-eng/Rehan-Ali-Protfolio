import type { AnchorHTMLAttributes, ReactNode } from "react";
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "quiet" | "outline";
    children: ReactNode;
};
export function Button({ variant = "primary", className = "", children, ...props }: Props) {
    return (<a className={`button button-${variant} ${className}`} {...props} style={{
        textDecoration: "none",
        WebkitTapHighlightColor: "transparent",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderRadius: "4px",
        padding: "13px 16px",
        fontSize: "11px",
        fontWeight: 700,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: variant === "primary" ? "transparent" : undefined,
        transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease"
    }}>
      {children}
    </a>);
}
