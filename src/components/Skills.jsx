import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaProjectDiagram,
  FaRobot,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  SiCss3,
  SiFastapi,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiLangchain,
  SiNetlify,
  SiNextdotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiReact,
  SiStreamlit,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { skills } from "../data/portfolio";
import "./Skills.css";

const categoryIcons = {
  Frontend: <FaLaptopCode />,
  "Backend & Data": <FaDatabase />,
  "AI & ML": <FaRobot />,
  Tools: <FaTools />,
};

const skillIcons = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "Responsive Design": FaMobileAlt,
  Python: SiPython,
  SQL: FaDatabase,
  FastAPI: SiFastapi,
  "REST APIs": FaServer,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  LangChain: SiLangchain,
  "Gemini API": SiGooglegemini,
  NLP: FaBrain,
  RAG: FaProjectDiagram,
  Embeddings: FaBrain,
  FAISS: FaDatabase,
  OpenCV: SiOpencv,
  Git: FaGitAlt,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  "Jupyter Notebook": SiJupyter,
  Streamlit: SiStreamlit,
  Netlify: SiNetlify,
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
              {category.items.map((item) => {
                const SkillIcon = skillIcons[item] ?? FaCode;

                return (
                  <span className="skill-chip" key={item}>
                    <SkillIcon aria-hidden="true" />
                    {item}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
