import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import birdlabLogo from "../assets/birdlablogo.png";
import iitjLogo from "../assets/iitj.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const navigate = useNavigate();

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.nav
      className="navbar"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Logo */}
      <motion.div 
        className="nav-logo left-logo"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        onClick={() => navigate("/")}
      >
        <img src={birdlabLogo} alt="BirdLab Logo" />
      </motion.div>

      {/* Hamburger Menu Icon */}
      <motion.div 
        className="menu-icon" 
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ☰
      </motion.div>

      {/* Navigation Links */}
      <motion.ul 
        className={`nav-links ${menuOpen ? "active" : ""}`}
        variants={navVariants}
      >
        <motion.li variants={itemVariants}>
          <motion.div 
            className="nav-link"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Welcome
          </motion.div>
        </motion.li>
        
        <motion.li variants={itemVariants}>
          <motion.div 
            className="nav-link"
            onClick={() => navigate("/people")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            People
          </motion.div>
        </motion.li>

        <motion.li 
          className="dropdown-container"
          variants={itemVariants}
          onMouseEnter={() => setResearchOpen(true)}
          onMouseLeave={() => setResearchOpen(false)}
        >
          <motion.div 
            className="nav-link dropdown-trigger"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            Research
            <motion.span
              className="arrow"
              animate={{
                rotate: researchOpen ? -135 : 45
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <AnimatePresence>
            {researchOpen && (
              <motion.div
                className="dropdown-menu"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div 
                  className="dropdown-item"
                  onClick={() => navigate("/first")}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  Bio-inspired Mechanisms
                </motion.div>
                <motion.div 
                  className="dropdown-item"
                  onClick={() => navigate("/second")}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  Wearable and Collaborative Robotics
                </motion.div>
                <motion.div 
                  className="dropdown-item"
                  onClick={() => navigate("/third")}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  Reconfigurable and Growing Robotics
                </motion.div>
                <motion.div 
                  className="dropdown-item"
                  onClick={() => navigate("/fourth")}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  Tele-Robotics and Haptics
                </motion.div>
                <motion.div 
                  className="dropdown-item"
                  onClick={() => navigate("/fifth")}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  Applied AI in Robotics
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>

        <motion.li variants={itemVariants}>
          <motion.div 
            className="nav-link"
            onClick={() => navigate("/publications")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Publications
          </motion.div>
        </motion.li>

        <motion.li variants={itemVariants}>
          <motion.div 
            className="nav-link"
            onClick={() => navigate("/lectures")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Lectures
          </motion.div>
        </motion.li>

        <motion.li variants={itemVariants}>
          <motion.div 
            className="nav-link"
            onClick={() => navigate("/positions")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Positions
          </motion.div>
        </motion.li>

        <motion.li variants={itemVariants}>
          <motion.div 
            className="nav-link"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.div>
        </motion.li>
      </motion.ul>

      {/* Right Logo */}
      <motion.div 
        className="nav-logo right-logo"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.1, 
          rotate: -5,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        onClick={() => navigate("/")}
      >
        <img src={iitjLogo} alt="IIT Jodhpur Logo" />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
