import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Second.css";

const Second = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'secs1':
        return (
          <div className="paper-box">
            <h3>Exoskeletons</h3>
            <p>This section will contain information about Exoskeletons.</p>
            {/* Add more content here */}
          </div>
        );
      case 'secs2':
        return (
          <div className="paper-box">
            <h3>Exosuits</h3>
            <p>This section will contain information about Exosuits.</p>
            {/* Add more content here */}
          </div>
        );
      case 'secs3':
        return (
          <div className="paper-box">
            <h3>Prosthetic limbs</h3>
            <p>This section will contain information about Prosthetic limbs.</p>
            {/* Add more content here */}
          </div>
        );
      case 'secs4':
        return (
          <div className="paper-box">
            <h3>Supernumerary robotic limbs</h3>
            <p>This section will contain information about Supernumerary robotic limbs.</p>
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
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs1'); }}
                className="first-box"
              >
                Exoskeletons
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs2'); }}
                className="first-box"
              >
                Exosuits
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs3'); }}
                className="first-box"
              >
                Prosthetic limbs
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs4'); }}
                className="first-box"
              >
                Supernumerary robotic limbs
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Wearable and Collaborative Robotics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Second;
