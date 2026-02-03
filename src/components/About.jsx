import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-card">
        <p>
          I am a Computer Science graduate with a strong interest in 
          <strong> Data Analytics</strong> and <strong> Frontend Development</strong>. 
          I enjoy transforming data into meaningful insights and building modern web 
          applications that make complex information easy to understand.
        </p>

        <p>
          My technical background includes <strong>Python, SQL, and Machine Learning</strong> 
          for data analysis, along with <strong>React.js and JavaScript</strong> for developing 
          responsive and user-friendly interfaces. I have worked on real-world systems such as an 
          <strong> AI-based Invoice Extraction platform</strong>, where I combined data processing 
          with frontend visualization.
        </p>

        <p>
          I am passionate about blending <strong>data intelligence with clean UI design</strong> 
          to create practical, scalable solutions that support better decision-making.
        </p>
      </div>
    </section>
  );
}

export default About;
