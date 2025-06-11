import React, { useState } from "react";
import { Link } from "react-router-dom"; // Still imported, but not used for navigation in this version
import "./Fifth.css"; // Assuming you have some basic styling here

const Fifth = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'fifth1':
        return (
          <div className="paper-box">
            <h3>Topic 1: Robot Navigation and Mapping</h3>
            <p>
              Robot navigation and mapping are fundamental challenges in robotics,
              allowing autonomous systems to understand their environment and move
              effectively. Applied AI plays a crucial role in enhancing these capabilities,
              making robots more intelligent and adaptable.
            </p>

            <h4>Simultaneous Localization and Mapping (SLAM)</h4>
            <p>
              SLAM is a computational problem of constructing or updating a map
              of an unknown environment while simultaneously keeping track of an
              agent's location within it. AI algorithms, particularly those
              involving probabilistic methods and neural networks, are used to:
            </p>
            <ul>
              <li><strong>Perception:</strong> Processing sensor data (Lidar, cameras, sonar)
                to identify landmarks and features. Techniques like Convolutional Neural Networks (CNNs)
                can be used for object recognition and semantic mapping.</li>
              <li><strong>Data Association:</strong> Matching current sensor readings with
                previously observed features or map elements.</li>
              <li><strong>State Estimation:</strong> Using Kalman Filters, Particle Filters (Monte Carlo Localization),
                or graph-based optimization (Pose Graph SLAM) to estimate the robot's pose
                (position and orientation) and the map concurrently. Deep learning can enhance
                feature extraction and loop closure detection.</li>
            </ul>

            <h4>Path Planning and Obstacle Avoidance</h4>
            <p>
              Once a map is available and the robot's location is known, AI algorithms
              are employed for efficient and safe navigation:
            </p>
            <ul>
              <li><strong>Global Path Planning:</strong> Algorithms like A* search, Dijkstra's algorithm,
                and Rapidly-exploring Random Trees (RRT/RRT*) find optimal or near-optimal
                paths from a start to a goal location on the map.</li>
              <li><strong>Local Path Planning/Obstacle Avoidance:</strong> Reactive methods like
                Dynamic Window Approach (DWA), Artificial Potential Fields, or Reinforcement Learning (RL)
                enable robots to avoid unexpected obstacles in real-time. RL agents can learn
                complex collision avoidance strategies through trial and error in simulated environments.</li>
              <li><strong>Motion Control:</strong> AI can optimize the control signals sent to robot actuators
                to follow the planned path accurately, considering dynamic constraints and uncertainties.</li>
            </ul>
            <p>
              **Future Outlook:** The integration of deep reinforcement learning with SLAM and path planning
              promises more robust and adaptive autonomous navigation in increasingly complex and dynamic
              environments.
            </p>
            <button onClick={() => setSelectedTopic(null)} className="back-button">Back to Topics</button>
          </div>
        );
      case 'fifth2':
        return (
          <div className="paper-box">
            <h3>Topic 2: Human-Robot Interaction (HRI) and Learning</h3>
            <p>
              Human-Robot Interaction (HRI) is a multidisciplinary field concerned
              with the design of interactions between humans and robots. Applied AI
              is pivotal in making these interactions natural, intuitive, and effective,
              enabling robots to understand, learn from, and assist humans.
            </p>

            <h4>Natural Language Processing (NLP) for Communication</h4>
            <p>
              AI-powered NLP allows robots to understand spoken or written commands
              and generate natural language responses:
            </p>
            <ul>
              <li><strong>Speech Recognition:</strong> Converting human speech into text for
                robot processing (e.g., using deep neural networks like Recurrent Neural Networks - RNNs, Transformers).</li>
              <li><strong>Natural Language Understanding (NLU):</strong> Interpreting the meaning and
                intent behind human utterances, handling ambiguities, and extracting key information.</li>
              <li><strong>Natural Language Generation (NLG):</strong> Crafting coherent and contextually
                appropriate text or speech responses for the robot.</li>
              <li><strong>Dialogue Management:</strong> Managing the flow of conversation, tracking
                dialogue state, and deciding on appropriate actions or responses.</li>
            </ul>

            <h4>Computer Vision for Understanding Human Cues</h4>
            <p>
              Robots equipped with AI-driven computer vision can perceive and interpret
              human actions, emotions, and intentions:
            </p>
            <ul>
              <li><strong>Gesture Recognition:</strong> Identifying human hand gestures, body posture,
                and movements as commands or communicative signals.</li>
              <li><strong>Facial Expression Recognition:</strong> Understanding human emotional states
                to adapt robot behavior (e.g., empathy, providing comfort).</li>
              <li><strong>Gaze Tracking:</strong> Inferring human attention or interest by tracking
                eye movements.</li>
              <li><strong>Activity Recognition:</strong> Identifying complex human activities and
                interactions in the robot's environment.</li>
            </ul>

            <h4>Learning from Demonstration (LfD) and Reinforcement Learning</h4>
            <p>
              AI allows robots to learn new skills and behaviors directly from human input:
            </p>
            <ul>
              <li><strong>Imitation Learning (LfD):</strong> Robots learn by observing human
                demonstrations. This can involve mapping observed states to actions (e.g., using
                Behavioral Cloning with neural networks).</li>
              <li><strong>Shared Autonomy:</strong> Humans provide high-level goals, and robots
                use AI to execute the low-level actions. The robot can learn human preferences over time.</li>
              <li><strong>Reinforcement Learning (RL):</strong> Robots learn through trial and error
                in an environment, receiving rewards for desired behaviors. Humans can provide
                "rewards" or "punishments" (Human-in-the-Loop RL) to guide the learning process.</li>
            </ul>
            <p>
              **Ethical Considerations:** HRI also delves into the ethical implications of robots
              in society, privacy, bias in AI, and the development of trustworthy and transparent
              robot behaviors.
            </p>
            <button onClick={() => setSelectedTopic(null)} className="back-button">Back to Topics</button>
          </div>
        );
      default:
        return (
          <>
            <p>Select a topic to explore the fascinating world of Applied AI in Robotics:</p>
            <div className="first-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fifth1'); }}
                className="first-box"
              >
                Topic 1: Robot Navigation & Mapping
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('fifth2'); }}
                className="first-box"
              >
                Topic 2: Human-Robot Interaction & Learning
              </a>
            </div>

          </>
        );
    }
  };

  return (
    <div className="first-container">
      {/* The main title remains at the top */}
      <h1 className="first-title">Applied AI in Robotics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Fifth;