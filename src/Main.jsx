import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1 className="main-title">Welcome to BirdLab</h1>
      <div className="sections-container">
        <div className="section-box" onClick={() => navigate("/first")}>Bio-inspired Mechanisms</div>
        <div className="section-box" onClick={() => navigate("/second")}>Wearable and Collaborative Robotics</div>
        <div className="section-box" onClick={() => navigate("/third")}>Reconfigurible and Growing Robotics</div>
        <div className="section-box" onClick={() => navigate("/fourth")}>Tele-Robotics and Haptics</div>
        <div className="section-box" onClick={() => navigate("/fifth")}>Applied AI in Robotics</div>
      </div>
    </div>
  );
};

export default Main;
