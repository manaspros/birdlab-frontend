
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Publications.css";

const Publications = () => {
  const navigate = useNavigate();

  return (
    <div className="publications-background">
      <div className="publications-content">
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
            <div className="section-box active" onClick={() => navigate("/publications")}>Publications</div>
            <div className="section-box" onClick={() => navigate("/lectures")}>Lectures</div>
            <div className="section-box" onClick={() => navigate("/positions")}>Open Positions</div>
            <div className="section-box" onClick={() => navigate("/contact")}>Contact</div>
          </div>
          <div className="top-logo iitj-logo" onClick={() => navigate("/")}>IITJ</div>
        </div>
        
        <div className="main-container">
          <h1 className="main-title">Publications</h1>
          <div className="publications-list">
            <div className="publication-item">
              <h3>Bio-inspired Wing Mechanisms for Autonomous Flight</h3>
              <p><strong>Authors:</strong> Dr. Smith, J., et al.</p>
              <p><strong>Journal:</strong> Nature Robotics, 2023</p>
              <p><strong>Abstract:</strong> This paper presents novel bio-inspired mechanisms...</p>
            </div>
            <div className="publication-item">
              <h3>Wearable Robotic Systems for Human Augmentation</h3>
              <p><strong>Authors:</strong> Dr. Johnson, A., et al.</p>
              <p><strong>Journal:</strong> IEEE Transactions on Robotics, 2023</p>
              <p><strong>Abstract:</strong> We explore wearable robotic systems that enhance human capabilities...</p>
            </div>
            <div className="publication-item">
              <h3>Haptic Feedback in Tele-robotic Operations</h3>
              <p><strong>Authors:</strong> Dr. Brown, K., et al.</p>
              <p><strong>Conference:</strong> ICRA 2023</p>
              <p><strong>Abstract:</strong> This work investigates the role of haptic feedback...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
