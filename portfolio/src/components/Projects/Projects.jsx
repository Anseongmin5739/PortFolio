import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projectData = [
    {
      title: '포트폴리오 웹사이트',
      description: 'React로 제작한 개인 포트폴리오 웹사이트입니다.',
      image: '/images/portfolio.png',
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://yourportfolio.com',
      skills: ['React', 'CSS', 'JavaScript']
    },
    // 추가 프로젝트
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
