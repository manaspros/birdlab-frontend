import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Second.css";

const Second = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderTopicContent = () => {
    switch (selectedTopic) {
      case 'secs1':
        return (
          <div className="paper-box">
            <h3>Exoskeletons</h3>
            <p>
              Robotic exoskeletons are wearable machines designed to augment human strength, enhance mobility, or aid in rehabilitation. These intelligent devices work in sync with the user’s body, helping them walk, lift, or perform complex tasks with reduced effort and improved safety.
            </p>
            <p>
              Exoskeletons combine advanced sensors, motors, and control systems to replicate or enhance natural body movements. When worn, they detect the user's motion or intention through sensors and provide appropriate support or power to assist the movement.
            </p>
            <p>
              There are two main types:
              <ul>
                <li>Powered Exoskeletons: These use motors or actuators to actively assist or enhance motion.</li>
                <li>Passive Exoskeletons: These rely on mechanical systems like springs for support without requiring an external power source.</li>
              </ul>
            </p>
            <h4>Applications Across Industries</h4>
            <p>
              Healthcare & Rehabilitation: Exoskeletons help patients regain mobility after spinal injuries, strokes, or surgeries by guiding and supporting movements during therapy.
            </p>
            <p>
              Industrial Workplaces: In factories, warehouses, and construction sites, these devices reduce fatigue and the risk of injury by supporting repetitive or heavy lifting tasks.
            </p>
            <p>
              Military: Exoskeletons improve soldiers’ endurance and ability to carry heavy equipment across rough terrains by reducing the load on joints and muscles.
            </p>
            <p>
              Assistive Technology: They enable elderly or disabled individuals to walk or move independently, significantly improving their quality of life and reducing dependence on caregivers.
            </p>
            <h4>The Future of Human Augmentation</h4>
            <p>
              With continuous advancements in AI, soft robotics, and wearable technology, robotic exoskeletons are becoming smarter, lighter, and more accessible. From intelligent motion prediction to brain-machine interfaces, the future of human-machine integration is just beginning.
            </p>
          </div>
        );
      case 'secs2':
        return (
          <div className="paper-box">
            <h3>Exosuits</h3>
            <p>
              Exosuits are a type of soft, wearable robotic device designed to assist human movement and reduce physical strain. Unlike rigid exoskeletons, exosuits are typically made from flexible fabrics and materials, making them lightweight and less obtrusive.
            </p>
            <p>
              They work by applying forces to the body through cables or artificial muscles, often in conjunction with sensors that detect the wearer's intended movements. This allows them to provide support and assistance without restricting natural motion.
            </p>
            <h4>Key Features and Applications:</h4>
            <p>
              <ul>
                <li>Lightweight and Flexible: Their soft construction allows for greater comfort and freedom of movement.</li>
                <li>Targeted Assistance: They can be designed to support specific muscle groups or joints, reducing fatigue and preventing injuries.</li>
                <li>Rehabilitation: Exosuits are increasingly used in physical therapy to help patients with mobility impairments regain strength and coordination.</li>
                <li>Industrial and Occupational Use: They can assist workers in tasks involving repetitive motions or prolonged standing, thereby reducing musculoskeletal disorders.</li>
              </ul>
            </p>
            <p>
              The development of exosuits is a rapidly evolving field, with ongoing research focusing on improved power sources, more intuitive control systems, and broader applications in daily life and specialized industries.
            </p>
          </div>
        );
      case 'secs3':
        return (
          <div className="paper-box">
            <h3>Prosthetic Limbs</h3>
            <p>
              Prosthetic limbs are artificial devices designed to replace a missing body part, most commonly an arm or a leg. The primary goal of a prosthetic limb is to restore function and improve the quality of life for individuals who have lost a limb due to trauma, disease, or congenital conditions.
            </p>
            <p>
              Modern prosthetics range from basic cosmetic replacements to highly advanced bionic limbs. These advanced prosthetics incorporate sophisticated technologies like sensors, microprocessors, and motors, allowing for more natural and controlled movements.
            </p>
            <h4>Types and Advancements:</h4>
            <p>
              <ul>
                <li>Passive Prosthetics: Primarily for cosmetic purposes or basic support, without active movement.</li>
                <li>Body-Powered Prosthetics: Controlled by movements of other parts of the body, such as shoulder or chest movements.</li>
                <li>Myoelectric Prosthetics: These are the most advanced, using electrical signals from residual muscles to control the limb's movements. This allows for more intuitive control and a greater range of motion.</li>
                <li>Integrated Systems: Future advancements are focusing on direct neural interfaces, allowing for even more seamless control and sensory feedback.</li>
              </ul>
            </p>
            <p>
              The field of prosthetics is continuously innovating, aiming to create limbs that are not only functional but also comfortable, durable, and highly responsive to the user's intentions.
            </p>
          </div>
        );
      case 'secs4':
        return (
          <div className="paper-box">
            <h3>Supernumerary Robotic Limbs</h3>
            <p>
              Supernumerary robotic limbs (SRLs) are an emerging category of robotic devices that provide humans with additional, independent limbs beyond their natural four. Unlike prosthetic limbs that replace missing body parts, SRLs augment human capabilities by offering extra points of manipulation, support, or interaction with the environment.
            </p>
            <p>
              These robotic appendages are typically worn or attached to the body and are controlled through various interfaces, such as joysticks, foot pedals, or even brain-computer interfaces (BCI) in advanced research settings. Their purpose is to extend human reach, strength, and dexterity, allowing for tasks that would otherwise require multiple people or specialized machinery.
            </p>
            <h4>Potential Applications:</h4>
            <p>
              <ul>
                <li>Industrial and Construction: Assisting workers with complex assembly tasks, holding objects, or providing stability in dangerous environments.</li>
                <li>Disaster Response: Enabling rescuers to manipulate debris or navigate challenging terrains while keeping their natural limbs free.</li>
                <li>Medical Procedures: Offering surgeons additional tools or steadying capabilities during intricate operations.</li>
                <li>Daily Life Augmentation: Potentially assisting individuals with disabilities or enhancing everyday tasks.</li>
              </ul>
            </p>
            <p>
              While still largely in the research and development phase, SRLs represent a fascinating frontier in human-robot interaction, pushing the boundaries of human physical capabilities and redefining what's possible through human augmentation.
            </p>
          </div>
        );
      default:
        return (
          <>
            <p className="">Select a topic to explore:</p>
            <div className="first-list">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs1'); }}
                className="first-box"
              >
                Exoskeletons
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs2'); }}
                className="first-box"
              >
                Exosuits
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs3'); }}
                className="first-box"
              >
                Prosthetic limbs
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setSelectedTopic('secs4'); }}
                className="first-box"
              >
                Supernumerary robotic limbs
              </a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="first-container">
      <h1 className="first-title">Wearable and Collaborative Robotics</h1>
      {renderTopicContent()}
    </div>
  );
};

export default Second;