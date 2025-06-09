import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="nav-logo left-logo">
        <img src="./assets/logo-left.png" alt="Left Logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right Logo */}
      <div className="nav-logo right-logo">
        <img src="./assets/logo-right.png" alt="Right Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
