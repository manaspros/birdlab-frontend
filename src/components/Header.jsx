import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <a href="/" className="logo">BirdLab</a>
      </header>
      <nav className="navbar">
  <div className="logo left-logo">
    <img src="./assets/logo-left.png" alt="Left Logo" />
  </div>

  <ul className="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#research">Research</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <div className="logo right-logo">
    <img src="./assets/logo-right.png" alt="Right Logo" />
  </div>
</nav>

    </div>
  );
};

export default Header;
