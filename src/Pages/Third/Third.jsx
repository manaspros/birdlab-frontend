import React from "react";
import { Link } from "react-router-dom";
import "./Third.css"; // Updated CSS import

const Third = () => {
  return (
    <div className="third-container">
      <h1 className="third-title">Reconfigurible and Growing Robotics</h1>
      <p>Select a topic to explore:</p>
      <div className="third-list">
        <Link to="/third/third1" className="third-box">Foldable Supernumerary Robotic Arms</Link>
        <Link to="/third/third2" className="third-box">Extendable Drone Arm</Link>
        <Link to="/third/third3" className="third-box">Extendable Space Arm</Link>
      </div>
    </div>
  );
};

export default Third;
