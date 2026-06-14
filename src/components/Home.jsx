import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { createMailtoLink, profile, stats } from "../data/portfolio";
import "./Home.css";

function Home() {
  const emailLink = createMailtoLink("Portfolio opportunity for Jaismeet Kaur");

  return (
    <section id="home" className="home">
      <div className="home-copy animate-slide-right">
        {/* <p className="eyebrow">{profile.role}</p> */}
        <h1>
          Hi, I&apos;m <span>{profile.name}</span>
        </h1>
        <h2>{profile.headline}</h2>
        <p className="home-summary">{profile.summary}</p>

        <div className="home-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
            <FaArrowRight />
          </a>
          <a href={profile.resume} className="btn-outline" download>
            Download Resume
            <FaDownload />
          </a>
        </div>

        <div className="social-row" aria-label="Social links">
          <span>Connect</span>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={emailLink} aria-label="Email">
            <FaEnvelope />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="home-visual animate-slide-up">
        <div className="portrait-orbit">
          <span className="orbit-dot orbit-dot-one" />
          <span className="orbit-dot orbit-dot-two" />
          <span className="orbit-dot orbit-dot-three" />
          <div className="portrait-shell">
            <img src={profile.portrait} alt="Jaismeet Kaur professional portrait" />
          </div>
        </div>
        {/* <div className="availability-card animate-slide-down">
          <span className="status-dot" />
          Available for frontend and AI roles
        </div> */}
      </div>

      <div className="home-stats animate-slide-up">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;
