import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">My Colorful Portfolio</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <nav>
            <ul className="nav-list">
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="section about">
          <h2 className="section-title">About Me</h2>
          <p className="section-content">
            I'm a passionate web developer with expertise in front-end and back-end
            technologies. I enjoy building interactive websites and solving complex
            problems with elegant solutions.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects">
          <h2 className="section-title">My Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <h3>Project One</h3>
              <p>A web application for managing tasks efficiently.</p>
              <a href="https://github.com/your-username/project1" target="_blank" className="project-link">
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>A social media app for connecting people with shared interests.</p>
              <a href="https://github.com/your-username/project2" target="_blank" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">React</li>
            <li className="skill-item">Node.js</li>
            <li className="skill-item">CSS3 / SASS</li>
            <li className="skill-item">Git</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <h2 className="section-title">Contact</h2>
          <p>Feel free to reach out to me at:</p>
          <p className="contact-info">your-email@example.com</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          Find me on{" "}
          <a href="https://github.com/your-username" target="_blank" className="footer-link">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
