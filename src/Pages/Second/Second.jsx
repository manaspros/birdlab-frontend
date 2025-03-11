import React from "react";
import { Link } from "react-router-dom";
import "./Second.css";

const Second = () => {
  return (
    <div className="second-container">
      <h1 className="second-title">Wearable and Collaborative Robotics</h1>
      <p className="">Select a topic to explore:</p>
      <div className="second-list">
        <Link to="/second/secs1" className="second-box">Exoskeletons</Link>
        <Link to="/second/secs2" className="second-box">Exosuits</Link>
        <Link to="/second/secs3" className="second-box">Prosthetic limbs</Link>
        <Link to="/second/secs4" className="second-box">Supernumerary robotic limbs
        </Link>
      </div>
    </div>
  );
};

export default Second;
