import React, { useState } from "react";
import "./Second.css";

const Second = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'secs1':
        return (
          <div className="paper-box">
            <h3>Exoskeletons: Augmenting Human Capabilities with AI</h3>
            <p>At the Birdlab, we explore the cutting edge of robotics, and **exoskeletons** stand as a prime example of how artificial intelligence and advanced mechanics are revolutionizing human-robot interaction. These wearable robotic systems, designed to be worn by humans, are much more than simple machines; they are sophisticated extensions of our own bodies, offering unparalleled opportunities for assistance, rehabilitation, and enhancement.</p>

            <h4>What are Exoskeletons?</h4>
            <p>Exoskeletons are external frameworks that support and enhance a user's physical capabilities. They can range from passive devices that redistribute weight and reduce strain to highly advanced powered suits with integrated sensors, motors, and sophisticated control systems. The ultimate goal is to create a seamless synergy between human and machine, enabling tasks that would otherwise be impossible or highly fatiguing.</p>

            <h4>The Role of AI in Exoskeletons:</h4>
            <p>The true potential of exoskeletons is unlocked through the profound integration of **Artificial Intelligence**. Our research at Birdlab focuses on developing intelligent, AI-driven control algorithms that enable exoskeletons to:</p>
            <ul>
              <li><strong>Understand User Intent:</strong> AI algorithms analyze real-time data from various sensors (e.g., electromyography (EMG), inertial measurement units (IMUs), force sensors) to precisely predict and interpret a user's movements and intentions. This proactive understanding allows the exoskeleton to provide assistance exactly when and where it's needed, making the interaction intuitive and natural.</li>
              <li><strong>Adaptive Assistance:</strong> Unlike rigid, pre-programmed movements, AI empowers exoskeletons to adapt dynamically to changing environments, varying user fatigue levels, and subtle variations in gait or task requirements. Machine learning models continuously refine their control strategies based on ongoing user feedback and performance data, ensuring optimal support.</li>
              <li><strong>Personalized Rehabilitation:</strong> For crucial rehabilitation applications, AI plays a pivotal role in tailoring therapy to individual patient needs. Exoskeletons can dynamically adjust resistance, assistance levels, and provide targeted support to promote muscle re-education and accelerate recovery, leading to more effective outcomes.</li>
              <li><strong>Human-in-the-Loop Optimization:</strong> We emphasize human-in-the-loop control, where the AI constantly learns from and adapts to the human operator's unique biomechanics and preferences. This continuous feedback loop optimizes the overall system's efficiency, comfort, and safety, fostering a truly collaborative experience.</li>
            </ul>

            <h4>Wearable Robotics: Exoskeletons for Enhanced Human Performance</h4>
            <p>The "wearable" aspect of exoskeletons is absolutely fundamental to their design and utility. These devices are intimately connected to the human body, demanding meticulous design for maximum comfort, unwavering safety, and seamless functionality. Our work in wearable exoskeletons at Birdlab meticulously explores:</p>
            <ul>
              <li><strong>Lightweight and Compact Designs:</strong> Developing exoskeletons that are minimally intrusive and can be worn for extended periods without inducing discomfort or fatigue. This often necessitates innovative approaches in material science and advanced actuation mechanisms.</li>
              <li><strong>Ergonomic Integration:</strong> Ensuring that the exoskeleton's mechanical structure aligns perfectly and naturally with human joints and limbs is paramount. This prevents injuries, minimizes unnatural movements, and maximizes the user's natural range of motion.</li>
              <li><strong>Sensor Fusion for Contextual Awareness:</strong> We focus on combining data from a diverse array of sensors to provide the exoskeleton with a comprehensive and nuanced understanding of the user's movements, their immediate surroundings, and the ongoing tasks. This contextual awareness enhances intelligent assistance.</li>
            </ul>

            <h4>Collaborative Robotics: Exoskeletons as Intelligent Co-workers</h4>
            <p>Exoskeletons extend beyond individual enhancement; they are also a fundamental cornerstone of **collaborative robotics**. In both industrial and assistive settings, exoskeletons enable humans and robots to work together more effectively and synergistically:</p>
            <ul>
              <li><strong>Industrial Augmentation:</strong> In demanding sectors like manufacturing, logistics, and construction, industrial exoskeletons empower workers to perform physically arduous tasks with significantly reduced strain and fatigue. Examples include assisting with lifting heavy objects, maintaining awkward postures for extended periods, or performing repetitive actions, thereby drastically improving worker safety, well-being, and overall productivity.</li>
              <li><strong>Shared Control and Human-Robot Collaboration:</strong> Exoskeletons facilitate a novel and highly effective form of human-robot collaboration. Here, the human operator provides the high-level intent and strategic decision-making, while the exoskeleton provides the necessary strength, precision, endurance, or stability. This symbiotic relationship allows for exceptionally efficient task execution, particularly in complex or hazardous environments.</li>
              <li><strong>Assistive and Medical Applications:</strong> Beyond industrial applications, collaborative exoskeletons are profoundly transforming the landscape of healthcare. They assist individuals with mobility impairments (e.g., due to stroke, spinal cord injury, or other neurological conditions) in regaining movement, performing daily activities, and enhancing their overall independence. They also aid therapists in delivering more effective and targeted rehabilitation, simultaneously reducing the physical burden on caregivers.</li>
            </ul>

            <h4>Our Research Focus at Birdlab:</h4>
            <p>At the Birdlab, our comprehensive research in exoskeletons spans a wide array of critical areas:</p>
            <ul>
              <li><strong>Novel Exoskeleton Designs:</strong> We continuously explore and innovate new mechanical architectures, lightweight materials, and advanced actuation systems for both upper and lower limb exoskeletons, pushing the boundaries of what's possible.</li>
              <li><strong>Advanced AI Control Strategies:</strong> Our team is dedicated to developing robust, adaptive, and highly intuitive AI algorithms, leveraging cutting-edge machine learning and deep learning techniques, to ensure seamless and natural human-exoskeleton interaction.</li>
              <li><strong>Human-Exoskeleton Biomechanics:</strong> We conduct rigorous studies on the physiological and biomechanical effects of exoskeleton use. This research is crucial for optimizing system performance, maximizing user comfort, and minimizing any potential discomfort or risk.</li>
              <li><strong>Application-Specific Exoskeletons:</strong> We specialize in tailoring exoskeleton solutions for a diverse range of applications. This includes developing specialized designs for industrial assistance, rehabilitation, military applications, and beyond, addressing the unique needs of each domain.</li>
            </ul>
            <p>Join us in exploring how exoskeletons, powered by cutting-edge AI, are fundamentally redefining the boundaries of human capability and ushering in a transformative new era of wearable and collaborative robotics.</p>
          </div>
        );
      case 'secs2':
        return (
          <div className="paper-box">
            <h3>Exosuits: The Future of Soft, Intelligent Wearable Robotics</h3>
            <p>Exosuits represent a fascinating evolution in wearable robotics, distinguishing themselves from traditional rigid exoskeletons. Unlike their bulkier counterparts, **exosuits** are typically soft, textile-based devices integrated with lightweight actuators and sensors. They are designed to be minimally restrictive, conforming closely to the wearer's body and providing more subtle, yet effective, assistance. This approach makes them ideal for prolonged use and applications requiring natural movement.</p>
            <p>At Birdlab, our cutting-edge research into exosuits focuses on:</p>
            <ul>
              <li><strong>Soft Robotics Integration:</strong> We are at the forefront of exploring flexible and compliant materials and actuation methods that move naturally with the human body. Our goal is to drastically reduce bulk and increase comfort, making exosuits feel like a second skin. We leverage advanced material science and AI-driven design optimization to achieve these compliant structures.</li>
              <li><strong>AI-Powered Assistance for Endurance and Repetitive Tasks:</strong> Our exosuits are being developed to provide targeted support for specific muscle groups, intelligently reducing fatigue during long periods of standing, walking, or repetitive motions. AI algorithms predict user fatigue and apply precise, subtle forces to augment natural movements in industrial and healthcare settings, ensuring sustained performance and injury prevention.</li>
              <li><strong>Biomimetic Control with Machine Learning:</strong> We are deeply invested in investigating AI algorithms that intricately mimic natural human muscle activation patterns. This allows exosuits to provide assistance in a highly intuitive and energy-efficient manner. Through machine learning, the exosuit learns the wearer's unique gait and movement signatures, providing assistance that feels completely seamless and natural.</li>
              <li><strong>Personalized Rehabilitation and Mobility Enhancement:</strong> Our designs extend to creating exosuits that can offer gentle yet effective support for individuals with mild mobility impairments. AI-driven feedback systems aid in gait correction, improve balance, and significantly enhance walking efficiency for users recovering from injuries or managing chronic conditions. The AI adapts to the individual's progress, ensuring personalized and effective rehabilitation.</li>
            </ul>
            <p>The discreet nature, exceptional comfort, and intelligent assistance of exosuits open new avenues for pervasive robotic assistance in daily life, enhancing human performance without hindering natural movement. Our work at Birdlab is paving the way for a future where robotic assistance is seamlessly integrated into everyday wear.</p>
          </div>
        );
      case 'secs3':
        return (
          <div className="paper-box">
            <h3>Prosthetic Limbs: Intelligent Extensions of the Human Body</h3>
            <p>Prosthetic limbs have undergone a remarkable transformation, moving beyond mere replacements to highly sophisticated robotic extensions controlled by the user's neurological signals. At Birdlab, our research in **prosthetic limbs** lies at the intersection of advanced robotics, neuroscience, and cutting-edge artificial intelligence, striving to restore not just function, but also sensation and natural control.</p>
            <p>Our key areas of focus include:</p>
            <ul>
              <li><strong>Advanced Brain-Computer Interfaces (BCIs) and Myoelectric Control:</strong> We are developing highly intuitive BCI systems that allow users to control prosthetic limbs directly with their thoughts or residual muscle signals (myoelectric control). Our AI algorithms interpret these complex neural and muscular patterns in real-time, translating them into precise robotic movements, aiming to restore a profound sense of natural command over the robotic appendage.</li>
              <li><strong>Integrated Sensory Feedback Systems:</strong> A crucial aspect of our research is investigating innovative ways to provide realistic tactile and proprioceptive feedback to the user. This allows them to "feel" what the prosthetic limb is touching, perceive textures, and understand its precise position in space. AI plays a vital role in processing sensory data from the prosthesis and generating meaningful haptic feedback, significantly enhancing dexterity, grip strength modulation, and overall integration with the user's body schema.</li>
              <li><strong>AI-Driven Adaptive Grasping and Manipulation:</strong> We design sophisticated AI algorithms that enable prosthetic hands and arms to intelligently adapt their grasp to a vast array of objects, materials, and textures. Using machine learning, the prosthesis can recognize object properties and adjust its grip force and configuration dynamically, mimicking the versatility and fine motor control of a natural limb for delicate or complex manipulation tasks.</li>
              <li><strong>Personalized Design and Customization through AI and Advanced Manufacturing:</strong> At Birdlab, we utilize advanced manufacturing techniques, including 3D printing, combined with AI-driven design tools, to create prosthetics that are perfectly tailored to an individual's unique anatomy, functional needs, and lifestyle. AI optimizes the limb's weight, balance, and aesthetics, ensuring maximum comfort and optimal performance for each user.</li>
            </ul>
            <p>Through our pioneering work, we aim to not only restore lost function but to empower individuals with prosthetic limbs to achieve unprecedented levels of dexterity, sensation, and seamless integration with their robotic extensions, ultimately improving their quality of life.</p>
          </div>
        );
      case 'secs4':
        return (
          <div className="paper-box">
            <h3>Supernumerary Robotic Limbs: Expanding Human Capabilities</h3>
            <p>Supernumerary robotic limbs represent one of the most futuristic and ambitious frontiers in human-robot collaboration. Unlike traditional assistive devices that replace or augment existing human capabilities, **supernumerary limbs** add entirely new robotic appendages to the human body, providing an extra set of arms or legs to enhance manipulation, locomotion, or stability, fundamentally expanding human operational capacity.</p>
            <p>At Birdlab, our exploration into supernumerary robotic limbs involves:</p>
            <ul>
              <li><strong>Advanced Human-Robot Co-ordination with AI:</strong> Developing sophisticated AI control systems is paramount to enabling seamless co-ordination between the human's natural limbs and the added robotic limbs. This requires a deep understanding of human motor control and the creation of highly intuitive interfaces. Our AI algorithms learn user intent and adapt the robotic limbs' movements to work in harmony with the human, minimizing cognitive load and maximizing fluid interaction.</li>
              <li><strong>AI-Driven Task Augmentation and Multi-Tasking:</strong> We are investigating how these extra limbs, controlled by intelligent AI, can be used to perform tasks simultaneously, hold objects, or provide stability while the human's natural limbs are engaged in other activities. This significantly expands human operational capacity, allowing for unprecedented multi-tasking and efficiency in complex scenarios. AI enables the prioritization and execution of parallel tasks.</li>
              <li><strong>Ergonomic Integration and Comfort with Smart Materials:</strong> Addressing the significant challenges of physically attaching and comfortably supporting these additional robotic structures on the human body without impeding natural movement or causing discomfort is a major focus. We are exploring smart materials and adaptive fitting mechanisms, guided by AI, to ensure ergonomic integration and long-term user comfort.</li>
              <li><strong>Ethical AI and Societal Implications:</strong> As with any transformative technology, we actively engage in thoughtful discussions and research regarding the broader ethical and societal implications of augmenting humans with additional robotic capabilities. Our approach emphasizes responsible technological advancement, considering questions of human identity, autonomy, and societal integration as these technologies become more prevalent.</li>
            </ul>
            <p>Supernumerary robotic limbs push the boundaries of human-robot integration, offering tantalizing possibilities for enhanced productivity, increased safety in hazardous environments, and completely new forms of human interaction with the physical world. Birdlab is at the forefront of this exciting domain, shaping the future of human augmentation responsibly.</p>
          </div>
        );
      default:
        return (
          <>
            <p className="">Select a topic to explore:</p>
            <div className="second-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs1'); }}
                className="second-box"
              >
                Exoskeletons
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs2'); }}
                className="second-box"
              >
                Exosuits
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs3'); }}
                className="second-box"
              >
                Prosthetic limbs
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs4'); }}
                className="second-box"
              >
                Supernumerary robotic limbs
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="second-container">
      <h1 className="second-title">Wearable and Collaborative Robotics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Second;