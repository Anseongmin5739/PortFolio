import React, { useState } from 'react';
import './MainContent.css';

const skillsData = [
  { skill: 'HTML5', level: 70 },
  { skill: 'CSS3', level: 80 },
  { skill: 'JavaScript', level: 70 },
  { skill: 'jQuery', level: 50 },
  { skill: 'Axios', level: 60 },
  { skill: 'React', level: 60 },
  { skill: 'MySQL', level: 70 },
  { skill: 'Github', level: 70 },
];

const projectsData = [
  {
    title: '똑똑하게 N빵하기',
    description: '복잡한 상황에서의 N빵 계산을 도와주는 모바일 앱입니다.',
    imgSrc: '/images/project1.jpg',
    details: {
      ppt: 'ppt_link_here',
      git: 'github_link_here',
      explanation: '프로젝트에 대한 자세한 설명',
    }
  },
  {
    title: '후덕킹 LearnHub',
    description: 'LearnHub 프로젝트 소개하기 (클릭 시 소개창 열기)',
    imgSrc: '/images/project2.jpg',
    details: {
      ppt: 'ppt_link_here',
      git: 'github_link_here',
      explanation: '프로젝트에 대한 자세한 설명',
    }
  },
];

const MainContent = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="main-content">
      <section id="about">
        <h1>About Me</h1>
        <p>안녕하세요
                   프론트 엔드 개발자 안성민 입니다.<br />
                   대학시절 여러 언어와 다양한 IT기술을 접하고 싶어서 IT학과를 졸업했습니다.<br />
                   그중 JSP로 웹 페이지를 개발하는 것이 재미있고, 제가 더 성장하면 좋은 결과물을 만들 수 있을 거 같아서 졸업 후 비트캠프(국비)를 지원하였습니다.
                   해당 프로그램에서 다양한 기술들을 더 많이 배우고 여러 프로젝트를 하면서 협업심과 성취감을 길러
                   한걸음씩 성장하는 프론트 개발자입니다.
                </p>
      </section>
      <section id="skills">
        <h1>Skills</h1>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <p>{skill.skill}</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="progress-bar-text">{`${skill.level}%`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <img src={project.imgSrc} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <section id="project-details">
          <h1>{selectedProject.title}</h1>
          <p>{selectedProject.details.explanation}</p>
          <a href={selectedProject.details.ppt} target="_blank" rel="noopener noreferrer">PPT 보기</a>
          <a href={selectedProject.details.git} target="_blank" rel="noopener noreferrer">GitHub 보기</a>
        </section>
      )}
      <section id="contact">
        <h2>Contact</h2>
        <p>여기에 연락처 정보를 제공하세요...</p>
      </section>
    </div>
  );
}

export default MainContent;