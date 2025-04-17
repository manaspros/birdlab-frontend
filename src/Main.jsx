import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const researchRef = useRef(null);

  return (
    <div className="main-container">
      <h1 className="main-title">Welcome to BirdLab</h1>

      <div className="sections-container">
        <div className="section-box" onClick={() => navigate("/people")}>People</div>

        <div
          className="section-box expandable"
          ref={researchRef}
        >
          Research
          <span className={`arrow down`}></span> {/* Arrow will always point down now */}
          <div className="research-subsections">
            <div className="research-subsection" onClick={() => navigate("/first")}>
              Bio-inspired Mechanisms
            </div>
            <div className="research-subsection" onClick={() => navigate("/second")}>
              Wearable and Collaborative Robotics
            </div>
            <div className="research-subsection" onClick={() => navigate("/third")}>
              Reconfigurable and Growing Robotics
            </div>
            <div className="research-subsection" onClick={() => navigate("/fourth")}>
              Tele-Robotics and Haptics
            </div>
            <div className="research-subsection" onClick={() => navigate("/fifth")}>
              Applied AI in Robotics
            </div>
          </div>
        </div>

        <div className="section-box" onClick={() => navigate("/publications")}>Publications</div>
        <div className="section-box" onClick={() => navigate("/lectures")}>Lectures</div>
        <div className="section-box" onClick={() => navigate("/positions")}>Open Positions</div>
        <div className="section-box" onClick={() => navigate("/contact")}>Contact</div>
      </div>
    </div>
  );
};

export default Main;