import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Fourth.css";

const Fourth = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'fourth1':
        return (
          <div className="paper-box">
            <h3>Master Device</h3>
            <p>This section will contain information about the Master Device.</p>
            {/* Add more content here */}
          </div>
        );
      case 'fourth2':
        return (
          <div className="paper-box">
            <h3>Slave Device</h3>
            <p>This section will contain information about the Slave Device.</p>
            {/* Add more content here */}
          </div>
        );
      case 'fourth3':
        return (
          <div className="paper-box">
            <h3>Haptic Feedback</h3>
            <p>This section will contain information about Haptic Feedback.</p>
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
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fourth1'); }}
                className="first-box"
              >
                Master Device
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fourth2'); }}
                className="first-box"
              >
                Slave Device
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fourth3'); }}
                className="first-box"
              >
                Haptic Feedback
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Tele-Robotics and Haptics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Fourth;
