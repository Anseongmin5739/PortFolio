import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <section id="about">
        <h1>About Me</h1>
        <p>Here you can write about yourself...</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>Here you can list your skills...</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>Here you can showcase your projects...</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Here you can provide your contact details...</p>
      </section>
    </div>
  );
}

export default MainContent;
