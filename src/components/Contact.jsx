import { FaPaperPlane } from "react-icons/fa";
import { createMailtoLink } from "../data/portfolio";
import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const subject = formData.get("subject")?.trim() || "Portfolio inquiry";
    const message = formData.get("message")?.trim();

    const body = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message || "Hi Jaismeet, I would like to connect with you.",
    ].join("\n");

    window.location.href = createMailtoLink(subject, body);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact-section animate-slide-up">
      <div className="contact-grid">
        <div className="section-heading contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Have a full-time role or project idea?</h2>
          <p>
            I&apos;m open to full-time Software Developer, AI/ML, frontend, dashboard, and data-focused
            freelance opportunities. Send me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="your.email@example.com" required />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" type="text" placeholder="Opportunity / collaboration" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Write your message" required />
          </label>
          <button type="submit">
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
