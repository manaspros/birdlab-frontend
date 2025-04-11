import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Fifth.css";

const Fifth = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'fifth1':
        return (
          <div className="paper-box">
            <h3>Topic 1</h3>
            <p>This section will contain information about Topic 1.</p>
            {/* Add more content here */}
          </div>
        );
      case 'fifth2':
        return (
          <div className="paper-box">
            <h3>Topic 2</h3>
            <p>This section will contain information about Topic 2.</p>
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
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fifth1'); }}
                className="first-box"
              >
                Topic 1
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fifth2'); }}
                className="first-box"
              >
                Topic 2
              </a>
            </div>
            <div className="paper-box" style={{ backgroundColor: 'rgba(248, 218, 225, 0.7)' }}> {/* Added paper-box and inline style */}
              <h1>Applied AI in Robotics</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                vitae rem, itaque debitis adipisci architecto consequuntur cum ab
                tempore laudantium dicta earum consequatur placeat aut, quis a
                quia beatae. Illo!
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Applied AI in Robotics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Fifth;
