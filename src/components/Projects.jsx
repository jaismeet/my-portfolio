import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="card">
          <h3>Invoice Extraction System (AI + React)</h3>
          <p>
            AI-powered system that extracts invoice details using OpenCV and NLP,
            with a React interface for reviewing structured data.
          </p>
          <div className="tags">
            <span>Python</span><span>OpenCV</span><span>NLP</span><span>React</span>
          </div>
        </div>

        <div className="card">
          <h3>E-commerce Data Analysis</h3>
          <p>
            Analyzed customer purchase data to identify trends and sales patterns,
            presenting insights through dashboards and visualizations.
          </p>
          <div className="tags">
            <span>Python</span><span>SQL</span><span>Visualization</span>
          </div>
        </div>

        <div className="card">
          <h3>Udemy Course Data Analysis</h3>
          <p>
            Performed exploratory data analysis on course datasets to identify
            pricing and demand trends.
          </p>
          <div className="tags">
            <span>Python</span><span>SQL</span><span>EDA</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
