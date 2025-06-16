import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./People.css";

import birdLabLogo from "../assets/birdlablogo.png";
import iitjLogo from "../assets/iitj.png";
import bhivrajImg from "../assets/Bhivraj.png"; // Dr. Bhivraj Suthar's image
import souravImg from "../assets/Sourav.png";
import nishantImg from "../assets/Nishant.png";
import ankurImg from "../assets/Ankur.png";
import paragImg from "../assets/Parag.png";
import prbrataImg from "../assets/Prbrata.png";
import shubhamImg from "../assets/Shubham.png";
import mahipalImg from "../assets/Mahipal.png";
import vishalImg from "../assets/Vishal.png";
import arpitImg from "../assets/Arpit.png";


const People = () => {
  const navigate = useNavigate();
  const [researchOpen, setResearchOpen] = useState(false);

  // Team data from CSV
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Bhivraj Suthar",
      photo: bhivrajImg,
      role: "Assistant Professor, School of AI & Data Science",
      researchInterests: "Bio-inspired Robotics and Applied Artificial Intelligence",
      email: "bhivraj@iitj.ac.in",
      education: {
        phd: "Ph.D. - KOREATECH and KAIST, South Korea (2016-2020)",
        mtech: "M.Tech. - IIT Delhi (2012-2015)",
        btech: "B.E. - CTAE, Udaipur (2006-2010)"
      },
      isHighlight: true
    },
    {
      id: 2,
      name: "Dr. Sourav Sarkar",
      photo: souravImg,
      role: "Faculty",
      researchInterests: "Material Science, Soft Robotics",
      email: "souravsarkar@iitj.ac.in",
      education: {
        phd: "Ph.D. - KOREATECH, South Korea (2013-2017)",
        mtech: "MSc - University of Mysore (2009-2012)",
        btech: "BSc - University of Calcutta (2005-2009)"
      },
      isHighlight: true
    },
    {
      id: 3,
      name: "Nishant Pratap Singh",
      photo: nishantImg,
      role: "M.Tech Student (Robotics)",
      researchInterests: "Control of Bi-Manual task using Analytical Relative Jacobian",
      email: "m23irm009@iitj.ac.in",
      education: {
        mtech: "M.Tech (Robotics) - IIT Jodhpur (2023-2025)",
        btech: "B.Tech (Mechanical) - Zakir Hussain College of Engineering and Technology, AMU (2019-2023)"
      }
    },
    {
      id: 4,
      name: "Ankur",
      photo: ankurImg,
      role: "M.Tech Student (AR & VR)",
      researchInterests: "Teleoperation of Canadarm in Virtual Reality for Simulated Space-Center Operations and Autonomous Docking Tasks",
      email: "m24air001@iitj.ac.in",
      education: {
        mtech: "M.Tech (AR & VR) - IIT Jodhpur (2024-2026)",
        btech: "B.Tech (CSE) - Hindu College of Engineering, Sonipat (2019-2023)"
      }
    },
    {
      id: 5,
      name: "Parag Chourasia",
      photo: paragImg,
      role: "M.Tech Student (Robotics)",
      researchInterests: "Artificial Intelligence Driven Bionic Hand Design and Control",
      email: "m23irm010@iitj.ac.in",
      education: {
        mtech: "M.Tech (Robotics) - IIT Jodhpur (2023-2025)",
        btech: "B.E (Mechanical) - Swami Vivekanand Institute of Technology, Sagar (2012-2016)"
      }
    },
    {
      id: 6,
      name: "Priyabrata Saha",
      photo: prbrataImg,
      role: "M.Tech Student (Robotics and Mobility Systems)",
      researchInterests: "Vision Language Action Models to perform Mobile Manipulation Tasks",
      email: "m24irm004@iitj.ac.in",
      education: {
        mtech: "M.Tech (Robotics and Mobility Systems) - IIT Jodhpur (2024-2026)",
        btech: "B.Tech (Mechanical) - National Institute of Technology, Agartala (2018-2022)"
      }
    },
    {
      id: 7,
      name: "Shubham Raj",
      photo: shubhamImg,
      role: "M.Tech Student (AR & VR)",
      researchInterests: "Immersive Unity based VR Environment for Mars Rover Multitask Training",
      email: "m24air012@iitj.ac.in",
      education: {
        mtech: "M.Tech (AR & VR) - IIT Jodhpur (2024-2026)",
        btech: "B.Tech (IT) - MIT Muzaffarpur, Bihar (2019-2023)"
      }
    },
    {
      id: 8,
      name: "Mahipal Singh",
      photo: mahipalImg,
      role: "M.Tech Student (AR & VR)",
      researchInterests: "Virtual Reality-Based Training and Simulation for Lower Limb Exoskeleton Rehabilitation",
      email: "m24air005@iitj.ac.in",
      education: {
        mtech: "M.Tech (AR & VR) - IIT Jodhpur (2024-2026)",
        btech: "B.Tech (C.S.E.) - Rajasthan Technical University, Kota (2019-2023)"
      }
    },
    {
      id: 9,
      name: "Vishal Rathi",
      photo: vishalImg,
      role: "M.Tech Student (Robotics and Mobility Systems)",
      researchInterests: "Development of Walking and Flying Drone",
      email: "m24irm009@iitj.ac.in",
      education: {
        mtech: "M.Tech (Robotics and Mobility Systems) - IIT Jodhpur (2024-2026)",
        btech: "B.Tech (C.S.E.) - SSIPMT, Raipur (2019-2023)"
      }
    },
    {
      id: 10,
      name: "Arpit Kumar",
      photo: arpitImg,
      role: "M.Tech Student (AR & VR)",
      researchInterests: "Immersive VR-Based Training System for Upper Limb Amputation Recovery",
      email: "m24air002@iitj.ac.in",
      education: {
        mtech: "M.Tech (AR & VR) - IIT Jodhpur (2024-2026)",
        btech: "B.Tech (C.S.E) - Rajiv Gandhi Institute of Petroleum Technology, Jais, UP (2020-2024)"
      }
    }
  ];

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
          <h1 className="main-title">Meet Our Team</h1>

          <div className="people-grid scrollable-grid">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className={`person-card ${member.isHighlight ? 'highlight-card' : ''}`}
              >
                {member.photo && (
                  <img src={member.photo} alt={member.name} className="profile-photo" />
                )}
                <div className="person-text-container">
                  <h3>{member.name}</h3>
                  <p className="person-role">{member.role}</p>
                  <p className="person-qual">
                    <strong>Research:</strong> {member.researchInterests}
                  </p>
                  <p className="person-extra">
                    <strong>Email:</strong> {member.email}
                  </p>
                  <div className="person-education">
                    {member.education.phd && (
                      <p className="person-extra">{member.education.phd}</p>
                    )}
                    {member.education.mtech && (
                      <p className="person-extra">{member.education.mtech}</p>
                    )}
                    {member.education.btech && (
                      <p className="person-extra">{member.education.btech}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;