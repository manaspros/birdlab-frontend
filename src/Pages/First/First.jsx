import React, { useState } from 'react';
import "./First.css"; // Import CSS
import bioinspiresTSAImage from '../../assets/BioinspiresTSA.png';

const First = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'firs1':
        return (
          <div className="paper-box scrollable-content"> {/* Added scrollable-content class */}
            <h3>Bio-inspired Muscles-TSA</h3>
            <img
              src={bioinspiresTSAImage}
              alt="Bio-inspired TSA"
              style={{
                width: '300px', // Adjust size as needed
                height: 'auto',
                float: 'right',
                marginLeft: '20px'
              }}
            />
            <p><strong>Introduction:</strong> Bio-inspired Twisted String Actuator (TSA)
              In the field of robotics and automation, engineers and scientists are increasingly turning to nature for inspiration to design efficient, flexible, and lightweight systems. One such innovation is the Bio-inspired Twisted String Actuator (TSA) — a simple yet powerful actuation mechanism that mimics the contractile behavior of biological muscles. Inspired by the way muscles contract to generate motion, TSAs transform rotational input from a motor into linear displacement, enabling soft, smooth, and natural-looking movements.
            </p>
            <p style={{ marginTop: '20px' }}>
              The basic working principle of a TSA involves two or more flexible strings connected at one end to a rotating motor and at the other end to a load. When the motor rotates, the strings twist around each other, forming a helical structure. As the twisting continues, the overall length of the twisted section shortens, pulling the load closer and generating linear actuation. This simple mechanism can produce surprisingly high forces with minimal weight and energy consumption.
            </p>
            <p style={{ marginTop: '20px' }}>
              Twisted string actuators are especially attractive in bio-mimetic and wearable robotic applications, where space, weight, and natural movement are crucial. Traditional actuators like pneumatic cylinders or electric motors tend to be bulky and rigid, whereas TSAs offer lightweight, compliant, and low-cost solutions. These features make them highly suitable for use in prosthetic limbs, exoskeletons, robotic hands, and soft robots that interact closely with humans.

              Another advantage of TSAs lies in their high force-to-weight ratio. Due to the mechanical advantage gained during twisting, they can generate large tensile forces with relatively small motors. This makes them ideal for portable or body-mounted systems. Moreover, TSAs can be configured in various geometries and materials to suit specific application needs, further increasing their versatility.

              Despite their many advantages, TSAs also present certain challenges. Their motion is nonlinear, meaning that control systems must account for the relationship between motor rotation and string contraction. Additionally, string wear and fatigue can limit long-term performance, requiring periodic maintenance or material optimization. However, ongoing research continues to improve TSA designs through better modeling, advanced materials, and smart control strategies.
            </p>
            <p style={{ marginTop: '20px' }}>
              In summary, the Bio-inspired Twisted String Actuator represents a promising class of actuators that blend simplicity with powerful functionality. By mimicking the efficient mechanics of biological muscles, TSAs open new avenues for the development of responsive, lightweight, and adaptive robotic systems, making them a cornerstone technology in the advancement of bio-inspired engineering.
            </p>
          </div>
        );
      case 'firs2':
        return (
          <div className="paper-box scrollable-content">
            <h3>Artificial Muscle-Based Robotic Finger</h3>
            <p>Introduction: Artificial Muscle-Based Robotic Finger
              In the rapidly evolving field of robotics, the development of systems that closely replicate human movement and dexterity is a key area of research. One such advancement is the Artificial Muscle-Based Robotic Finger, designed to emulate the complex motion and force generation capabilities of a human finger. Unlike traditional robotic joints driven by rigid motors and gears, this innovative approach utilizes artificial muscles—typically made from materials or mechanisms like Twisted String Actuators (TSAs), pneumatic muscles (McKibben actuators), shape memory alloys (SMAs), or electroactive polymers (EAPs)—to produce biologically inspired, flexible movement.

              The design of a robotic finger powered by artificial muscles focuses on replicating the anatomy and biomechanics of human fingers, including multiple joints (metacarpophalangeal, proximal, and distal interphalangeal joints) and the tendons that allow for smooth, multi-directional motion. Artificial muscles are chosen for their lightweight, high force-to-weight ratio, and natural contraction behavior, much like human skeletal muscles. When activated, these artificial muscles contract or change shape, pulling on artificial tendons or linkages to bend and flex the robotic finger.

              This bio-inspired approach offers several key benefits. The robotic finger becomes safer for human interaction, more compliant, and capable of delicate, precise movements, making it ideal for use in prosthetic hands, assistive devices, surgical robots, and humanoid robots. Its soft and adaptive nature allows it to conform to various objects, improving grip quality and dexterity in tasks that require fine manipulation.

              Moreover, the integration of sensor feedback—such as force sensors, stretch sensors, or tactile sensors—can enable the robotic finger to perform intelligent tasks with adaptive control, similar to the way a human finger responds to different textures or weights. Advanced control strategies, such as PID, fuzzy logic, or neural networks, are often used to coordinate the muscle activations for smooth, realistic motion.

              However, challenges remain in developing artificial muscle-based robotic fingers. These include material fatigue, slow response time (in some actuators like SMAs), and complex control algorithms due to the nonlinear behavior of artificial muscles. Yet, ongoing research and material innovation continue to enhance performance, durability, and responsiveness.

              In conclusion, the Artificial Muscle-Based Robotic Finger is a remarkable step toward creating robotic systems that not only move like humans but also interact with the environment in a safe, responsive, and efficient manner. This bio-inspired design has the potential to revolutionize fields such as rehabilitation, human-robot interaction, and advanced prosthetics, bringing robotics closer to human-like capability.
            </p>
            {/* Add more content here */}
          </div>
        );
      case 'firs3':
        return (
          <div className="paper-box scrollable-content">
            <h3>Artificial Muscle-Based Robotic Hand</h3>
            <p>Introduction: Artificial Muscle-Based Robotic Hand
              As robotics continues to advance toward greater human-like functionality and adaptability, one of the most compelling innovations is the development of the Artificial Muscle-Based Robotic Hand. This cutting-edge technology is designed to replicate the dexterity, flexibility, and responsiveness of the human hand by using artificial muscles in place of traditional rigid motors and linkages. Inspired by biological systems, these actuators mimic the contraction and relaxation of natural muscles, enabling the robotic hand to perform complex tasks such as grasping, pinching, and manipulating objects with precision.

              Unlike conventional robotic hands driven by servomotors and gears, artificial muscle-based systems use actuators such as Twisted String Actuators (TSAs), pneumatic muscles (McKibben actuators), shape memory alloys (SMAs), or electroactive polymers (EAPs). These actuators contract or deform when activated, pulling on tendons or flexing joints, just as human muscles pull on bones. The result is a lightweight, compliant, and naturally moving robotic hand that can adapt to various shapes and forces.

              The primary advantage of this bio-inspired approach lies in its high force-to-weight ratio, softness, and adaptability, which are crucial for applications involving human interaction. Such hands are particularly useful in fields like prosthetics, rehabilitation, humanoid robotics, teleoperation, and medical assistance, where safety, comfort, and fine control are essential.

              In a typical design, each finger of the robotic hand includes multiple degrees of freedom, driven by individually controlled artificial muscles. The actuation system is often paired with sensors (such as pressure, strain, or tactile sensors) to provide real-time feedback, enabling adaptive gripping and refined control. This sensory feedback system allows the hand to adjust grip strength, recognize object shapes, and safely interact with delicate or irregular items.

              Despite their promise, artificial muscle-based robotic hands face several technical challenges. These include nonlinear behavior, limited lifespan of materials, response time delays (in SMAs and some soft actuators), and complex control algorithms needed for precise coordination of multiple actuators. However, ongoing advancements in smart materials, soft robotics, and AI-based control are steadily overcoming these limitations.

              In conclusion, the Artificial Muscle-Based Robotic Hand represents a significant step forward in creating robotic systems that combine human-like motion with intelligent adaptability. By leveraging principles of biomechanics and biomimetics, these systems not only enhance robotic functionality but also bring us closer to seamless integration of robots in daily human environments.
            </p>
            {/* Add more content here */}
          </div>
        );
      case 'firs4':
        return (
          <div className="paper-box scrollable-content">
            <h3>Hawk Gripper</h3>
            <p>Introduction: Hawk Gripper
              The Hawk Gripper is a specialized, bio-inspired robotic end-effector designed to mimic the powerful grasping and precision capabilities of a hawk’s talon. Taking inspiration from the natural world—particularly raptors like hawks and eagles—this type of robotic gripper emphasizes strong, adaptive, and high-speed gripping mechanisms suited for handling irregular, soft, or fragile objects. Its unique design makes it highly effective in applications such as aerial robotics, search and rescue, agriculture, and grasping in unstructured environments.

              Hawks are known for their ability to snatch prey mid-flight, with powerful talons that can exert high forces with fast reaction times. The Hawk Gripper replicates this functionality by using artificial tendons, underactuated linkages, or artificial muscles (such as Twisted String Actuators or pneumatic systems) to control the fingers. Each finger is often independently articulated and features curved, claw-like structures, enhancing both grip strength and object conformity.

              One of the key features of the Hawk Gripper is its adaptive grasping. Even with fewer actuators than fingers, the gripper can conform to various object geometries due to its underactuated design. This means that when the gripper closes around an object, the fingers automatically adjust their positions to ensure maximum contact and stability. Such adaptability is especially important in real-world scenarios where object shapes, sizes, and textures are unpredictable.

              Another hallmark of the Hawk Gripper is its lightweight and compact structure, which makes it ideal for integration with drone-based manipulation systems. When attached to an unmanned aerial vehicle (UAV), the Hawk Gripper allows for in-air object retrieval, package delivery, or wildlife handling without compromising flight stability.

              In addition to its mechanical advantages, many modern implementations of the Hawk Gripper integrate force and tactile sensors, enabling the system to detect slippage, object hardness, or contact points. Combined with smart control algorithms, this sensory feedback improves grasp stability and precision, even when dealing with delicate items like fruits or small tools.

              Despite its many strengths, challenges remain in fine-tuning the control system for dynamic environments, ensuring durability under repeated use, and improving the response time for real-time applications. However, with continuous developments in soft robotics, bio-mimetic design, and sensor integration, the Hawk Gripper stands as a promising innovation for the next generation of robotic manipulators.

              In conclusion, the Hawk Gripper exemplifies how nature-inspired engineering can lead to practical, high-performance robotic systems capable of handling complex tasks with efficiency, adaptability, and intelligence.</p>
            {/* Add more content here */}
          </div>
        );
      case 'firs5':
        return (
          <div className="paper-box scrollable-content">
            <h3>Cat-Leap Parkour Rolling Mechanism</h3>
            <p>Introduction: Cat-Leap Parkour Rolling Mechanism
              The Cat-Leap Parkour Rolling Mechanism is a biomechanically inspired motion strategy derived from human parkour movements—specifically the cat-leap (or cat grab) and subsequent parkour roll. This mechanism is studied and applied in fields like robotic locomotion, biomechanics, motion planning, and animation systems, where dynamic movement over obstacles is essential.

              A cat-leap is a classic parkour technique used to jump across a gap or toward a vertical structure, landing with the feet on a wall and hands gripping the top for stability. Following the leap, practitioners often transition into a precision drop or a forward roll to absorb impact and maintain momentum. This sequential movement of leaping, gripping, and rolling forms the basis of the cat-leap rolling mechanism, combining aerial trajectory control, grip mechanics, and impact dissipation.

              In robotic and simulation contexts, this mechanism is implemented to enhance agility, stability, and energy efficiency in machines navigating complex terrains. Inspired by both feline agility and human parkour techniques, the rolling mechanism allows a robot or digital agent to:

              Leap across obstacles with controlled trajectory and orientation

              Grip vertical or inclined surfaces upon landing

              Transition smoothly into a roll that dissipates kinetic energy, reducing the impact on joints or structural components

              From a mechanical design perspective, a Cat-Leap Rolling Mechanism may involve:

              Flexible limb structures or compliant actuators that simulate human/joint flexibility

              Sensors to detect landing impact and orientation

              Control algorithms that time the transition from leap to grip to roll

              Bio-inspired actuators (e.g., artificial muscles or TSAs) that replicate joint dynamics

              In animation or virtual simulations (like video games or robotics training environments), the mechanism is often used to enhance realism and functional motion planning, allowing avatars or robots to traverse urban environments in a human-like or animal-like way.

              Challenges in implementing this mechanism include:

              Timing and coordination of multiple phases (leap, grip, roll)

              Ensuring safety and stability during dynamic movement

              Handling variability in terrain or obstacles

              Managing energy dissipation effectively during the roll phase

              In summary, the Cat-Leap Parkour Rolling Mechanism is a compelling example of how bio-inspired movement strategies can improve robotic locomotion and realistic motion modeling. Whether applied in robotics, animation, or biomechanical studies, this mechanism offers a versatile and adaptive approach to overcoming complex physical environments with speed and agility.</p>
            {/* Add more content here */}
          </div>
        );
      default:
        return (
          <>
            <p className="">Select a topic to explore:</p>
            <div className="first-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs1'); }}
                className="first-box"
              >
                Bio-inspired Muscles-TSA
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs2'); }}
                className="first-box"
              >
                Artificial Muscle-Based Robotic Finger
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs3'); }}
                className="first-box"
              >
                Artificial Muscle-Based Robotic Hand
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs4'); }}
                className="first-box"
              >
                Hawk Gripper
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('firs5'); }}
                className="first-box"
              >
                Cat-Leap Parkour Rolling Mechanism
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Bio-inspired Mechanisms</h1>
      {renderTopicContent()}
    </div>
  );
};

export default First;