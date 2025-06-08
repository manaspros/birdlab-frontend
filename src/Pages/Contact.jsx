
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-background">
      <div className="contact-content">
        <div className="top-bar-container">
          <div className="top-logo birdlab-logo" onClick={() => navigate("/")}>BirdLab</div>
          <div className="sections-container">
            <div className="section-box" onClick={() => navigate("/")}>Welcome</div>
            <div className="section-box" onClick={() => navigate("/people")}>People</div>
            <div className="section-box expandable">
              Research
              <span className="arrow down"></span>
              <div className="research-subsections">
                <div className="research-subsection" onClick={() => navigate("/first")}>Bio-inspired Mechanisms</div>
                <div className="research-subsection" onClick={() => navigate("/second")}>Wearable and Collaborative Robotics</div>
                <div className="research-subsection" onClick={() => navigate("/third")}>Reconfigurable and Growing Robotics</div>
                <div className="research-subsection" onClick={() => navigate("/fourth")}>Tele-Robotics and Haptics</div>
                <div className="research-subsection" onClick={() => navigate("/fifth")}>Applied AI in Robotics</div>
              </div>
            </div>
            <div className="section-box" onClick={() => navigate("/publications")}>Publications</div>
            <div className="section-box" onClick={() => navigate("/lectures")}>Lectures</div>
            <div className="section-box" onClick={() => navigate("/positions")}>Open Positions</div>
            <div className="section-box active" onClick={() => navigate("/contact")}>Contact</div>
          </div>
          <div className="top-logo iitj-logo" onClick={() => navigate("/")}>IITJ</div>
        </div>
        
        <div className="main-container">
          <h1 className="main-title">Contact Us</h1>
          <div className="contact-info">
            <div className="contact-card">
              <h3>Laboratory Address</h3>
              <p>BirdLab - Bio-inspired Robotics Laboratory</p>
              <p>Indian Institute of Technology Jodhpur</p>
              <p>NH 62, Surpura Bypass Road</p>
              <p>Karwar, Rajasthan 342037, India</p>
            </div>
            
            <div className="contact-card">
              <h3>Principal Investigator</h3>
              <p><strong>Dr. [Name]</strong></p>
              <p>Email: pi@birdlab.iitj.ac.in</p>
              <p>Phone: +91-xxx-xxx-xxxx</p>
              <p>Office: Room No. xxx, Academic Block</p>
            </div>
            
            <div className="contact-card">
              <h3>General Inquiries</h3>
              <p>Email: info@birdlab.iitj.ac.in</p>
              <p>Phone: +91-xxx-xxx-xxxx</p>
              <p>Lab Timing: 9:00 AM - 6:00 PM (Mon-Fri)</p>
            </div>
            
            <div className="contact-card">
              <h3>Collaboration & Partnerships</h3>
              <p>For research collaborations and industry partnerships</p>
              <p>Email: collaborate@birdlab.iitj.ac.in</p>
              <p>We welcome discussions on joint research projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
