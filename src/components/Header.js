import React from 'react';
import './styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li className="header-item header-name">BB</li>
          <li className="header-item header-last">
            <a href="#footer" className="header-link">
              Contact
            </a>
          </li>
          <li className="header-item">
            <a href="#teaching" className="header-link">
              CV
            </a>
          </li>
          <li className="header-item">
            <a href="#blog" className="header-link">
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
