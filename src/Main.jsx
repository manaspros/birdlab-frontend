import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1 className="main-title">Welcome to BirdLab</h1>
      <div className="sections-container">
        <div className="section-box" onClick={() => navigate("/home")}>Home</div>
        <div className="section-box" onClick={() => navigate("/research")}>Research</div>
        <div className="section-box" onClick={() => navigate("/projects")}>Projects</div>
        <div className="section-box" onClick={() => navigate("/team")}>Team</div>
        <div className="section-box" onClick={() => navigate("/contact")}>Contact</div>
      </div>
    </div>
  );
};

export default Main;
