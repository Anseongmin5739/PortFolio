import React, { useEffect, useState } from 'react';
import './MainContent.css';

// 기술 데이터
const skillsData = [
  { skill: 'HTML5', level: 70 },
  { skill: 'CSS3', level: 80 },
  { skill: 'JavaScript', level: 70 },
  { skill: 'jQuery', level: 50 },
  { skill: 'React', level: 60 },
  { skill: 'MySQL', level: 60 },
  { skill: 'Github', level: 70 },
];

// 프로젝트
const projectsData = [
  {
    title: '후덕킹(애니 커뮤니티 사이트)',
    period: '2024.06 ~ 2024.07',
    techStack: ['Thymeleaf', 'AJAX', 'MySQL', 'Spring JPA','Spring Security+JWT'],
    description: '애니메이션 커뮤니티를 사이트로 사용자가 애니메이션을 추천하고 리뷰를 작성하며 게임을 즐기수 있는 커뮤니티',
    contributions: [
      'jQuery, Swiper, AOS 등의 라이브러리를 설치 및 활용하여 일관된 UI/UX를 구현',
      '검색 및 북마크 기능 / Naver 지도 API를 활용하여 지도에 마커를 표시한 팝업 스토어 구현 ',
      'AJAX와 Canvas API를 활용해 퀴즈 시스템과 룰렛 게임을 구현'
    ],
    imgSrc: 'images/Ani_main.jpg',
    details: {
      ppt: 'https://www.miricanvas.com/v/13f46bk',
      git: 'https://github.com/Anseongmin5739/who-ducking',
    }
  },
  {
    title: 'LearnHub(학원 lms)',
    period: '2024.07 ~ 2022.08',
    techStack: ['React','Axios' ,'Chart.js', 'Spring Boot', 'Spring JPA', 'Spring Security+JWT'],
    description: '다양한 교육 콘텐츠를 관리하고 수강생들이 학습할 수 있는 교육 플랫폼',
    contributions: [
      '외부라이브러리 및 API를 가져와 캘린더 구현',
      'Axios통신을 하여 커리큘럼 관리 시스템 개발',
      '설문조사 등록 및 Chart.js를 통하여 설문조사 추이 확인',
    ],
    imgSrc: 'images/LearnHub_Manager.jpg',
    details: {
      ppt: 'https://www.miricanvas.com/v/13kmolx',
      git: 'https://github.com/Anseongmin5739/Learn-Hub',
    }
  },
];

const MainContent = () => {
  const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트 상태
  const [isSkillsVisible, setIsSkillsVisible] = useState(false); // 스킬이 보이는지 여부

  // 스크롤 이벤트를 감지하여 스킬 섹션이 화면에 나타날 때 애니메이션을 실행
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
          setIsSkillsVisible(true); // 스킬 섹션이 화면에 보일 때 상태를 변경합니다.
        }
      }
    };

    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 추가
    return () => window.removeEventListener('scroll', handleScroll); // 컴포넌트가 언마운트될 때 리스너 제거
  }, []);

  // 프로젝트 클릭 시 선택된 프로젝트를 설정합니다.
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지

    // 폼 데이터 수집
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // 임시 성공 또는 실패 로직
    if (name && email && message) {
      alert('성공적으로 메시지를 보냈습니다.');
      e.target.reset();
    } else {
      alert('메시지를 보내는 데 실패했습니다. 모든 필드를 작성해주세요.');
    }
  };

  return (
    <div className="main-content">
      <section id="about-text">
        <h1>About Me</h1>
        <p>안녕하세요 주니어 개발자 안성민 입니다.<br />
           대학시절 여러 언어와 다양한 IT기술을 접하고 싶어서 IT학과를 졸업했습니다.<br />
           그중 JSP로 웹 페이지를 개발하는 것이 재미있었고, 제가 더 성장하면 좋은 결과물을 만들 수 있을 거 같아서 졸업 후 비트캠프에 지원하였습니다.<br />
           해당 프로그램에서 다양한 기술들을 더 많이 배우고 여러 프로젝트를 하면서 협업심과 성취감을 길렀습니다 <br />
           새로운 것을 도전하는 것을 좋아하며 한걸음씩 성장해 나아가고 있는 프론트엔드 개발자입니다.
        </p>
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <div className={`skills-container ${isSkillsVisible ? 'active' : ''}`}>
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <p>{skill.skill}</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: isSkillsVisible ? `${skill.level}%` : '0%' }}
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
          <p><strong>기간:</strong> {selectedProject.period}</p>
          <p><strong>사용 기술 스택:</strong> {selectedProject.techStack.join(', ')}</p>
          <p><strong>프로젝트 설명:</strong> {selectedProject.description}</p>
          <p><strong>기여한 부분:</strong></p>
          <ul>
            {selectedProject.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
          <a href={selectedProject.details.ppt} target="_blank" rel="noopener noreferrer">PPT 보기</a>
          <a href={selectedProject.details.git} target="_blank" rel="noopener noreferrer">GitHub 보기</a>
        </section>
      )}


    </div>
  );
}

export default MainContent;
