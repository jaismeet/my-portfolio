import { createMailtoLink, profile } from "../data/portfolio";
import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const connectLinks = [
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "Email", href: createMailtoLink("Portfolio inquiry") },
  { label: "Resume", href: profile.resume, download: true },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <h2>{profile.name}</h2>
          <p>Building clean React apps, AI-powered tools, and data dashboards.</p>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h3>Quick Links</h3>
          <div className="footer-link-list">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="footer-column">
          <h3>Connect</h3>
          <div className="footer-link-list">
            {connectLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                download={link.download}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Jaismeet Kaur. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
