import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <a href="/" className="logo">BirdLab</a>
      </header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
