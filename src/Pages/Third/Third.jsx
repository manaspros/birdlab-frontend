import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link is imported but not used in the provided snippet. If navigation is intended, it should be used.
import "./Third.css";

const Third = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'third1':
        return (
          <div className="paper-box scrollable-content">
            <h3>Foldable Supernumerary Robotic Arms: Compact Augmentation for Human-Robot Collaboration at IIT Jodhpur</h3>
            <p>At the Bio-inspired Robotics Lab in the AI Department at IIT Jodhpur, our research into **Foldable Supernumerary Robotic Arms** is driven by the vision of seamlessly integrating additional robotic capabilities with human operators, without hindering natural movement or demanding excessive space. Inspired by the highly efficient folding mechanisms found in nature, such as insect wings or plant leaves, these arms are designed to be compact and unobtrusive when not in use, yet rapidly deployable to provide extra manipulation capabilities.</p>

            <p>The core challenge lies in creating robust, lightweight, and highly articulated arms that can fold into a minimal volume. Our approach involves:</p>
            <ul>
              <li><strong>Bio-inspired Folding Mechanisms:</strong> We are exploring novel kinematic designs and material combinations that allow for high folding ratios, drawing lessons from how biological structures achieve incredible compactness. This includes investigating self-folding materials and origami-inspired robotics.</li>
              <li><strong>AI-Driven Kinematic Planning and Control:</strong> A significant focus is on developing advanced AI algorithms to manage the complex kinematics and dynamics of folding and unfolding, ensuring smooth, rapid deployment and retraction. Machine learning techniques enable the arms to learn optimal folding patterns and avoid collisions in dynamic environments.</li>
              <li><strong>Enhanced Human-Robot Collaboration:</strong> These arms serve as true collaborative partners. AI interprets human intent (via gesture, gaze, or neural signals) to intuitively control the supernumerary arm, allowing a single human to perform multi-handed tasks, stabilize objects, or operate tools simultaneously. This dramatically increases productivity and safety in industrial, medical, and even disaster response scenarios.</li>
              <li><strong>Lightweight Actuation and Compliant Joints:</strong> To maintain portability and user comfort, we are integrating lightweight, high-power-density actuators, including miniature versions of bio-inspired artificial muscles. Compliant joints ensure safer interaction with both the human operator and the environment.</li>
            </ul>
            <p>Our work aims to revolutionize human-robot interaction by providing unobtrusive yet powerful robotic assistance, opening new frontiers for augmented human capabilities in diverse fields, from complex assembly lines to surgical assistance, all guided by intelligent AI.</p>
          </div>
        );
      case 'third2':
        return (
          <div className="paper-box scrollable-content">
            <h3>Extendable Drone Arm: Aerial Manipulation for Complex Environments at IIT Jodhpur</h3>
            <p>The Bio-inspired Robotics Lab at IIT Jodhpur's AI Department is pushing the boundaries of aerial manipulation with the development of the **Extendable Drone Arm**. This innovative robotic limb is designed to augment the capabilities of Unmanned Aerial Vehicles (UAVs), allowing them to interact with environments that are otherwise inaccessible or hazardous to humans. Inspired by the reach and precision of natural extendable organs like a chameleon's tongue or an elephant's trunk, our drone arms combine flexibility with the ability to exert significant force when extended.</p>

            <p>Key research aspects include:</p>
            <ul>
              <li><strong>Dynamic Stability Control with AI:</strong> Extending an arm from a flying platform creates significant dynamic challenges. Our AI research focuses on real-time predictive control algorithms that compensate for shifts in the drone's center of gravity and aerodynamic disturbances. This ensures the drone maintains stable flight while the arm performs delicate or forceful manipulations.</li>
              <li><strong>Bio-inspired Extension Mechanisms:</strong> We are exploring lightweight, high-stiffness extension mechanisms, drawing inspiration from compliant structures found in nature. This includes telescopic, continuum, or soft robotic arm designs that can extend and retract quickly and efficiently.</li>
              <li><strong>Vision-Guided Manipulation and Object Interaction:</strong> Integrated computer vision systems, powered by deep learning, enable the drone arm to precisely identify, track, and interact with objects in dynamic and unstructured environments. This allows for tasks like precise sampling, sensor deployment, or light maintenance in elevated or confined spaces.</li>
              <li><strong>Applications in Inspection and Maintenance:</strong> The Extendable Drone Arm is being developed for critical applications such as infrastructure inspection (bridges, wind turbines), environmental monitoring (collecting samples from high-altitude locations), search and rescue (delivering supplies or placing sensors), and even precision agriculture.</li>
            </ul>
            <p>Our goal is to create autonomous aerial manipulators that combine the mobility of drones with the dexterity of robotic arms, enabling a new generation of smart inspection, maintenance, and interaction capabilities for complex real-world challenges.</p>
          </div>
        );
      case 'third3':
        return (
          <div className="paper-box scrollable-content">
            <h3>Extendable Space Arm: Unlocking New Frontiers in Orbital Robotics at IIT Jodhpur</h3>
            <p>The vast and unforgiving environment of space presents unique challenges for robotic manipulation. At the Bio-inspired Robotics Lab in the AI Department at IIT Jodhpur, we are contributing to the future of orbital mechanics with our research into **Extendable Space Arms**. These sophisticated robotic limbs are designed to perform complex tasks in zero-gravity and vacuum conditions, such as satellite servicing, debris removal, in-space assembly, and asteroid exploration.</p>

            <p>Drawing inspiration from robust, resilient biological structures adapted to extreme environments, our research addresses the critical demands of space robotics:</p>
            <ul>
              <li><strong>Extreme Environment Resilience:</strong> We focus on materials and designs that can withstand extreme temperature fluctuations, radiation, and micro-meteoroid impacts. This includes exploring self-healing materials and mechanisms that can operate reliably for extended periods in space.</li>
              <li><strong>Modular and Reconfigurable Architectures:</strong> Our designs prioritize modularity, allowing for flexible configurations and easy repair or upgrade in orbit. AI-driven reconfigurability enables the arm to adapt its length, stiffness, and dexterity for a wide range of tasks, from gentle grasping to high-force maneuvering.</li>
              <li><strong>Autonomous Operations with AI:</strong> Given the communication delays and high stakes of space missions, AI is central to enabling highly autonomous operations. Our AI algorithms handle complex path planning, obstacle avoidance, and real-time anomaly detection, allowing the arm to execute intricate tasks with minimal human intervention. Reinforcement learning is used to optimize manipulation strategies in simulated space environments.</li>
              <li><strong>Precision Control in Zero-Gravity:</strong> The absence of gravity introduces unique dynamics. Our research includes developing advanced control systems that account for momentum transfer and ensure precise, stable manipulation, even when interacting with large or uncooperative objects.</li>
              <li><strong>Future Applications:</strong> These extendable arms are crucial for expanding human presence in space, facilitating the construction of orbital habitats, supporting deep-space exploration missions, and ensuring the sustainability of critical space infrastructure by enabling robotic repair and maintenance.</li>
            </ul>
            <p>Through our work on Extendable Space Arms, IIT Jodhpur is committed to pushing the boundaries of robotic capabilities in the ultimate frontier, making space more accessible and operational through intelligent, resilient, and reconfigurable robotic systems.</p>
          </div>
        );
      default:
        return (
          <>
            <p>Select a topic to explore the innovative world of reconfigurable and growing robotics at the Bio-inspired Robotics Lab, AI Department, IIT Jodhpur:</p>
            <div className="first-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('third1'); }}
                className="first-box"
              >
                Foldable Supernumerary Robotic Arms
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('third2'); }}
                className="first-box"
              >
                Extendable Drone Arm
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('third3'); }}
                className="first-box"
              >
                Extendable Space Arm
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Reconfigurable and Growing Robotics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Third;