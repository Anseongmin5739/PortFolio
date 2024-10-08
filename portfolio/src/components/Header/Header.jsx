import React from 'react';
import { Link } from 'react-scroll'; // 부드러운 스크롤 바
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="about" smooth={true} duration={300} offset={-50}>About Me</Link></li>
          <li><Link to="skills" smooth={true} duration={300} offset={-50}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={300} offset={-50}>Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
