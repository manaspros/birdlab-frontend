
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Positions.css";

const Positions = () => {
  const navigate = useNavigate();

  return (
    <div className="positions-background">
      <div className="positions-content">
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
            <div className="section-box" onClick={() => navigate("/lectures")}>Lectures</div>
            <div className="section-box active" onClick={() => navigate("/positions")}>Open Positions</div>
            <div className="section-box" onClick={() => navigate("/contact")}>Contact</div>
          </div>
          <div className="top-logo iitj-logo" onClick={() => navigate("/")}>IITJ</div>
        </div>
        
        <div className="main-container">
          <h1 className="main-title">Open Positions</h1>
          <div className="positions-list">
            <div className="position-item">
              <h3>PhD Position in Bio-inspired Robotics</h3>
              <p><strong>Department:</strong> Mechanical Engineering</p>
              <p><strong>Duration:</strong> 4-5 years</p>
              <p><strong>Requirements:</strong> MTech/MS in relevant field, strong programming skills</p>
              <p><strong>Application Deadline:</strong> April 30, 2024</p>
              <button className="apply-button">Apply Now</button>
            </div>
            <div className="position-item">
              <h3>Research Associate - Wearable Robotics</h3>
              <p><strong>Department:</strong> Computer Science</p>
              <p><strong>Duration:</strong> 2 years</p>
              <p><strong>Requirements:</strong> PhD in Robotics/AI, experience with wearable systems</p>
              <p><strong>Application Deadline:</strong> May 15, 2024</p>
              <button className="apply-button">Apply Now</button>
            </div>
            <div className="position-item">
              <h3>Project Assistant - Haptic Systems</h3>
              <p><strong>Department:</strong> Electronics Engineering</p>
              <p><strong>Duration:</strong> 1 year</p>
              <p><strong>Requirements:</strong> BTech/BE in relevant field, knowledge of control systems</p>
              <p><strong>Application Deadline:</strong> March 30, 2024</p>
              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
