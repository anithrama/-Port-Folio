import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-v2">
      <header className="about-v2-hero">
        <p className="about-v2-tag">Profile</p>
        <h2>About Me</h2>
        <p>
          Hello! I am Anithra M A, a passionate Full Stack Developer focused on
          building modern, scalable, and user-friendly web applications with
          strong backend architecture and polished frontend experiences.
        </p>
      </header>

      <div className="about-v2-grid">
        <article className="about-v2-card">
          <h3>Education</h3>
          <div className="edu-item">
            <h4>Master of Computer Applications (MCA)</h4>
            <p>MACFAST College</p>
          </div>
          <div className="edu-item">
            <h4>Bachelor of Computer Applications (BCA)</h4>
            <p>SAS College</p>
          </div>
        </article>

        <article className="about-v2-card">
          <h3>Training & Certifications</h3>
          <ul>
            <li>Python Full Stack Development - Synnefo Solutions, Kochi</li>
            <li>
              Full Stack Web Development (MERN Stack) - Capital Infotech,
              Thiruvalla
            </li>
            <li>Angular & Django - Faith Infotech, Trivandrum</li>
          </ul>
        </article>

        <article className="about-v2-card">
          <h3>Internship</h3>
          <p>
            3-month internship at Camerine Innovative (January 2026 to March
            2026), contributing to real-world web development projects and
            RESTful API integration.
          </p>
        </article>

        <article className="about-v2-card">
          <h3>Technical Stack</h3>
          <div className="stack-tags">
            <span>Python</span>
            <span>Django</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Angular</span>
            <span>MySQL</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>REST APIs</span>
          </div>
        </article>
      </div>

      <article className="about-v2-summary">
        <h3>Professional Focus</h3>
        <p>
          I enjoy transforming ideas into efficient digital products with clean,
          maintainable code, responsive interfaces, and secure backend systems.
          I am interested in collaborative software teams and innovative product
          development.
        </p>
      </article>
    </section>
  );
}

export default About;
