import React from "react";

function Home() {
  return (
    <section className="hero hero-pro">
      <div>
        <p className="badge">Portfolio</p>
        <h1>Anithra M A</h1>
        <h3>BCA Graduate | Currently Pursuing MCA | Full Stack Developer</h3>
        <p className="hero-copy">
          I am a motivated full stack developer with hands-on experience in building
          responsive web applications using Django, React, Angular, MySQL, and REST APIs.
        </p>
        <div className="hero-tags" aria-label="Core expertise">
          <span>Python</span>
          <span>Django</span>
          <span>React</span>
          <span>Angular</span>
          <span>MySQL</span>
          <span>REST APIs</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
