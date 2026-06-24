export const profile = {
  name: "Jaismeet Kaur",
  initials: "JK",
  role: "Software Developer | AI/ML Enthusiast",
  headline: "I build responsive web apps and practical AI/data products.",
  summary:
    "Software development and AI/ML enthusiast with 1 year of hands-on experience building responsive React and Next.js interfaces, data-driven dashboards, API-connected workflows, and AI features using Python, SQL, LangChain, NLP, and FastAPI.",
  email: "kaurjaismeet294@gmail.com",
  phone: "+91 82728 73867",
  github: "https://github.com/jaismeet",
  linkedin: "https://www.linkedin.com/in/jaismeet-kaur-420bb8249",
  whatsapp: "https://wa.me/918272873867",
  resume: "/resume.pdf",
  portrait: "/jaismeet-kaur-profile.png",
};

export function createMailtoLink(subject = "Portfolio inquiry", body = "") {
  const params = [`subject=${encodeURIComponent(subject)}`];

  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }

  return `mailto:${profile.email}?${params.join("&")}`;
}

export const stats = [
  { value: "1", label: "Year Experience" },
  { value: "3", label: "Professional Roles" },
  { value: "6+", label: "Portfolio Projects" },
  { value: "15+", label: "Tools & Skills" },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend & Data",
    items: ["Python", "SQL", "FastAPI", "REST APIs", "Pandas", "NumPy"],
  },
  {
    title: "AI & ML",
    items: ["LangChain", "Gemini API", "NLP", "RAG", "Embeddings", "FAISS", "OpenCV"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Streamlit", "Netlify"],
  },
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Anslation",
    duration: "March 2026 - Present",
    type: "Current",
    points: [
      "Built responsive Next.js and React modules for deals, coupons, brands, stores, FAQ, feedback, smart deals, and blogs.",
      "Created reusable UI components including sliders, skeleton loaders, filters, modals, category views, and dynamic navigation.",
      "Integrated dynamic data into deal, coupon, brand, upcoming deal, and personalized content sections.",
      "Supported personalization work involving user profiles, event data, recommendation signals, semantic search, embeddings, FAISS, and RAG concepts.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Aargus Infotec",
    duration: "July 2025 - November 2025",
    type: "Internship",
    points: [
      "Developed responsive React.js interfaces for an AI-based invoice extraction system.",
      "Integrated REST API and backend extraction outputs with frontend screens for review, validation, and correction.",
      "Built reusable UI components for invoice tables, field-level review, status handling, and structured data presentation.",
      "Collaborated with backend and data teams to test extraction results, debug UI issues, and improve workflow usability.",
    ],
  },
  {
    role: "Data Analyst Trainee",
    company: "Anudip Foundation",
    duration: "July 2024 - September 2024",
    type: "Training",
    points: [
      "Cleaned and analyzed datasets using Python and SQL.",
      "Built dashboards and reports to communicate trends, insights, and business patterns.",
      "Practiced exploratory data analysis, visualization, and insight extraction for decision-making use cases.",
    ],
  },
];

export const projectTabs = ["All", "Frontend", "AI", "Data"];

export const projects = [
  {
    title: "AI Resume Analyzer",
    category: "AI",
    description:
      "AI-powered analyzer with PDF/DOCX uploads, ATS match scores, NLP skill extraction, semantic similarity scoring, missing keyword detection, section-wise scoring, and downloadable improvement reports.",
    tech: ["React.js", "Python", "FastAPI", "NLP", "Generative AI"],
    github: "https://github.com/jaismeet/AI-Resume-Analyzer",
    actionLabel: "GitHub",
    visual: "resume",
    image: "/project-images/ai-resume-analyzer.png",
  },
  {
    title: "Job Pipeline Tracker",
    category: "Frontend",
    description:
      "Responsive job application dashboard to manage statuses, priorities, follow-ups, notes, sources, metrics, CSV/PDF export, and localStorage persistence.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "localStorage"],
    github: "https://github.com/jaismeet/job-pipeline-tracker",
    actionLabel: "GitHub",
    visual: "pipeline",
    image: "/project-images/job-pipeline-tracker.png",
  },
  {
    title: "LangChain Chatbot",
    category: "AI",
    description:
      "Conversational AI chatbot using LangChain and Gemini API with ConversationBufferMemory and ConversationChain for contextual, real-time responses.",
    tech: ["Python", "LangChain", "Gemini API", "Streamlit", "Memory"],
    github: "https://github.com/jaismeet/ChatBot",
    actionLabel: "GitHub",
    visual: "chatbot",
    image: "/project-images/langchain-chatbot.png",
  },
  {
    title: "Udemy Course Data Analysis",
    category: "Data",
    description:
      "Exploratory data analysis on a Udemy dataset to extract pricing, course demand, rating, and category insights using Python notebooks.",
    tech: ["Python", "Pandas", "EDA", "Visualization", "Jupyter"],
    github: "https://github.com/jaismeet/Data-Analysis/blob/main/Udemy_Python_Project.ipynb",
    actionLabel: "Notebook",
    visual: "analytics",
    image: "/project-images/udemy-course-eda.png",
  },
  {
    title: "E-commerce Data Analysis",
    category: "Data",
    description:
      "Data analysis project combining Python and SQL to query, clean, explore, and summarize structured business data for actionable insights.",
    tech: ["Python", "SQL", "Pandas", "EDA", "Jupyter"],
    github: "https://github.com/jaismeet/Data-Analysis/blob/main/MySql%20Project.ipynb",
    actionLabel: "Notebook",
    visual: "database",
    image: "/project-images/python-sql-eda.png",
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "Personal portfolio built with React and Vite to present experience, projects, skills, resume, and contact workflows in a responsive interface.",
    tech: ["React.js", "Vite", "CSS3", "Responsive UI"],
    github: "https://github.com/jaismeet/my-portfolio",
    actionLabel: "GitHub",
    visual: "portfolio",
    image: "/project-images/portfolio-website.png",
  },
];
