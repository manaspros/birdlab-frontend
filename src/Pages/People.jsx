import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./People.css";

import birdLabLogo from "../assets/birdlablogo.png";
import iitjLogo from "../assets/iitj.png";
import bhivrajImg from "../assets/Bhivraj.png"; // Dr. Bhivraj Suthar's image

const People = () => {
  const navigate = useNavigate();
  const [researchOpen, setResearchOpen] = useState(false);

  return (
    <div className="people-background">
      <div className="people-content">
        {/* Navigation Bar */}
        <div className="top-bar-container">
          <div className="top-logo birdlab-logo" onClick={() => navigate("/")}>
            <img src={birdLabLogo} alt="BirdLab" />
          </div>

          <div className="sections-container">
            <div className="section-box" onClick={() => navigate("/")}>Welcome</div>
            <div className="section-box active" onClick={() => navigate("/people")}>People</div>

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

          <div className="top-logo iitj-logo" onClick={() => navigate("/")}>
            <img src={iitjLogo} alt="IIT Jodhpur" />
          </div>
        </div>

        {/* Title and People Grid */}
        <div className="main-container">
          <h1 className="main-title">Meet Us</h1>

          <div className="people-grid scrollable-grid">
            {/* Faculty Profile */}
            <div className="person-card highlight-card">
              <img src={bhivrajImg} alt="Dr. Bhivraj Suthar" className="profile-photo" />
              <h3>Dr. Bhivraj Suthar</h3>
              <p className="person-role">Assistant Professor, School of AI & Data Science</p>
              <p className="person-qual">
                Affiliations:<br />
                Robotics & Mobility Systems,<br />
                MedTech IITJ & AIIMS Jodhpur
              </p>
            </div>

            {/* Student Profiles - No images */}
            <div className="person-card">
              <h3>Mahadevan K</h3>
              <p className="person-role">BTech Student</p>
              <p className="person-qual">Mechanical Engineering, IIT Jodhpur</p>
            </div>

            <div className="person-card">
              <h3>Mayuri Kumari</h3>
              <p className="person-role">BTech Student</p>
              <p className="person-qual">Mechanical Engineering, IIT Jodhpur</p>
            </div>

            <div className="person-card">
              <h3>Rishi Raj</h3>
              <p className="person-role">BTech Student</p>
              <p className="person-qual">Mechanical Engineering, IIT Jodhpur</p>
            </div>

            <div className="person-card">
              <h3>Prasangeet Kar</h3>
              <p className="person-role">BTech Student</p>
              <p className="person-qual">Electrical Engineering, IIT Jodhpur</p>
            </div>

            <div className="person-card">
              <h3>Bhavyadeep S</h3>
              <p className="person-role">BTech Student</p>
              <p className="person-qual">AI & Data Science, IIT Jodhpur</p>
            </div>

            <div className="person-card">
              <h3>Arman Gupta</h3>
              <p className="person-role">BTech Student</p>
              <p className="person-qual">AI & Data Science, IIT Jodhpur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
