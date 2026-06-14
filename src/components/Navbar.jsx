import { useEffect, useState } from "react";
import { FaBars, FaBriefcase, FaTimes } from "react-icons/fa";
import { createMailtoLink, profile } from "../data/portfolio";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const hireMailLink = createMailtoLink("Portfolio opportunity for Jaismeet Kaur");

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const setDrawerHeight = () => {
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      root.style.setProperty("--drawer-height", `${viewportHeight}px`);
    };

    root.classList.toggle("nav-open", open);
    body.classList.toggle("nav-open", open);

    if (open) {
      setDrawerHeight();
      window.addEventListener("resize", setDrawerHeight);
      window.visualViewport?.addEventListener("resize", setDrawerHeight);
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      root.classList.remove("nav-open");
      body.classList.remove("nav-open");
      window.removeEventListener("resize", setDrawerHeight);
      window.visualViewport?.removeEventListener("resize", setDrawerHeight);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Jaismeet Kaur home">
        <span className="brand-mark">{profile.initials}</span>
        <span className="brand-text">
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href={hireMailLink}>
        <FaBriefcase />
        Hire Me
      </a>

      <button
        className="hamburger"
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <FaBars />
      </button>

      <button
        className={open ? "drawer-backdrop active" : "drawer-backdrop"}
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setOpen(false)}
      />

      <aside id="mobile-menu" className={open ? "mobile-drawer active" : "mobile-drawer"} aria-hidden={!open}>
        <div className="drawer-header">
          <div className="drawer-profile">
            <strong>{profile.name}</strong>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu">
            <FaTimes />
          </button>
        </div>

        <nav className="drawer-links" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="drawer-cta" href={hireMailLink} onClick={() => setOpen(false)}>
          <FaBriefcase />
          Hire Me
        </a>
      </aside>
    </header>
  );
}

export default Navbar;
