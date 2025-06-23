import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import "./Main.css";

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.5
    }
  }
};

const Main = () => {
  return (
    <div className="app-background">
      <div className="app-content">
        <Navbar />
        
        <div className="main-container">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="main-title"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            Welcome to BirdLab
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
