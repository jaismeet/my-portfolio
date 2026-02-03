import { FaGithub, FaLinkedin, FaEnvelope,  FaWhatsapp} from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <section id = "home" className="home">
      <h1>Hi, I'm <span>Jaismeet Kaur</span></h1>
      
      <h3>Data Analyst & React Developer</h3>

      <p>
        I specialize in turning raw data into meaningful insights and building 
        modern, user-friendly web applications. With a strong foundation in 
        Python, SQL, and Machine Learning, along with hands-on experience in 
        React.js, I create solutions that combine data intelligence with clean design.
      </p>

      <div className="home-buttons">
          <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noreferrer">View Resume</a>
        <a href="/resume.pdf" className="btn-outline" download>Download Resume</a>
      </div>

      <div className="social-icons">
          <a href="https://github.com/jaismeet/" target="_blank" rel="noreferrer">
             <FaGithub />
         </a>

          <a href="https://linkedin.com/in/jaismeet-kaur-420bb8249" target="_blank" rel="noreferrer">
              <FaLinkedin />
          </a>

          <a href="mailto:kaurjaismeet294@gmail.com">
              <FaEnvelope />
          </a>
           
          <a href="https://wa.me/918272873867" target="_blank" rel="noreferrer">
               <FaWhatsapp />
          </a>
           
      </div>

    </section>
  );
}

export default Home;
