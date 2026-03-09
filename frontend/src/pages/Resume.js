import React from "react";

function Resume() {
  const resumeUrl = `${process.env.PUBLIC_URL}/Anithra_fullstack_developer.pdf`;

  return (
    <section className="section-card">
      <h2>Resume</h2>
      <p>
        Python Full Stack Developer with experience in Django, React, Angular,
        MySQL, and REST API development.
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            background: "linear-gradient(90deg, #7fd3ff, #78ffd8)",
            color: "#06131f",
            padding: "10px 14px",
            borderRadius: "10px",
            fontWeight: 700,
          }}
        >
          View Resume
        </a>
        <a
          href={resumeUrl}
          download
          style={{
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.35)",
            color: "#eef4ff",
            padding: "10px 14px",
            borderRadius: "10px",
            fontWeight: 700,
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
