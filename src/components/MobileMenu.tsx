import { ArrowUpRight, Download } from "lucide-react";
export const navItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Resume", "resume"],
    ["Contact", "contact"],
] as const;
export function MobileMenu({ open, onNavigate, }: {
    open: boolean;
    onNavigate: () => void;
}) {
    return (<nav className={`mobile-nav ${open ? "mobile-nav-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
      {navItems.map(([label, id]) => (<a key={id} href={`#${id}`} onClick={onNavigate} style={{
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
            borderColor: "rgba(39, 60, 94, 0.09)"
        }}>
          {label}
          <ArrowUpRight size={15}/>
        </a>))}
      <a href="/documents/Rehan-Ali-CV.pdf" download="Rehan-Ali-CV.pdf" onClick={onNavigate} style={{
        textDecoration: "none",
        WebkitTapHighlightColor: "transparent",
        borderColor: "rgba(39, 60, 94, 0.09)"
    }}>
        Download CV <Download size={15}/>
      </a>
    </nav>);
}

