import React, { useEffect, useState } from 'react';
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

const MainContent = () => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
          setIsSkillsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <p>후덕킹 LearnHub 프로젝트 소개하기 (클릭 시 소개창 열기)</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>여기에 연락처 정보를 제공하세요...</p>
      </section>
    </div>
  );
}

export default MainContent;
