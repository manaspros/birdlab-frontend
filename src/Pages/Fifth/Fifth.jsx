import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link is imported but not used. If navigation is intended, it should be used.
import "./Fifth.css";

const Fifth = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'fifth1':
        return (
          <div className="paper-box scrollable-content">
            <h3>Reinforcement Learning for Robotic Control: Teaching Robots to Learn and Adapt at IIT Jodhpur</h3>
            <p>At the Bio-inspired Robotics Lab within IIT Jodhpur's AI Department, **Reinforcement Learning (RL)** is a foundational pillar of our research. Unlike traditional programming that dictates every movement, RL empowers robots to learn optimal behaviors through trial and error, much like how animals learn. This is crucial for developing robots that can operate in dynamic, unstructured environments and exhibit complex, adaptive behaviors.</p>

            <p>Our work in applying RL to robotics focuses on:</p>
            <ul>
              <li><strong>Learning Complex Motor Skills:</strong> We use RL to train robots to master intricate tasks that are difficult to program manually, such as dynamic locomotion (e.g., bio-inspired gaits for quadruped robots), dexterous manipulation with our artificial muscle hands, or navigating challenging terrains. The robot receives 'rewards' for desired actions and 'penalties' for undesirable ones, gradually refining its control policies.</li>
              <li><strong>Sim-to-Real Transfer:</strong> A major challenge in RL is transferring policies learned in simulation to physical robots. Our lab investigates techniques like domain randomization, transfer learning, and robust policy learning to bridge this gap, ensuring that our AI models perform effectively in the real world.</li>
              <li><strong>Adaptive and Robust Control:</strong> RL enables robots to adapt to unforeseen changes in their environment or internal dynamics (e.g., component wear). This adaptability is vital for long-term robot operation and resilience. We explore methods to make RL policies robust to perturbations and uncertainties.</li>
              <li><strong>Human-Robot Interaction via RL:</strong> We are also researching how RL can facilitate more natural and intuitive human-robot collaboration. Robots can learn to anticipate human intentions and adjust their actions accordingly, making interactions safer and more efficient.</li>
            </ul>
            <p>By harnessing the power of Reinforcement Learning, we are developing a new generation of intelligent robots at IIT Jodhpur that can learn, adapt, and perform with unprecedented autonomy and flexibility, drawing inspiration from the learning processes observed in biological systems.</p>
          </div>
        );
      case 'fifth2':
        return (
          <div className="paper-box scrollable-content">
            <h3>Computer Vision for Robotic Perception: Enabling Robots to See and Understand at IIT Jodhpur</h3>
            <p>For robots to intelligently interact with the world, they must first understand it. At the Bio-inspired Robotics Lab in IIT Jodhpur's AI Department, **Computer Vision** is the 'eyes' of our robotic systems, allowing them to perceive, interpret, and make sense of their surroundings. Our research integrates state-of-the-art AI techniques to enable robots to operate effectively in complex, dynamic, and unstructured environments, mimicking aspects of biological vision systems.</p>

            <p>Our key research areas in computer vision for robotics include:</p>
            <ul>
              <li><strong>Object Detection and Recognition:</strong> Using deep learning models, particularly Convolutional Neural Networks (CNNs), we enable robots to accurately identify and classify objects in real-time, even under varying lighting conditions or occlusions. This is crucial for tasks like grasping, navigation, and environmental monitoring.</li>
              <li><strong>3D Scene Reconstruction and Understanding:</strong> We develop algorithms that use data from multiple cameras (stereo vision), LiDAR, or depth sensors to create detailed 3D maps of the robot's environment. This allows robots to understand spatial relationships, navigate obstacles, and plan complex movements in three dimensions.</li>
              <li><strong>Semantic Segmentation and Instance Segmentation:</strong> Going beyond simple object detection, our research delves into techniques that allow robots to understand the context and purpose of different regions in an image (semantic segmentation) and differentiate between individual instances of objects (instance segmentation). This enhances intelligent decision-making, such as identifying traversable areas or specific items to interact with.</li>
              <li><strong>Vision for Navigation and SLAM (Simultaneous Localization and Mapping):</strong> We employ visual data for robust robot localization and mapping. Our AI algorithms enable robots to build maps of unknown environments while simultaneously tracking their own position within those maps, a vital capability for autonomous mobile robots and drones.</li>
              <li><strong>Bio-inspired Vision Architectures:</strong> Drawing inspiration from biological visual systems, we explore novel neural network architectures and processing paradigms that enhance efficiency, robustness, and adaptability of robotic vision systems.</li>
            </ul>
            <p>By advancing the field of computer vision, IIT Jodhpur's Bio-inspired Robotics Lab is equipping robots with sophisticated perceptual capabilities, allowing them to navigate, interact, and operate intelligently in a wide array of real-world scenarios, from smart factories to challenging outdoor environments.</p>
          </div>
        );
      default:
        return (
          <>
            <p>Explore cutting-edge applications of Artificial Intelligence in Robotics at the Bio-inspired Robotics Lab, AI Department, IIT Jodhpur:</p>
            <div className="first-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fifth1'); }}
                className="first-box"
              >
                Reinforcement Learning for Robotic Control
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fifth2'); }}
                className="first-box"
              >
                Computer Vision for Robotic Perception
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