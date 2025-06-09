import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import birdlabLogo from "./assets/birdlablogo.png";
import iitjLogo from "./assets/iitj.png";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const [researchOpen, setResearchOpen] = useState(false);

  return (
    <div className="app-background" onClick={() => researchOpen && setResearchOpen(false)}>
      <div className="app-content" onClick={(e) => e.stopPropagation()}>
        <div className="top-bar-container">
          <div className="top-logo birdlab-logo">
            <img src={birdlabLogo} alt="BirdLab Logo" />
          </div>

          <div className="sections-container">
            <div className="section-box" onClick={() => navigate("/")}>Welcome</div>
            <div className="section-box" onClick={() => navigate("/people")}>People</div>
            
            <div
              className={`section-box expandable ${researchOpen ? "open" : ""}`}
              onClick={() => setResearchOpen(!researchOpen)}
              style={{ userSelect: "none" }}
            >
              Research
              <span className="arrow down"></span>
              {researchOpen && (
                <div className="research-subsections">
                  <div className="research-subsection" onClick={() => navigate("/first")}>Bio-inspired Mechanisms</div>
                  <div className="research-subsection" onClick={() => navigate("/second")}>Wearable and Collaborative Robotics</div>
                  <div className="research-subsection" onClick={() => navigate("/third")}>Reconfigurable and Growing Robotics</div>
                  <div className="research-subsection" onClick={() => navigate("/fourth")}>Tele-Robotics and Haptics</div>
                  <div className="research-subsection" onClick={() => navigate("/fifth")}>Applied AI in Robotics</div>
                </div>
              )}
            </div>

            <div className="section-box" onClick={() => navigate("/publications")}>Publications</div>
            <div className="section-box" onClick={() => navigate("/lectures")}>Lectures</div>
            <div className="section-box" onClick={() => navigate("/positions")}>Open Positions</div>
            <div className="section-box" onClick={() => navigate("/contact")}>Contact</div>
          </div>

          <div className="top-logo iitj-logo">
            <img src={iitjLogo} alt="IITJ Logo" />
          </div>
        </div>

        <div className="main-container">
          <h1 className="main-title">Welcome to BirdLab</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
