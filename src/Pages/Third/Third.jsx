import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Third.css";

const Third = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'third1':
        return (
          <div className="paper-box">
            <h3>Foldable Supernumerary Robotic Arms</h3>
            <p>This section will contain information about Foldable Supernumerary Robotic Arms.</p>
            {/* Add more content here */}
          </div>
        );
      case 'third2':
        return (
          <div className="paper-box">
            <h3>Extendable Drone Arm</h3>
            <p>This section will contain information about Extendable Drone Arm.</p>
            {/* Add more content here */}
          </div>
        );
      case 'third3':
        return (
          <div className="paper-box">
            <h3>Extendable Space Arm</h3>
            <p>This section will contain information about Extendable Space Arm.</p>
            {/* Add more content here */}
          </div>
        );
      default:
        return (
          <>
            <p>Select a topic to explore:</p>
            <div className="first-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('third1'); }}
                className="first-box"
              >
                Foldable Supernumerary Robotic Arms
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('third2'); }}
                className="first-box"
              >
                Extendable Drone Arm
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('third3'); }}
                className="first-box"
              >
                Extendable Space Arm
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Reconfigurible and Growing Robotics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Third;
