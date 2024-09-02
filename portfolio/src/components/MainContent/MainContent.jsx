import React, { useEffect, useState } from 'react';
import './MainContent.css';

// 백엔드
const backendSkills = [
  "Java",
  "Spring Boot",
  "Spring Framework",
  "JPA",
  "RESTful API",
  "Spring Security",
  "JWT",
  "MySQL"
];

// 프론트엔드
const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Axios",
  "Chart.js",
  "fetch API",
  "jQuery"
];

// 데브옵스
const devopsSkills = [
  "Docker",
  "Kubernetes",
  "Jenkins (CI/CD)",
  "Naver Cloud Platform",
];

// 툴
const toolSkills = [
  "IntelliJ IDEA",
  "VSCode",
  "GitHub",
  "Postman",
  "Figma",
  "Notion",
];

// 프로젝트 데이터
const projectsData = [
  {
    title: '후덕킹(애니 커뮤니티 사이트)',
    period: '2024.06 ~ 2024.07',
    techStack: ['Thymeleaf', 'AJAX', 'MySQL', 'Spring JPA', 'Spring Security+JWT'],
    description: '애니메이션 커뮤니티를 사이트로 사용자가 애니메이션을 추천하고 리뷰를 작성하며 게임을 즐길 수 있는 커뮤니티',
    contributions: [
      'jQuery, Swiper, AOS 등의 라이브러리를 설치 및 활용하여 일관된 UI/UX를 구현',
      '검색 및 북마크 기능 / Naver 지도 API를 활용하여 지도에 마커를 표시한 팝업 스토어 구현',
      'AJAX와 Canvas API를 활용해 퀴즈 시스템과 룰렛 게임을 구현'
    ],
    imgSrc: 'images/Ani_main.jpg',
    details: {
      ppt: 'https://www.miricanvas.com/v/13f46bk',
      git: 'https://github.com/Anseongmin5739/who-ducking',
    }
  },
  {
    title: 'Learn-Hub(학원 lms)',
    period: '2024.07 ~ 2024.08',
    techStack: ['React', 'Axios', 'Chart.js', 'Spring Boot', 'Spring JPA', 'Spring Security+JWT'],
    description: '다양한 교육 콘텐츠를 관리하고 수강생들이 학습할 수 있는 교육 플랫폼',
    contributions: [
      '외부 라이브러리 및 API를 사용하여 캘린더를 구현',
      'Axios 통신을 통해 커리큘럼 관리 시스템 개발',
      '설문조사 등록 및 Chart.js를 통해 설문조사 추이 확인',
      '로그인 및 회원가입 구현',
    ],
    imgSrc: 'images/LearnHub_Manager.jpg',
    details: {
      ppt: 'https://www.miricanvas.com/v/13kmolx',
      git: 'https://github.com/Anseongmin5739/HomeLearn-front',
    }
  },
];

const MainContent = () => {
  const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 상태

  // 프로젝트 클릭 시 모달 창 열기
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-content">
      <section id="about-text">
        <h1>About Me</h1>
        <p>안녕하세요 주니어 개발자 안성민 입니다.<br />
           대학시절 여러 언어와 다양한 IT기술을 접하고 싶어서 IT학과를 졸업했습니다.<br />
           그중 JSP로 웹 페이지를 개발하는 것이 재미있었고, 제가 더 성장하면 좋은 결과물을 만들 수 있을 거 같아서 졸업 후 비트캠프에 지원하였습니다.<br />
           해당 프로그램에서 다양한 기술들을 더 많이 배우고 여러 프로젝트를 하면서 협업심과 성취감을 길렀습니다.<br />
           새로운 것을 도전하는 것을 좋아하며 한걸음씩 성장해 나아가고 있는 프론트엔드 개발자입니다.
        </p>
      </section>

      <section id="skills-backend">
        <h1>Back-End</h1>
        <ul className="skills-list">
          {backendSkills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </section>

      <section id="skills-frontend">
        <h1>Front-End</h1>
        <ul className="skills-list">
          {frontendSkills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </section>

      <section id="skills-devops">
        <h1>DevOps</h1>
        <ul className="skills-list">
          {devopsSkills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </section>

      <section id="skills-tools">
        <h1>Tools</h1>
        <ul className="skills-list">
          {toolSkills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
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

      {/* 모달 창 */}
      {isModalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h1>{selectedProject.title}</h1>
            <p><strong>기간:</strong> {selectedProject.period}</p>
            <p><strong>사용 기술 스택:</strong> {selectedProject.techStack.join(', ')}</p>
            <p><strong>프로젝트 설명:</strong> {selectedProject.description}</p>
            <p><strong>기여한 부분:</strong></p>
            <ul>
              {selectedProject.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
            <div className="buttons">
              <a href={selectedProject.details.ppt} target="_blank" rel="noopener noreferrer" className="project-button">PPT 보기</a>
              <a href={selectedProject.details.git} target="_blank" rel="noopener noreferrer" className="project-button">GitHub 보기</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
