import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const navItems = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About", "/about"],
] as const;

type NavbarProps = {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
};

export function Navbar({ theme, setTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => (isActive ? "nav-active" : "")}>
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      className="nav-active-indicator"
                      layoutId="active-nav-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <motion.button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.18 }}
        >
          <motion.span
            className="theme-toggle-icon"
            key={theme}
            initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.75 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.span>
        </motion.button>
      </div>
    </header>
  );
}
