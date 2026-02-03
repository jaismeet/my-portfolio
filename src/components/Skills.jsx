import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiPandas, SiNumpy, SiOpencv, SiScikitlearn, SiJupyter } from "react-icons/si";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-grid">

        {/* Frontend */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-icons">
            <span><FaReact /> React</span>
            <span><SiJavascript /> JavaScript</span>
            <span><FaHtml5 /> HTML</span>
            <span><FaCss3Alt /> CSS</span>
          </div>
        </div>

        {/* Data */}
        <div className="skill-category">
          <h3>Data & Analytics</h3>
          <div className="skill-icons">
            <span><FaPython /> Python</span>
            <span><FaDatabase /> SQL</span>
            <span><SiPandas /> Pandas</span>
            <span><SiNumpy /> NumPy</span>
          </div>
        </div>

        {/* AI/ML */}
        <div className="skill-category">
          <h3>AI & ML</h3>
          <div className="skill-icons">
            <span><SiScikitlearn /> Scikit-learn</span>
            <span><SiOpencv /> OpenCV</span>
            <span>🧠 NLP</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skill-icons">
            <span><FaGitAlt /> Git</span>
            <span><SiJupyter /> Jupyter</span>
            <span>💻 VS Code</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
