import { FaCode, FaDatabase, FaLaptopCode, FaRobot, FaTools } from "react-icons/fa";
import { skills } from "../data/portfolio";
import "./Skills.css";

const categoryIcons = {
  Frontend: <FaLaptopCode />,
  "Backend & Data": <FaDatabase />,
  "AI & ML": <FaRobot />,
  Tools: <FaTools />,
};

function Skills() {
  return (
    <section id="skills" className="skills-section animate-slide-up">
      <div className="section-heading">
        <p className="section-kicker">
          <FaCode />
          Skills
        </p>
        <h2>Tools I use to build interfaces, APIs, AI workflows, and analysis projects.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((category) => (
          <article className="skill-category" key={category.title}>
            <div className="skill-heading">
              <span>{categoryIcons[category.title]}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-icons">
              {category.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
