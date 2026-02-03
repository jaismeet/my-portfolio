import React from "react";
import "./Experience.css";

const experiences = [
  {
    position: "Intern",
    company: "Aargus Infotec",
    duration: "July 2025 – Nov 2025",
    points: [
      "Worked on an AI-based Invoice Extraction System to extract key invoice details automatically",
      "Developed React.js interfaces to display and manage extracted invoice data",
      "Integrated backend AI outputs with frontend for review and correction",
      "Assisted in data cleaning to improve extraction accuracy",
      "Collaborated with team members to test, debug, and enhance performance",
    ],
  },
];

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      {experiences.map((exp, idx) => (
        <div className="experience-card" key={idx}>
          <h3 className="experience-position">{exp.position}</h3>
          <p className="experience-subtitle">
            {exp.company} | {exp.duration}
          </p>
          <ul className="experience-points">
            {exp.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
