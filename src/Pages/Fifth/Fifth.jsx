import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Fifth.css";

const Fifth = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'fifth1':
        return (
          <div className="paper-box">
            <h3>Robot Learning and Adaptation</h3>
            <p>
              Robot Learning and Adaptation is a fundamental area in AI robotics where robots are endowed with the ability to acquire new skills, refine existing behaviors, and adjust to changing environments without explicit, hand-coded instructions. This field draws heavily from machine learning disciplines like **Reinforcement Learning**, **Imitation Learning**, and **Deep Learning**. Instead of being programmed for every possible scenario, learning robots can figure out optimal strategies through experience or by observing human demonstrations.
            </p>
            <p>
              For example, a robot using reinforcement learning might be given a reward signal for successfully completing a task (like picking up an object). Through trial and error, it explores different actions and learns which ones lead to higher rewards, eventually optimizing its movements. **Imitation learning**, conversely, involves a robot observing a human performing a task and then attempting to replicate that behavior, making it a powerful tool for quickly teaching complex skills.
            </p>
            <h4>Key Concepts and Benefits:</h4>
            <p>
              <ul>
                <li>
                  Autonomous Skill Acquisition: Robots can learn to perform complex manipulation, navigation, and interaction tasks independently.
                </li>
                <li>
                  Adaptability: Enables robots to adjust to variations in tasks, changes in their own hardware (e.g., wear and tear), or dynamic environments.
                </li>
                <li>
                  Reduced Programming Effort: Lessens the need for extensive manual programming, speeding up development and deployment.
                </li>
                <li>
                  Generalization: Allows robots to apply learned knowledge to novel situations that they haven't explicitly encountered before.
                </li>
                <li>
                  Continuous Improvement: Robots can continuously refine their performance over time as they gather more data and experience.
                </li>
              </ul>
            </p>
            <p>
              The advancement of robot learning is crucial for developing truly autonomous and intelligent robots capable of operating in unstructured, real-world settings, from manufacturing floors to homes and even disaster zones.
            </p>
          </div>
        );
      case 'fifth2':
        return (
          <div className="paper-box">
            <h3>Advanced Robot Perception</h3>
            <p>
              Advanced Robot Perception involves equipping robots with the ability to "understand" their surroundings using various sensors and AI algorithms. This is much more than just seeing; it's about interpreting sensory data to build a coherent, meaningful representation of the environment, including objects, their properties, and their spatial relationships. Critical for any autonomous robot, perception forms the basis for navigation, manipulation, and safe human-robot interaction.
            </p>
            <p>
              Modern robots utilize a suite of sensors, including cameras (2D and 3D), LiDAR, radar, and force sensors, to gather rich data. **Computer Vision** techniques, often powered by **Deep Learning** models (like Convolutional Neural Networks), are applied to this data for tasks such as object recognition, pose estimation, semantic segmentation (identifying different regions in an image), and tracking. This allows a robot to know not just that an object is present, but what it is, where it is, and if it's moving.
            </p>
            <h4>Essential Components and Applications:</h4>
            <p>
              <ul>
                <li>
                  Object Recognition & Detection: Identifying and locating specific objects (e.g., a cup, a tool, a person) within a scene.
                </li>
                <li>
                  3D Reconstruction & Mapping: Building detailed 3D models of environments, often using techniques like **SLAM (Simultaneous Localization and Mapping)** for navigation.
                </li>
                <li>
                  Scene Understanding: Interpreting the overall context of a scene, including understanding human activities and intentions.
                </li>
                <li>
                  Sensor Fusion: Combining data from multiple sensor types (e.g., cameras and LiDAR) to create a more robust and accurate perception of the environment.
                </li>
                <li>
                  Human-Robot Interaction Safety: Enabling robots to perceive human presence, gestures, and potential hazards, ensuring safe collaboration.
                </li>
              </ul>
            </p>
            <p>
              Without sophisticated perception, robots would be confined to highly structured environments. Advanced perception, driven by AI, is unlocking their potential to operate autonomously and intelligently in the complex, dynamic world we live in.
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
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fifth1'); }}
                className="first-box"
              >
                Robot Learning and Adaptation
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fifth2'); }}
                className="first-box"
              >
                Advanced Robot Perception
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Applied AI in Robotics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Fifth;