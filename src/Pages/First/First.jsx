import React from "react";
import { Link } from "react-router-dom";
import "./First.css";

const First = () => {
  return (
    <div className="first-container">
      <h1 className="first-title">Bio-inspired Mechanisms</h1>
      <p className="">Select a topic to explore:</p>
      <div className="first-list">
        <Link to="/first/firs1" className="first-box">Bio-inspired Muscles-TSA</Link>
        <Link to="/first/firs2" className="first-box">Artificial Muscle-Based Robotic Finger</Link>
        <Link to="/first/firs3" className="first-box">Artificial Muscle-Based Robotic Hand</Link>
        <Link to="/first/firs4" className="first-box">Hawk Gripper</Link>
        <Link to="/first/firs5" className="first-box">Cat-Leap Parkour Rolling Mechanism</Link>
      </div>
    </div>
  );
};

export default First;
