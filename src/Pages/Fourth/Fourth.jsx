import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link is imported but not used in the provided snippet. If navigation is intended, it should be used.
import "./Fourth.css";

const Fourth = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'fourth1':
        return (
          <div className="paper-box scrollable-content">
            <h3>Master Device: Intuitive Control in Tele-Robotics at IIT Jodhpur</h3>
            <p>At the Bio-inspired Robotics Lab within IIT Jodhpur's AI Department, the **Master Device** serves as the critical human interface in our tele-robotics systems. This device isn't just a controller; it's a sophisticated bridge that translates complex human movements and intentions into precise commands for a remote robot. Inspired by the natural dexterity and sensory capabilities of human hands, our master devices are designed for unparalleled intuitiveness and fidelity.</p>

            <p>Our research focuses on:</p>
            <ul>
              <li><strong>Ergonomic and Bio-inspired Design:</strong> We create master devices that naturally fit the human hand and mimic human joint kinematics, reducing operator fatigue and maximizing control precision. This often involves incorporating principles from human anatomy and motor control.</li>
              <li><strong>AI-Driven Intent Recognition:</strong> A key aspect is the integration of advanced **AI algorithms** that learn and predict the operator's intent from their movements, gestures, and even physiological signals. This allows for smoother, more natural control and compensates for human tremor or inconsistencies.</li>
              <li><strong>High-Fidelity Sensing:</strong> Master devices are equipped with an array of sensors to capture even the most subtle nuances of human movement, including position, force, and orientation. This data is fed into our AI control loops to ensure a seamless translation of human action to robotic execution.</li>
              <li><strong>Foundation for Haptic Feedback:</strong> While primarily focused on input, the master device is also the receiving end for **haptic feedback**, allowing the operator to "feel" the remote environment. This two-way communication loop is essential for realistic telepresence, discussed further in the Haptic Feedback section.</li>
            </ul>
            <p>Through our work on master devices, we aim to make tele-robotic operation as natural and intuitive as manipulating objects with one's own hands, pushing the boundaries of remote interaction for applications from deep-sea exploration to delicate surgical procedures.</p>
          </div>
        );
      case 'fourth2':
        return (
          <div className="paper-box scrollable-content">
            <h3>Slave Device: Remote Execution with Robotic Precision at IIT Jodhpur</h3>
            <p>In the tele-robotics systems developed at IIT Jodhpur's Bio-inspired Robotics Lab, the **Slave Device** is the remote robotic manipulator that executes the commands issued by the human operator via the master device. These robots are designed to operate in environments too dangerous, distant, or precise for direct human presence. Our research focuses on making these slave devices incredibly responsive, dexterous, and robust, often drawing inspiration from the adaptability of biological limbs.</p>

            <p>Key areas of innovation include:</p>
            <ul>
              <li><strong>Bio-inspired Dexterity and Compliance:</strong> We integrate advanced robotic architectures, often utilizing **bio-inspired actuators** (like artificial muscles) and compliant structures, to give the slave device human-like dexterity and the ability to safely interact with complex or delicate objects without causing damage.</li>
              <li><strong>AI-Enhanced Robustness and Autonomy:</strong> While primarily tele-operated, our slave devices feature **AI capabilities** for enhanced robustness and task autonomy. This includes AI for real-time obstacle avoidance, intelligent grasp planning, and even limited autonomous task execution when human intervention isn't immediately required or feasible.</li>
              <li><strong>Environmental Perception:</strong> Slave devices are equipped with sophisticated sensors (cameras, force sensors, proximity sensors) to perceive their remote environment. **Computer vision** and **sensor fusion algorithms** process this data, which is then transmitted back to the master device to inform the operator and to the onboard AI for local decision-making.</li>
              <li><strong>Scalability and Application Versatility:</strong> Our research explores slave devices ranging from miniature manipulators for microsurgery to large-scale arms for hazardous material handling or space exploration, demonstrating the versatility and scalability of our tele-robotics framework.</li>
            </ul>
            <p>By combining advanced mechanical design with cutting-edge AI, our slave devices bridge the gap between human control and remote execution, enabling humans to extend their reach and influence into challenging and critical domains.</p>
          </div>
        );
      case 'fourth3':
        return (
          <div className="paper-box scrollable-content">
            <h3>Haptic Feedback: Bringing the Sense of Touch to Tele-Robotics at IIT Jodhpur</h3>
            <p>At the Bio-inspired Robotics Lab in the AI Department at IIT Jodhpur, **Haptic Feedback** is the cornerstone of truly immersive and effective tele-robotics. It's the technology that allows the human operator to "feel" the remote environment through the master device, transmitting sensations like force, texture, stiffness, and vibration. This tactile connection is crucial for performing delicate manipulation tasks, avoiding damage, and enhancing the operator's sense of presence in the remote workspace.</p>

            <p>Our research in haptic feedback encompasses:</p>
            <ul>
              <li><strong>Bio-mimetic Sensory Transduction:</strong> We are inspired by how the human nervous system processes tactile information. Our work involves designing haptic actuators and algorithms that can accurately render complex sensory data from the slave device into meaningful tactile sensations for the operator, making the interaction feel natural and intuitive.</li>
              <li><strong>AI for Haptic Rendering and Optimization:</strong> **Artificial intelligence** plays a pivotal role in refining the haptic experience. AI algorithms analyze sensor data from the slave device (e.g., contact forces, vibrations during tool use) and generate precise haptic signals for the master device. This allows for adaptive haptic rendering, where the feedback can be tuned based on the task, environment, or operator's preferences, enhancing clarity and reducing cognitive load.</li>
              <li><strong>Force, Tactile, and Thermal Feedback:</strong> We explore various modalities of haptic feedback beyond just force. This includes micro-vibration feedback for texture perception, pressure feedback for grasp stability, and even thermal feedback to convey temperature information from the remote environment.</li>
              <li><strong>Applications in Remote Surgery and Complex Assembly:</strong> High-fidelity haptic feedback is particularly vital in applications requiring extreme precision, such as remote surgery, where surgeons need to "feel" tissue resistance, or in delicate assembly tasks where tactile cues prevent damage to components.</li>
            </ul>
            <p>By integrating advanced haptic feedback with intelligent control, IIT Jodhpur is enabling operators to not just see and move, but truly interact and feel the remote world, thereby expanding the capabilities and applications of tele-robotics across numerous domains.</p>
          </div>
        );
      default:
        return (
          <>
            <p>Select a topic to explore the fascinating intersection of human control and remote robotic action at the Bio-inspired Robotics Lab, AI Department, IIT Jodhpur:</p>
            <div className="first-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fourth1'); }}
                className="first-box"
              >
                Master Device
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fourth2'); }}
                className="first-box"
              >
                Slave Device
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fourth3'); }}
                className="first-box"
              >
                Haptic Feedback
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Tele-Robotics and Haptics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Fourth;