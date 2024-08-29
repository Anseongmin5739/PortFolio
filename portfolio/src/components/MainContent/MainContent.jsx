import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <section id="about">
        <h1>About Me</h1>
        <p>안녕하세요
           프론트 엔드 개발자 안성민 입니다
           대학시절 IT업계에서 여러 언어와 다양한 IT기술을 접하고 싶어서 IT학과를 졸업했습니다
           그중 JSP로 웹 페이지를 개발하는 것이 재미있고 내가 더 성장하면 좋은 결과물을 만들 수 있을거 같아서  졸업 후 비트캠프(국비)를 지원하였습니다
           해당 프로그램에서 다양한
           기술들을 더 많이 배우고 여러 프로젝트를 하면서 협업심과 성취감을 길러
           한걸음씩 성장하는 프론트 개발자 입니다 </p>
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <p>HTML CSS JavaScript jQuery Axios Next.js React
            MySQL Github FontAweSome 등등</p>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <p>후덕킹 LearnHub 프로젝트 소개 하기 클릭시 소개창 열기 </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Here you can provide your contact details...</p>
      </section>
    </div>
  );
}

export default MainContent;
