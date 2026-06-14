import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data/portfolio";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-heading" data-reveal="up">
        <p className="section-kicker">
          <FaBriefcase />
          Experience
        </p>
        <h2>1 year of hands-on frontend, AI workflow, and data experience.</h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <article
            className="experience-card"
            key={`${exp.company}-${exp.role}`}
            data-reveal="left"
            style={{ "--reveal-delay": `${index * 120}ms` }}
          >
            <div className="experience-meta">
              <span>{exp.type}</span>
              <small>{exp.duration}</small>
            </div>
            <h3>{exp.role}</h3>
            <p className="experience-company">{exp.company}</p>
            <ul>
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
