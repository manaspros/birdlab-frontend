import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Third.css"; // Assuming you have a Third.css for styling

const Third = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'third1':
        return (
          <div className="paper-box">
            <h3>Foldable Supernumerary Robotic Arms</h3>
            <p>
              Foldable Supernumerary Robotic Arms (FSRAs) are a cutting-edge concept in human-robot interaction, designed to provide users with additional, functional limbs that can be compactly stored or folded when not in use. Unlike traditional robotic arms that are fixed, FSRAs offer unparalleled portability and adaptability, extending human capabilities on demand.
            </p>
            <p>
              These innovative arms typically employ advanced lightweight materials, intricate joint designs, and sophisticated control systems to achieve their foldable nature. When deployed, they can perform tasks like holding tools, stabilizing objects, or manipulating items in hard-to-reach places, effectively acting as extra hands for the operator.
            </p>
            <h4>Key Features and Applications:</h4>
            <p>
              <ul>
                <li>
                  Enhanced Dexterity: Provides additional manipulation points, allowing for complex multi-tasking that would be difficult or impossible with just two human arms.
                </li>
                <li>
                  Portability: Their foldable design means they can be easily transported and deployed in various environments, from industrial settings to disaster zones.
                </li>
                <li>
                  Assistance in Confined Spaces: Can reach and operate in areas too small or dangerous for a human, or where an extra point of contact is needed.
                </li>
                <li>
                  Rehabilitation & Augmentation: Potential for aiding individuals with disabilities by offering supportive or assistive manipulation, or for augmenting the capabilities of skilled workers.
                </li>
              </ul>
            </p>
            <p>
              The development of FSRAs represents a significant step towards more versatile and practical human-robot collaboration, promising new frontiers in manufacturing, service industries, and personal assistance.
            </p>
          </div>
        );
      case 'third2':
        return (
          <div className="paper-box">
            <h3>Extendable Drone Arm</h3>
            <p>
              An Extendable Drone Arm refers to a robotic appendage integrated into an Unmanned Aerial Vehicle (UAV), commonly known as a drone, that can extend and retract. This capability transforms drones from mere aerial observation platforms into versatile, interactive robotic tools capable of physical engagement.
            </p>
            <p>
              These arms are equipped with mechanisms (like telescoping segments or articulated joints) that allow them to reach out and perform tasks such as grasping, dropping, or manipulating objects. The integration requires precise control systems that compensate for the arm's movement and weight distribution, maintaining the drone's stability during operation.
            </p>
            <h4>Uses and Advantages:</h4>
            <p>
              <ul>
                <li>
                  Inspection and Maintenance: Drones with extendable arms can perform close-up inspections of structures (e.g., bridges, wind turbines) and even minor repairs without needing human ascent.
                </li>
                <li>
                  Delivery and Retrieval: Capable of picking up and dropping off packages or samples in challenging or hazardous environments.
                </li>
                <li>
                  Hazardous Environments: Ideal for bomb disposal, handling toxic materials, or assisting in search and rescue operations where human presence is risky.
                </li>
                <li>
                  Agriculture and Forestry: Used for targeted spraying, sample collection, or trimming in difficult-to-access areas.
                </li>
              </ul>
            </p>
            <p>
              Extendable drone arms are revolutionizing aerial robotics, enabling new applications across various sectors and reducing risks associated with dangerous or inaccessible tasks.
            </p>
          </div>
        );
      case 'third3':
        return (
          <div className="paper-box">
            <h3>Extendable Space Arm</h3>
            <p>
              An Extendable Space Arm is a specialized robotic manipulator designed for operations in the vacuum and microgravity of space. These arms are crucial components of space infrastructure, providing the capability to perform tasks externally on spacecraft, space stations, and even future lunar or Martian bases.
            </p>
            <p>
              Known for their robust design and extreme precision, space arms like the iconic **Canadarm2** on the International Space Station (ISS) can extend significantly to capture visiting vehicles, move equipment, perform repairs, or assist astronauts during spacewalks. They are built to withstand harsh space environments, including extreme temperature fluctuations, radiation, and micrometeoroid impacts.
            </p>
            <h4>Critical Roles in Space Exploration:</h4>
            <p>
              <ul>
                <li>
                  Module Assembly & Maintenance: Essential for assembling large structures in space, such as segments of the ISS, and for routine maintenance and repair of external components.
                </li>
                <li>
                  Satellite Servicing: Can grapple satellites for refueling, repair, or de-orbiting, extending the lifespan of valuable space assets.
                </li>
                <li>
                  Cargo Handling: Used to unload cargo from resupply vehicles and move it to different parts of a space station or spacecraft.
                </li>
                <li>
                  Astronaut Support: Provide mobile platforms for astronauts during spacewalks, enhancing their safety and efficiency.
                </li>
                <li>
                  Planetary Exploration: Future versions will be vital for constructing habitats, deploying scientific instruments, and collecting samples on other celestial bodies.
                </li>
              </ul>
            </p>
            <p>
              Extendable space arms are indispensable tools that enable complex operations beyond Earth, paving the way for more ambitious human and robotic missions into the cosmos.
            </p>
          </div>
        );
      default:
        return (
          <>
            <p>Select a topic to explore:</p>
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