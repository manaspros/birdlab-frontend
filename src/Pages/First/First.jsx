import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./First.css"; // Import CSS

const First = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'firs1':
        return (
          <div className="paper-box"> {/* Added paper-box class */}
            <h3>Bio-inspired Muscles-TSA</h3>
            <p>This section will contain information about Bio-inspired Muscles-TSA.</p>
            {/* Add more content here */}
          </div>
        );
      case 'firs2':
        return (
          <div className="paper-box">
            <h3>Artificial Muscle-Based Robotic Finger</h3>
            <p>This section will contain information about Artificial Muscle-Based Robotic Finger.</p>
            {/* Add more content here */}
          </div>
        );
      case 'firs3':
        return (
          <div className="paper-box">
            <h3>Artificial Muscle-Based Robotic Hand</h3>
            <p>This section will contain information about Artificial Muscle-Based Robotic Hand.</p>
            {/* Add more content here */}
          </div>
        );
      case 'firs4':
        return (
          <div className="paper-box">
            <h3>Hawk Gripper</h3>
            <p>This section will contain information about Hawk Gripper.</p>
            {/* Add more content here */}
          </div>
        );
      case 'firs5':
        return (
          <div className="paper-box">
            <h3>Cat-Leap Parkour Rolling Mechanism</h3>
            <p>This section will contain information about Cat-Leap Parkour Rolling Mechanism.</p>
            {/* Add more content here */}
          </div>
        );
      default:
        return (
          <>
            <p className="">Select a topic to explore:</p>
            <div className="first-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs1'); }}
                className="first-box"
              >
                Bio-inspired Muscles-TSA
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs2'); }}
                className="first-box"
              >
                Artificial Muscle-Based Robotic Finger
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs3'); }}
                className="first-box"
              >
                Artificial Muscle-Based Robotic Hand
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs4'); }}
                className="first-box"
              >
                Hawk Gripper
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs5'); }}
                className="first-box"
              >
                Cat-Leap Parkour Rolling Mechanism
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Bio-inspired Mechanisms</h1>
      {renderTopicContent()}
    </div>
  );
};

export default First;
