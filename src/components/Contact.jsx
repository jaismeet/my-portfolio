import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for opportunities or collaborations.</p>

      <div className="contact-links">
        <a href="mailto:kaurjaismeet294@gmail.com">
          <FaEnvelope /> kaurjaismeet294@gmail.com
        </a>

        <a href="https://linkedin.com/in/jaismeet-kaur-420bb8249" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn Profile
        </a>

        <a href="https://wa.me/918272873867" target="_blank" rel="noreferrer">
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contact;
