
import React from "react";
import Navbar from "../components/Navbar";
import "./Publications.css";

const Publications = () => {
  return (
    <div className="publications-background">
      <div className="publications-content">
        <Navbar />
        
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
