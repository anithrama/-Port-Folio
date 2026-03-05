import React from "react";
import "./ProjectsPage.css";

const projects = [
  {
    name: "PWD",
    role: "Front-end & Back-end Developer",
    description: "Developed full-stack features for a web application.",
    linkLabel: "GitHub",
    link: "https://github.com/anithrama/PROJECT",
  },
  {
    name: "E-commerce",
    role: "Front-end & Back-end Developer",
    description:
      "Built an online shopping platform with product management, cart, and checkout features.",
    linkLabel: "GitHub",
    link: "https://github.com/anithrama/PROJECT",
  },
  {
    name: "Medicalcrisis",
    role: "Front-end & Back-end Developer",
    description:
      "Designed and implemented a medical assistance platform with database integration.",
    linkLabel: "GitHub",
    link: "https://github.com/anithrama/PROJECT",
  },
  {
    name: "Macfiesta",
    role: "Front-end Developer",
    description:
      "Developed the official website for a college cultural and technical fest, featuring event schedules and registration forms.",
    linkLabel: "Macfiesta Website",
    link: "https://Macfiesta.macfast.org",
  },
  {
    name: "Event Management",
    role: "Front-end & Back-end Developer",
    description:
      "Created a platform for managing events, registrations, and real-time updates for participants.",
    linkLabel: "GitHub",
    link: "https://github.com/anithrama/PROJECT",
  },
];

function ProjectsPage() {
  return (
    <section className="projects-page">
      <header className="projects-hero">
        <p className="projects-tag">Portfolio Work</p>
        <h2>Projects</h2>
        <p>
          Real-world full-stack and frontend projects built with a focus on clean
          UI, scalable architecture, and practical user experience.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="project-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="project-head">
              <h3>{project.name}</h3>
              <span>{project.role}</span>
            </div>

            <p className="project-desc">{project.description}</p>

            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
