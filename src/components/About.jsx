import { FaChartLine, FaCode, FaRobot } from "react-icons/fa";
import "./About.css";

const strengths = [
  {
    icon: <FaCode />,
    title: "Frontend Engineering",
    text: "React, Next.js, Tailwind CSS, dynamic routing, reusable components, and responsive UI delivery.",
  },
  {
    icon: <FaRobot />,
    title: "AI Workflows",
    text: "LangChain, Gemini API, NLP, RAG concepts, semantic search, embeddings, and FastAPI integrations.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Thinking",
    text: "Python, SQL, Pandas, NumPy, EDA, dashboards, and insight extraction from structured datasets.",
  },
];

function About() {
  return (
    <section id="about" className="about-section animate-slide-up">
      <div className="section-heading">
        <p className="section-kicker">About Me</p>
        <h2>Software Developer building modern web apps, AI workflows, and data-driven solutions.</h2>
      </div>

      <div className="about-layout">
        <div className="about-card">
          <p>
            Software Developer focused on building modern web applications, AI-powered workflows, and data-driven digital solutions.

          </p>
          <p>
            My work spans deal platforms, AI invoice extraction screens, resume analyzers, chatbots, and EDA
            notebooks using React, Tailwind CSS, Python, SQL, LangChain, NLP, and FastAPI.
          </p>
        </div>

        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
