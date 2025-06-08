
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Lectures.css";

const Lectures = () => {
  const navigate = useNavigate();

  return (
    <div className="lectures-background">
      <div className="lectures-content">
        <div className="top-bar-container">
          <div className="top-logo birdlab-logo" onClick={() => navigate("/")}>BirdLab</div>
          <div className="sections-container">
            <div className="section-box" onClick={() => navigate("/")}>Welcome</div>
            <div className="section-box" onClick={() => navigate("/people")}>People</div>
            <div className="section-box expandable">
              Research
              <span className="arrow down"></span>
              <div className="research-subsections">
                <div className="research-subsection" onClick={() => navigate("/first")}>Bio-inspired Mechanisms</div>
                <div className="research-subsection" onClick={() => navigate("/second")}>Wearable and Collaborative Robotics</div>
                <div className="research-subsection" onClick={() => navigate("/third")}>Reconfigurable and Growing Robotics</div>
                <div className="research-subsection" onClick={() => navigate("/fourth")}>Tele-Robotics and Haptics</div>
                <div className="research-subsection" onClick={() => navigate("/fifth")}>Applied AI in Robotics</div>
              </div>
            </div>
            <div className="section-box" onClick={() => navigate("/publications")}>Publications</div>
            <div className="section-box active" onClick={() => navigate("/lectures")}>Lectures</div>
            <div className="section-box" onClick={() => navigate("/positions")}>Open Positions</div>
            <div className="section-box" onClick={() => navigate("/contact")}>Contact</div>
          </div>
          <div className="top-logo iitj-logo" onClick={() => navigate("/")}>IITJ</div>
        </div>
        
        <div className="main-container">
          <h1 className="main-title">Lectures & Talks</h1>
          <div className="lectures-list">
            <div className="lecture-item">
              <h3>Introduction to Bio-inspired Robotics</h3>
              <p><strong>Date:</strong> March 15, 2024</p>
              <p><strong>Venue:</strong> IITJ Main Auditorium</p>
              <p><strong>Speaker:</strong> Dr. Principal Investigator</p>
              <p>Overview of bio-inspired mechanisms in modern robotics...</p>
            </div>
            <div className="lecture-item">
              <h3>Wearable Robotics: Present and Future</h3>
              <p><strong>Date:</strong> February 28, 2024</p>
              <p><strong>Venue:</strong> Online Webinar</p>
              <p><strong>Speaker:</strong> Guest Expert</p>
              <p>Exploring the current state and future prospects of wearable robotics...</p>
            </div>
            <div className="lecture-item">
              <h3>AI in Robotics Applications</h3>
              <p><strong>Date:</strong> January 20, 2024</p>
              <p><strong>Venue:</strong> Research Hall</p>
              <p><strong>Speaker:</strong> Research Team</p>
              <p>Practical applications of artificial intelligence in robotics...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
