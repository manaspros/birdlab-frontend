
import React from "react";
import { useNavigate } from "react-router-dom";
import "./People.css";

const People = () => {
  const navigate = useNavigate();

  return (
    <div className="people-background">
      <div className="people-content">
        <div className="top-bar-container">
          <div className="top-logo birdlab-logo" onClick={() => navigate("/")}>BirdLab</div>
          <div className="sections-container">
            <div className="section-box" onClick={() => navigate("/")}>Welcome</div>
            <div className="section-box active" onClick={() => navigate("/people")}>People</div>
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
            <div className="section-box" onClick={() => navigate("/lectures")}>Lectures</div>
            <div className="section-box" onClick={() => navigate("/positions")}>Open Positions</div>
            <div className="section-box" onClick={() => navigate("/contact")}>Contact</div>
          </div>
          <div className="top-logo iitj-logo" onClick={() => navigate("/")}>IITJ</div>
        </div>
        
        <div className="main-container">
          <h1 className="main-title">Our Team</h1>
          <div className="people-grid">
            <div className="person-card">
              <h3>Dr. Principal Investigator</h3>
              <p>Lead Researcher in Bio-inspired Robotics</p>
              <p>PhD in Robotics Engineering</p>
            </div>
            <div className="person-card">
              <h3>Research Scholar 1</h3>
              <p>Specializing in Wearable Robotics</p>
              <p>MTech in Mechanical Engineering</p>
            </div>
            <div className="person-card">
              <h3>Research Scholar 2</h3>
              <p>Focus on AI in Robotics</p>
              <p>MTech in Computer Science</p>
            </div>
            <div className="person-card">
              <h3>Graduate Student</h3>
              <p>Working on Haptic Systems</p>
              <p>BTech in Electronics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
