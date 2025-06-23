
import React from "react";
import Navbar from "../components/Navbar";
import "./Lectures.css";

const Lectures = () => {
  return (
    <div className="lectures-background">
      <div className="lectures-content">
        <Navbar />
        
        <div className="main-container">
          <h1 className="main-title">Lectures & Talks</h1>
          <div className="lectures-list">
            <div className="lecture-item">
              <h3>Introduction to Bio-inspired Robotics</h3>
              <p><strong>Date:</strong> March 15, 2024</p>
              <p><strong>Venue:</strong> IITJ Main Auditorium</p>
              <p><strong>Speaker:</strong> Dr. Principal Investigator</p>
              <p>Overview of bio-inspired mechanisms in modern robotics...</p>
            </div>
            <div className="lecture-item">
              <h3>Wearable Robotics: Present and Future</h3>
              <p><strong>Date:</strong> February 28, 2024</p>
              <p><strong>Venue:</strong> Online Webinar</p>
              <p><strong>Speaker:</strong> Guest Expert</p>
              <p>Exploring the current state and future prospects of wearable robotics...</p>
            </div>
            <div className="lecture-item">
              <h3>AI in Robotics Applications</h3>
              <p><strong>Date:</strong> January 20, 2024</p>
              <p><strong>Venue:</strong> Research Hall</p>
              <p><strong>Speaker:</strong> Research Team</p>
              <p>Practical applications of artificial intelligence in robotics...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
