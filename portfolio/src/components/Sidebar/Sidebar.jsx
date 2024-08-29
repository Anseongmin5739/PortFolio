import React from 'react';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="images/Profile_Image.jpg" alt="Profile" />
        <h2>안 성 민</h2>
        <p>프론트엔드 개발자</p>
      </div>
      <div className="contact-info">
        <p>
          <i className="fas fa-envelope"></i> smahn4069@gmail.com
        </p>
        <p>
          <i className="fas fa-phone"></i> 010-9722-5739
        </p>
         <p>
         <i className="fas fa-birthday-cake"></i> 2000년 10월 6일
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> 서울시 서대문구 연희로32길 48
        </p>
        <p>
          <i className="fas fa-university"></i> 두원공과대학교 스마트IT학과
        </p>
      </div>
      <div className="social-links">
        <a href="https://www.notion.so/HomeLearn-d628f1bbb546468fb3be713c24ea1226" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-notion"></i> Notion
        </a>
        <a href="https://github.com/Anseongmin5739" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
