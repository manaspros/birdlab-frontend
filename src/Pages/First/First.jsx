import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import "./First.css"; // Import CSS
import bioinspiresTSAImage from '../../assets/BioinspiresTSA.png';
import roboticFingerImage from '../../assets/first2.png';
import roboticHandImage from '../../assets/first3.png'; // Import image for firs3
import catLeapImage from '../../assets/first5.png';     // Import image for firs5

const First = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'firs1':
        return (
          <div className="paper-box scrollable-content">
            <h3>Bio-inspired Muscles-TSA: Mimicking Nature's Efficiency</h3>
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
            <p>In the field of robotics and automation, engineers and scientists are increasingly turning to nature for inspiration to design efficient, flexible, and lightweight systems. One such innovation is the Bio-inspired Twisted String Actuator (TSA). This simple yet powerful actuation mechanism mimics the contractile behavior of biological muscles. Inspired by the way muscles contract to generate motion, TSAs transform rotational input from a motor into linear displacement, enabling soft, smooth, and natural-looking movements in robotic systems.</p>

            <p>The basic working principle of a TSA involves two or more flexible strings connected at one end to a rotating motor and at the other end to a load. When the motor rotates, the strings twist around each other, forming a helical structure. As the twisting continues, the overall length of the twisted section shortens, pulling the load closer and generating linear actuation. This straightforward mechanism can produce surprisingly high forces with minimal weight and energy consumption, making it a highly attractive option for various applications.</p>

            <p>Twisted string actuators are especially appealing in bio-mimetic and wearable robotic applications, where space, weight, and natural movement are crucial. Unlike traditional actuators such as pneumatic cylinders or electric motors, which tend to be bulky and rigid, TSAs offer lightweight, compliant, and cost-effective solutions. These features make them exceptionally suitable for use in prosthetic limbs, exoskeletons, robotic hands, and soft robots that interact closely with humans, enhancing safety and adaptability.</p>

            <p>Another significant advantage of TSAs lies in their high force-to-weight ratio. Due to the mechanical advantage gained during twisting, they can generate large tensile forces with relatively small motors. This makes them ideal for portable or body-mounted systems where power density is key. Furthermore, TSAs can be configured in various geometries and utilize different materials to suit specific application needs, further increasing their versatility across diverse robotic platforms.</p>

            <p>Despite their many advantages, TSAs also present certain challenges. Their motion is inherently nonlinear, which means that control systems must account for the complex relationship between motor rotation and string contraction. Additionally, string wear and fatigue can limit their long-term performance, often requiring periodic maintenance or material optimization. However, ongoing research continues to improve TSA designs through better modeling, advanced materials development, and sophisticated smart control strategies, pushing the boundaries of their capabilities.</p>

            <p>In summary, the Bio-inspired Twisted String Actuator represents a promising class of actuators that blend simplicity with powerful functionality. By mimicking the efficient mechanics of biological muscles, TSAs open new avenues for the development of responsive, lightweight, and adaptive robotic systems, making them a cornerstone technology in the advancement of bio-inspired engineering.</p>

            <h4>AI in BirdLab for TSA Research:</h4>
            <p>At BirdLab, our research on Bio-inspired Muscles-TSA heavily leverages AI and machine learning to overcome their inherent nonlinearities and optimize performance. We employ reinforcement learning algorithms to train robotic systems equipped with TSAs, allowing them to learn optimal control policies for precise force generation and motion in dynamic environments. For instance, we're using neural networks to predict string wear and fatigue, enabling proactive maintenance and extending the lifespan of our TSA-driven robots, ensuring long-term reliability.</p>
            <p>Furthermore, AI-driven simulations allow us to rapidly iterate on new TSA designs. This enables us to explore different string materials, twisting configurations, and motor parameters in a virtual environment to achieve desired force-to-weight ratios and response times. This accelerated design cycle ultimately pushes the boundaries of what these biomimetic actuators can achieve in agile, bird-like robotic movements, allowing us to build more dynamic and efficient robotic systems.</p>
          </div>
        );
      case 'firs2':
        return (
          <div className="paper-box scrollable-content">
            <h3>Artificial Muscle-Based Robotic Finger: Emulating Human Dexterity</h3>
            <img
              src={roboticFingerImage}
              alt="Artificial Muscle-Based Robotic Finger"
              style={{
                width: '300px', // Adjust size as needed
                height: 'auto',
                float: 'right',
                marginLeft: '20px'
              }}
            />
            <p>In the rapidly evolving field of robotics, the development of systems that closely replicate human movement and dexterity is a key area of research. One such advancement is the Artificial Muscle-Based Robotic Finger, specifically designed to emulate the complex motion and force generation capabilities of a human finger. Unlike traditional robotic joints driven by rigid motors and gears, this innovative approach utilizes various types of artificial muscles—such as Twisted String Actuators (TSAs), pneumatic muscles (McKibben actuators), shape memory alloys (SMAs), or electroactive polymers (EAPs)—to produce biologically inspired, flexible movement that is more natural and adaptable.</p>

            <p>The design of a robotic finger powered by artificial muscles focuses on replicating the intricate anatomy and biomechanics of human fingers. This includes incorporating multiple joints (metacarpophalangeal, proximal, and distal interphalangeal joints) and the artificial tendons that allow for smooth, multi-directional motion. Artificial muscles are chosen for their lightweight nature, high force-to-weight ratio, and natural contraction behavior, closely mirroring that of human skeletal muscles. When activated, these artificial muscles contract or change shape, pulling on artificial tendons or linkages to bend and flex the robotic finger, producing lifelike movements.</p>

            <p>This bio-inspired approach offers several key benefits. The robotic finger becomes safer for human interaction due to its inherent compliance, making it less rigid and more forgiving during contact. It's also more capable of delicate, precise movements, making it ideal for use in prosthetic hands, assistive devices, surgical robots, and humanoid robots where fine manipulation is critical. Its soft and adaptive nature allows it to conform to various objects, significantly improving grip quality and dexterity in tasks that require nuanced manipulation, similar to how a human finger adapts to different textures or weights.</p>

            <p>Moreover, the integration of sensor feedback—such as force sensors, stretch sensors, or tactile sensors—is crucial. This feedback enables the robotic finger to perform intelligent tasks with adaptive control, mirroring the way a human finger responds to different stimuli. Advanced control strategies, including PID, fuzzy logic, or neural networks, are frequently employed to precisely coordinate the muscle activations for smooth, realistic motion, bringing the robot's capabilities closer to human-like finesse.</p>

            <p>However, challenges remain in developing robust artificial muscle-based robotic fingers. These include issues like material fatigue, potentially slower response times (especially in some actuators like SMAs), and the development of complex control algorithms necessitated by the nonlinear behavior of artificial muscles. Yet, ongoing research and continuous innovation in smart materials continue to enhance performance, durability, and responsiveness, paving the way for even more advanced designs.</p>

            <p>In conclusion, the Artificial Muscle-Based Robotic Finger represents a remarkable step toward creating robotic systems that not only move like humans but also interact with the environment in a safe, responsive, and efficient manner. This bio-inspired design has the potential to revolutionize fields such as rehabilitation, human-robot interaction, and advanced prosthetics, bringing robotics closer to human-like capability.</p>

            <h4>AI in BirdLab for Robotic Finger Development:</h4>
            <p>At BirdLab, our work on artificial muscle-based robotic fingers heavily incorporates AI for advanced control and perception. We utilize deep learning models to process rich sensory data from force and tactile sensors embedded in the finger. This allows the robot to "feel" and adapt its grip to objects of varying fragility and texture with remarkable precision, much like a bird carefully grasping a twig.</p>
            <p>Reinforcement learning is crucial for teaching the robotic finger complex manipulation tasks. Through iterative trial and error in simulated and physical environments, the finger learns optimal grasping strategies, mimicking how a bird instinctively refines its claw movements for different actions. Furthermore, AI-powered predictive control algorithms help to compensate for the inherent nonlinearities and hysteresis often found in artificial muscles. This ensures smooth and precise movements for delicate operations, mirroring the intricate and nuanced control a bird has over its talons for capturing prey or manipulating nest materials, making our robotic fingers highly adaptive and responsive.</p>
          </div>
        );
      case 'firs3':
        return (
          <div className="paper-box scrollable-content">
            <h3>Artificial Muscle-Based Robotic Hand: Mastering Dexterous Manipulation</h3>
            <img
              src={roboticHandImage} // New image added here
              alt="Artificial Muscle-Based Robotic Hand"
              style={{
                width: '300px', // Adjust size as needed
                height: 'auto',
                float: 'right',
                marginLeft: '20px'
              }}
            />
            <p>As robotics continues to advance toward greater human-like functionality and adaptability, one of the most compelling innovations is the development of the Artificial Muscle-Based Robotic Hand. This cutting-edge technology is designed to replicate the exceptional dexterity, flexibility, and responsiveness of the human hand by using artificial muscles in place of traditional rigid motors and linkages. Inspired by biological systems, these actuators mimic the contraction and relaxation of natural muscles, enabling the robotic hand to perform complex tasks such as grasping, pinching, and manipulating objects with astonishing precision and compliance.</p>

            <p>Unlike conventional robotic hands driven by servomotors and gears, artificial muscle-based systems utilize diverse actuators like Twisted String Actuators (TSAs), pneumatic muscles (McKibben actuators), shape memory alloys (SMAs), or electroactive polymers (EAPs). These actuators contract or deform when activated, pulling on artificial tendons or flexing joints, precisely as human muscles pull on bones. The direct result is a lightweight, compliant, and naturally moving robotic hand that can adapt dynamically to various shapes and forces, making it inherently safer and more versatile for interaction with the environment and humans.</p>

            <p>The primary advantage of this bio-inspired approach lies in its high force-to-weight ratio, inherent softness, and remarkable adaptability, which are crucial for applications involving close human interaction. Such hands are particularly useful in fields like prosthetics, rehabilitation, humanoid robotics, teleoperation, and medical assistance, where safety, comfort, and fine motor control are absolutely essential. Their ability to conform to objects also makes them superior for handling delicate or irregularly shaped items.</p>

            <p>In a typical design, each finger of the robotic hand includes multiple degrees of freedom, driven by individually controlled artificial muscles. The actuation system is almost always paired with a suite of sensors (such as pressure, strain, or tactile sensors) to provide real-time feedback. This enables highly adaptive gripping and refined control. This sophisticated sensory feedback system allows the hand to adjust grip strength, accurately recognize object shapes, and safely interact with even the most delicate or irregular items, truly mimicking human touch.</p>

            <p>Despite their immense promise, artificial muscle-based robotic hands face several technical challenges. These include the inherent nonlinear behavior of the muscles, limited lifespan of certain materials, potential response time delays (particularly in SMAs and some soft actuators), and the need for complex control algorithms to precisely coordinate multiple actuators for intricate tasks. However, ongoing advancements in smart materials, the field of soft robotics, and sophisticated AI-based control strategies are steadily overcoming these limitations, pushing the boundaries of what these hands can achieve.</p>

            <p>In conclusion, the Artificial Muscle-Based Robotic Hand represents a significant step forward in creating robotic systems that combine human-like motion with intelligent adaptability. By leveraging fundamental principles of biomechanics and biomimetics, these systems not only enhance robotic functionality but also bring us closer to seamless and safe integration of robots in daily human environments, revolutionizing how we interact with technology.</p>

            <h4>AI in BirdLab for Robotic Hand Development:</h4>
            <p>In BirdLab, our development of artificial muscle-based robotic hands is deeply intertwined with AI. We are employing advanced AI techniques to tackle the complexities of multi-finger coordination and highly dexterous manipulation. Computer vision, powered by convolutional neural networks (CNNs), allows the robotic hand to accurately perceive objects in its environment, estimate their pose, and plan optimal grasp points in real time. This vision-guided grasping mimics a bird's precise visual targeting before grasping.</p>
            <p>We are actively exploring imitation learning to enable the robotic hand to learn complex manipulation skills by observing human demonstrations. This allows for rapid skill acquisition without explicit programming for every task. Furthermore, AI-driven inverse kinematics and dynamics models are being developed to translate desired hand movements into precise artificial muscle activations, taking into account the compliant and nonlinear nature of these actuators. This allows for highly nuanced and adaptable manipulation, mimicking the versatile and precise actions of a bird's foot in different scenarios, from delicate nest building to powerful perching.</p>
          </div>
        );
      case 'firs4':
        return (
          <div className="paper-box scrollable-content">
            <h3>Hawk Gripper: Emulating a Predator's Grasp for Robotics</h3>
            <p>The Hawk Gripper is a specialized, bio-inspired robotic end-effector meticulously designed to mimic the powerful grasping and exceptional precision capabilities of a hawk’s talon. Taking profound inspiration from the natural world—particularly raptors like hawks and eagles known for their hunting prowess—this type of robotic gripper emphasizes strong, highly adaptive, and high-speed gripping mechanisms. It is specifically suited for handling irregular, soft, or fragile objects, making it incredibly effective in challenging applications such as aerial robotics, search and rescue operations, agriculture, and general grasping in unstructured environments where conventional grippers fall short.</p>

            <p>Hawks are renowned for their ability to snatch prey mid-flight, utilizing powerful talons that can exert high forces with astonishingly fast reaction times. The Hawk Gripper replicates this functionality by employing artificial tendons, underactuated linkages, or various artificial muscles (such as Twisted String Actuators or pneumatic systems) to control its fingers. Each finger is often independently articulated and features curved, claw-like structures, which significantly enhance both grip strength and the ability to conform to an object's shape, ensuring a secure hold.</p>

            <p>One of the key defining features of the Hawk Gripper is its adaptive grasping capability. Even with fewer actuators than fingers, the gripper can effectively conform to various object geometries due to its cleverly designed underactuated mechanism. This means that when the gripper closes around an object, the fingers automatically adjust their positions to ensure maximum contact and stability, distributing pressure evenly. Such inherent adaptability is especially important in real-world scenarios where object shapes, sizes, and textures are inherently unpredictable and require flexible manipulation.</p>

            <p>Another hallmark of the Hawk Gripper is its lightweight and compact structure, which makes it ideally suited for seamless integration with drone-based manipulation systems. When attached to an unmanned aerial vehicle (UAV), the Hawk Gripper enables complex tasks such as in-air object retrieval, precise package delivery, or even delicate wildlife handling without compromising the drone's flight stability, opening up new possibilities for aerial robotics.</p>

            <p>In addition to its significant mechanical advantages, many modern implementations of the Hawk Gripper integrate advanced force and tactile sensors. These sensors enable the system to detect slippage, assess object hardness, or pinpoint contact points with remarkable accuracy. When combined with smart AI-driven control algorithms, this sensory feedback dramatically improves grasp stability and precision, even when dealing with extremely delicate items like ripe fruits or small, intricate tools, ensuring minimal damage and optimal handling.</p>

            <p>Despite its many strengths, challenges remain in fine-tuning the control system for highly dynamic environments, ensuring long-term durability under repeated strenuous use, and further improving the response time for real-time applications where milliseconds matter. However, with continuous developments in soft robotics, bio-mimetic design, and sophisticated sensor integration, the Hawk Gripper stands as a profoundly promising innovation for the next generation of robotic manipulators, poised to tackle tasks previously thought impossible for machines.</p>

            <p>In conclusion, the Hawk Gripper exemplifies how nature-inspired engineering, powered by intelligent AI, can lead to practical, high-performance robotic systems capable of handling complex tasks with exceptional efficiency, adaptability, and intelligence, truly bringing the capabilities of raptors to the world of robotics.</p>

            <h4>AI in BirdLab for Hawk Gripper Optimization:</h4>
            <p>At BirdLab, AI plays a pivotal role in perfecting our Hawk Gripper designs, especially for autonomous aerial manipulation. We leverage AI for real-time object detection and tracking from drone-mounted cameras. This allows the gripper to precisely target and intercept moving objects, much like a hawk spotting and honing in on its prey from above. Predictive control algorithms, informed by machine learning models, anticipate the object's trajectory and the gripper's closure dynamics, ensuring high-speed, accurate grasping even in challenging aerial conditions.</p>
            <p>Furthermore, we employ AI for anomaly detection in sensor data, quickly identifying potential slippage or grasp failures. This enables the gripper to rapidly re-adjust for secure handling, preventing drops and ensuring task completion. Our intense focus on AI allows us to simulate and optimize complex aerial grasping maneuvers in virtual environments before deploying them in the physical world. This significantly accelerates development and pushes the boundaries of what robotic grippers can achieve in dynamic, unstructured settings, embodying the precision and power of a hawk's strike.</p>
          </div>
        );
      case 'firs5':
        return (
          <div className="paper-box scrollable-content">
            <h3>Cat-Leap Parkour Rolling Mechanism: Agile Navigation Inspired by Nature</h3>
            <img
              src={catLeapImage} // New image added here
              alt="Cat-Leap Parkour Rolling Mechanism"
              style={{
                width: '500px', // Adjust size as needed
                height: 'auto',
                float: 'right',
                marginLeft: '20px'
              }}
            />
            <p>The Cat-Leap Parkour Rolling Mechanism is a biomechanically inspired motion strategy derived directly from human parkour movements—specifically the "cat-leap" (or cat grab) and the subsequent parkour roll. This dynamic mechanism is intensively studied and applied in diverse fields such as robotic locomotion, biomechanics, motion planning, and animation systems, particularly where dynamic and efficient movement over obstacles is absolutely essential for performance.</p>

            <p>A cat-leap is a classic parkour technique used to jump across a gap or toward a vertical structure, landing gracefully with the feet on a wall and hands gripping the top for crucial stability. Following this aerial maneuver, practitioners often transition smoothly into a precision drop or a forward roll to efficiently absorb impact and maintain forward momentum. This sequential movement of leaping, gripping, and rolling forms the fundamental basis of the cat-leap rolling mechanism, brilliantly combining aerial trajectory control, robust grip mechanics, and effective impact dissipation into one fluid action.</p>

            <p>In both robotic and simulation contexts, this intricate mechanism is implemented to significantly enhance agility, stability, and energy efficiency in machines navigating complex terrains. Inspired by both feline agility and advanced human parkour techniques, the rolling mechanism specifically allows a robot or a digital agent to:</p>
            <ul>
              <li>Leap across obstacles with precisely controlled trajectory and orientation, ensuring optimal landing conditions.</li>
              <li>Grip vertical or inclined surfaces upon landing, providing critical stability and preventing falls.</li>
              <li>Transition smoothly into a roll that efficiently dissipates kinetic energy, drastically reducing the impact on sensitive joints or structural components, thereby extending the robot's lifespan and operational integrity.</li>
            </ul>

            <p>From a mechanical design perspective, a robust Cat-Leap Rolling Mechanism may involve several sophisticated components:</p>
            <ul>
              <li>Flexible limb structures or compliant actuators that are designed to simulate human/joint flexibility, allowing for more natural and adaptive movements.</li>
              <li>Integrated sensors to accurately detect landing impact force and orientation, providing crucial feedback for dynamic adjustments.</li>
              <li>Sophisticated control algorithms that meticulously time the transition from the leap phase to the grip phase, and then to the roll, ensuring seamless execution.</li>
              <li>Bio-inspired actuators (e.g., artificial muscles or TSAs) that are specifically designed to replicate the dynamic joint movements and force generation of biological systems.</li>
            </ul>

            <p>In animation or virtual simulations (such as video games or robotics training environments), this mechanism is often employed to enhance realism and functional motion planning. It allows avatars or robots to traverse challenging urban environments in a highly human-like or animal-like way, making their movements believable and efficient.</p>

            <p>Despite its many advantages, implementing this complex mechanism presents several challenges:</p>
            <ul>
              <li>Timing and coordination of multiple dynamic phases (leap, grip, roll) which must be executed with split-second precision.</li>
              <li>Ensuring absolute safety and stability during highly dynamic and often unpredictable movements.</li>
              <li>Effectively handling variability in terrain or obstacles, as real-world environments are rarely uniform.</li>
              <li>Accurately managing energy dissipation during the roll phase to protect the robot's components and optimize efficiency.</li>
            </ul>

            <p>In summary, the Cat-Leap Parkour Rolling Mechanism is a compelling example of how bio-inspired movement strategies can dramatically improve robotic locomotion and realistic motion modeling. Whether applied in cutting-edge robotics, advanced animation, or detailed biomechanical studies, this mechanism offers a versatile and adaptive approach to overcoming complex physical environments with impressive speed and unparalleled agility.</p>

            <h4>AI in BirdLab for Parkour Robotics:</h4>
            <p>In BirdLab, our research on the Cat-Leap Parkour Rolling Mechanism for robotics is heavily reliant on AI for autonomous navigation and dynamic control. We are developing sophisticated AI-powered perception systems, utilizing LiDAR and camera data, to create detailed 3D maps of complex environments. This allows our robots to accurately identify optimal parkour routes, pinpoint precise landing zones, and perceive obstacles in real-time, much like a bird surveying its flight path.</p>
            <p>Reinforcement learning is crucial for training robots to execute dynamic maneuvers like cat-leaps and rolls. Through extensive simulations and physical trials, the robots learn precise timing and force application for successful obstacle traversal, adapting to unforeseen conditions. Furthermore, we're using AI for predictive dynamics, allowing the robot to anticipate its movements and adjust its posture mid-air for stable landings and seamless transitions into rolls. This AI-driven approach is fundamental to creating robots that can navigate challenging, unstructured terrains with the agility and grace of a bird in flight or landing, transforming robotic locomotion.</p>
          </div>
        );
      default:
        return (
          <>
            <p className="">Select a topic to explore the fascinating world of bio-inspired robotics at BirdLab:</p>
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
    <div className="app-background">
      <div className="app-content">
        <Navbar />
        <div className="first-container">
          <h1 className="first-title">Bio-inspired Mechanisms</h1>
          {!selectedTopic && (
            <div className="first-list">
              <button 
                onClick={() => setSelectedTopic('firs1')}
                className="first-box"
              >
                Bio-inspired TSA
              </button>
              <button 
                onClick={() => setSelectedTopic('firs2')}
                className="first-box"
              >
                Robotic Finger
              </button>
              <button 
                onClick={() => setSelectedTopic('firs3')}
                className="first-box"
              >
                Robotic Hand
              </button>
              <button 
                onClick={() => setSelectedTopic('firs4')}
                className="first-box"
              >
                Bird Wing Analysis
              </button>
              <button 
                onClick={() => setSelectedTopic('firs5')}
                className="first-box"
              >
                Cat-Leap Mechanism
              </button>
            </div>
          )}
          {renderTopicContent()}
          {selectedTopic && (
            <button 
              onClick={() => setSelectedTopic(null)}
              className="back-button"
            >
              Back to Topics
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default First;