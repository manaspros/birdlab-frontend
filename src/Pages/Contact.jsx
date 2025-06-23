
import React from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-content">
        <Navbar />
        
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
