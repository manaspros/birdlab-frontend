
import React from "react";
import Navbar from "../components/Navbar";
import "./Positions.css";

const Positions = () => {
  return (
    <div className="positions-background">
      <div className="positions-content">
        <Navbar />
        
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
