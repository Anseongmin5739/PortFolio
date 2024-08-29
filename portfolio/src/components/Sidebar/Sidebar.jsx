import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="path/to/your/profile.jpg" alt="Profile" />
        <h2>Your Name</h2>
        <p>Web Developer</p>
      </div>
      <div className="contact-info">
        <p>Email: your.email@example.com</p>
        <p>Phone: +123 456 789</p>
        <p>Location: Your City, Country</p>
      </div>
    </aside>
  );
}

export default Sidebar;
