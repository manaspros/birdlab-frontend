import React from "react";
import { Link } from "react-router-dom";
import "./Fourth.css"; // Updated CSS import

const Fourth = () => {
  return (
    <div className="fourth-container">
      <h1 className="fourth-title">Tele-Robotics and Haptics</h1>
      <p>Select a topic to explore:</p>
      <div className="fourth-list">
        <Link to="/fourth/fourth1" className="fourth-box">Master Device</Link>
        <Link to="/fourth/fourth2" className="fourth-box">Slave Device</Link>
        <Link to="/fourth/fourth3" className="fourth-box">Haptic Feedback</Link>
      </div>
    </div>
  );
};

export default Fourth;
