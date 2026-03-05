import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./pages/Home.css";

function App() {
  return (
    <BrowserRouter>
      <div className="home-page">
        <div className="bg-orb orb-one" aria-hidden="true" />
        <div className="bg-orb orb-two" aria-hidden="true" />
        <Navbar />
        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
