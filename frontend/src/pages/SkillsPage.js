import React from "react";
import "./SkillsPage.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "FE",
    skills: [
      {
        name: "React",
        levelLabel: "Advanced",
        percent: 90,
        detail: "Built multiple full-stack UI modules with reusable components.",
      },
      {
        name: "Angular",
        levelLabel: "Intermediate",
        percent: 75,
        detail: "Created modular views and handled API-driven data workflows.",
      },
      {
        name: "HTML5 / CSS3 / JavaScript",
        levelLabel: "Advanced",
        percent: 88,
        detail: "Developed responsive interfaces with clean semantic structure.",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: "BE",
    skills: [
      {
        name: "Python / Django",
        levelLabel: "Advanced",
        percent: 92,
        detail: "Designed scalable backend logic, auth flows, and CRUD services.",
      },
      {
        name: "REST API Development",
        levelLabel: "Advanced",
        percent: 90,
        detail: "Built and integrated RESTful APIs for production-ready apps.",
      },
      {
        name: "Node.js / Express",
        levelLabel: "Intermediate",
        percent: 70,
        detail: "Implemented API endpoints and middleware for MERN projects.",
      },
    ],
  },
  {
    title: "Database & Tools",
    icon: "DB",
    skills: [
      {
        name: "MySQL / MongoDB",
        levelLabel: "Advanced",
        percent: 86,
        detail: "Worked with relational and NoSQL schemas and query optimization.",
      },
      {
        name: "Git / GitHub",
        levelLabel: "Advanced",
        percent: 88,
        detail: "Managed branch-based workflows and collaborative code reviews.",
      },
      {
        name: "Postman / Workbench",
        levelLabel: "Intermediate",
        percent: 74,
        detail: "Validated endpoints, tested payloads, and debugged API contracts.",
      },
    ],
  },
];

const softSkills = ["Problem Solving", "Team Collaboration", "Agile", "Scrum"];

function CircularMeter({ percent }) {
  const style = {
    background: `conic-gradient(#16e0b6 ${percent}%, rgba(255,255,255,0.15) ${percent}% 100%)`,
  };

  return (
    <div className="circular-meter" style={style} aria-label={`Skill level ${percent}%`}>
      <div className="circular-meter-inner">{percent}%</div>
    </div>
  );
}

function SkillsPage() {
  return (
    <section className="skills-page">
      <header className="skills-hero">
        <p className="skills-tag">Technical Profile</p>
        <h2>My Skills</h2>
        <p>Technologies & Tools I Use to Build Modern Web Applications</p>
      </header>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <article
            key={category.title}
            className="skills-category"
            style={{ animationDelay: `${categoryIndex * 120}ms` }}
          >
            <div className="skills-category-head">
              <span className="skills-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-row">
                    <div>
                      <h4>{skill.name}</h4>
                      <p>{skill.levelLabel}</p>
                    </div>
                    <CircularMeter percent={skill.percent} />
                  </div>

                  <div className="skill-bar-wrap">
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>

                  <p className="skill-detail">{skill.detail}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="soft-skills-card">
        <h3>Soft Skills & Work Style</h3>
        <div className="soft-skills-badges">
          {softSkills.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </section>
  );
}

export default SkillsPage;
