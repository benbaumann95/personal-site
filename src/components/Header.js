import React from 'react';
import './styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="Header">
          <li className="header-item header-name">BB</li>
          <li className="header-item header-last">
            <a href="#footer" className="header-link">
              Contact
            </a>
          </li>
          <li className="header-item">
            <a href="#CV" className="header-link">
              Games
            </a>
          </li>
          <li className="header-item">
            <a href="#bio" className="header-link">
              Bio
            </a>
          </li>
          <li className="header-item">
            <a href="#about" className="header-link">
              About
            </a>
          </li>
          <li className="header-item">
            <a href="#projects" className="header-link">
              Projects
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
