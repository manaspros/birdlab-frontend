import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Fourth.css"; // Assuming you have a Fourth.css for styling

const Fourth = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'fourth1':
        return (
          <div className="paper-box">
            <h3>Master Device</h3>
            <p>
              In the realm of tele-robotics and remote control, the **Master Device** (also known as the master controller or input device) is the primary interface used by a human operator. It acts as the command center, translating the operator's physical movements, gestures, or intentions into actionable commands for a remote robot or system.
            </p>
            <p>
              Master devices often include joysticks, haptic gloves, specialized exoskeletons, or intricate control stations that mimic the kinematics of the slave robot. Their design focuses on intuitive control and, crucially, the ability to receive feedback from the slave device to provide a sense of presence or "telepresence" to the operator.
            </p>
            <h4>Key Characteristics and Role:</h4>
            <p>
              <ul>
                <li>
                  Input Generation: Captures human inputs (position, force, velocity) and transmits them to the slave device.
                </li>
                <li>
                  Control Fidelity: Aims for high precision and responsiveness to ensure that the slave robot accurately mirrors the operator's commands.
                </li>
                <li>
                  Feedback Integration: Often incorporates haptic feedback mechanisms to transmit sensory information (like force, texture, or vibration) from the slave's environment back to the operator.
                </li>
                <li>
                  Ergonomics: Designed for comfortable and prolonged use, reducing operator fatigue during complex remote operations.
                </li>
              </ul>
            </p>
            <p>
              The effectiveness of a tele-robotic system heavily relies on the master device's ability to seamlessly bridge the gap between human intention and robotic action, often across significant distances or in hazardous environments.
            </p>
          </div>
        );
      case 'fourth2':
        return (
          <div className="paper-box">
            <h3>Slave Device</h3>
            <p>
              In a tele-robotic system, the **Slave Device** (also known as the slave robot or remote manipulator) is the component that performs the actual physical tasks in a remote or hazardous environment. It is the executor, receiving commands from the master device and carrying them out in real-time, often replicating the movements of the human operator.
            </p>
            <p>
              Slave devices are typically designed for robust operation in challenging conditions, such as deep space, underwater, in contaminated areas, or within delicate surgical fields. They are equipped with various end-effectors (like grippers, tools, cameras, and sensors) to interact with their environment and collect data that can be sent back to the master device.
            </p>
            <h4>Characteristics and Functions:</h4>
            <p>
              <ul>
                <li>
                  Remote Operation: Executes tasks in environments inaccessible or dangerous for humans.
                </li>
                <li>
                  Precision and Dexterity: Capable of fine manipulation and complex movements, often mimicking human hand or arm dexterity.
                </li>
                <li>
                  Sensory Capabilities: Integrates sensors (e.g., force sensors, cameras, proximity sensors) to gather information from the work area, which is crucial for feedback to the operator.
                </li>
                <li>
                  Robustness: Built to withstand harsh environmental conditions specific to their application (e.g., radiation, extreme temperatures, pressure).
                </li>
              </ul>
            </p>
            <p>
              The interplay between the master and slave devices, especially when coupled with effective feedback, allows humans to extend their presence and capabilities into remote domains, enabling operations that would otherwise be impossible or too risky.
            </p>
          </div>
        );
      case 'fourth3':
        return (
          <div className="paper-box">
            <h3>Haptic Feedback</h3>
            <p>
              Haptic feedback is a crucial component of advanced human-machine interfaces, particularly in tele-robotics, virtual reality, and gaming. It refers to the technology that creates a sense of touch by applying forces, vibrations, or motions to the user. This tactile feedback allows operators to "feel" remote environments or virtual objects, significantly enhancing their sense of presence and control.
            </p>
            <p>
              In a tele-robotic system, haptic feedback typically works by transmitting forces or tactile sensations from the slave device's end-effector back to the master device. If the slave robot encounters resistance, grasps an object, or touches a surface, the master device generates corresponding forces or vibrations that the operator can feel, providing critical sensory information.
            </p>
            <h4>Types and Importance:</h4>
            <p>
              <ul>
                <li>
                  Force Feedback: Replicates the forces encountered by the slave robot, allowing the operator to feel resistance, weight, and collisions.
                </li>
                <li>
                  Tactile Feedback: Simulates textures, vibrations, and contact sensations, providing a more nuanced sense of touch.
                </li>
                <li>
                  Improved Control: Enables operators to perform delicate tasks (like surgery or intricate assembly) with greater precision and confidence, as they can "feel" their way through the operation.
                </li>
                <li>
                  Enhanced Immersion: In virtual reality, haptic feedback makes interactions with virtual objects feel more realistic and immersive.
                </li>
                <li>
                  Safety: Allows operators to perceive and react to unexpected obstacles or forces, improving safety in remote operations.
                </li>
              </ul>
            </p>
            <p>
              Haptic feedback closes the sensory loop in human-robot systems, transforming purely visual interactions into multi-sensory experiences that are more intuitive and effective, especially for tasks requiring fine motor control and environmental awareness.
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