import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ links = [], iconColor = '#333', menuBackground = '#333' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu-container">
      <div
        className={`hamburger-icon ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        style={{ borderColor: iconColor }}
      >
        <span className="bar" style={{ backgroundColor: iconColor }}></span>
        <span className="bar" style={{ backgroundColor: iconColor }}></span>
        <span className="bar" style={{ backgroundColor: iconColor }}></span>
      </div>


      <nav className={`nav-links ${isOpen ? 'open' : ''}`} style={{ backgroundColor: menuBackground }}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
