import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projectTabs, projects } from "../data/portfolio";
import "./Projects.css";

function ProjectVisual({ project }) {
  return (
    <div className="project-visual">
      <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
    </div>
  );
}

function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeTab);
  }, [activeTab]);

  return (
    <section id="projects" className="projects-section animate-slide-up">
      <div className="section-heading projects-heading">
        <div>
          <p className="section-kicker">Projects</p>
          <h2>Selected work across frontend, AI, and data analysis.</h2>
        </div>
        {/* <a className="all-projects-link" href="https://github.com/jaismeet" target="_blank" rel="noreferrer">
          Main GitHub
          <FaExternalLinkAlt />
        </a> */}
      </div>

      <div className="project-tabs" role="tablist" aria-label="Project categories">
        {projectTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <ProjectVisual project={project} />
            <div className="project-body">
              <div className="project-title-row">
                <span>{project.category}</span>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} ${project.actionLabel}`}>
                  <FaGithub />
                </a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
                {project.tech.length > 3 && <span>+{project.tech.length - 3}</span>}
              </div>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                <FaGithub />
                {project.actionLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
