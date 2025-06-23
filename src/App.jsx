import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Main from "./Main";

// Import main sections
import First from "./Pages/First/First";
import Second from "./Pages/Second/Second";
import Third from "./Pages/Third/Third";
import Fourth from "./Pages/Fourth/Fourth";
import Fifth from "./Pages/Fifth/Fifth";

// Import other pages
import People from "./Pages/People";
import Publications from "./Pages/Publications";
import Lectures from "./Pages/Lectures";
import Positions from "./Pages/Positions";
import Contact from "./Pages/Contact";

import "./App.css";

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -50,
    scale: 1.02
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

// Floating particles animation
const particlesVariants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, -10, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Main />
            </motion.div>
          } 
        />
        <Route 
          path="/first" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <First />
            </motion.div>
          } 
        />
        <Route 
          path="/second" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Second />
            </motion.div>
          } 
        />
        <Route 
          path="/third" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Third />
            </motion.div>
          } 
        />
        <Route 
          path="/fourth" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Fourth />
            </motion.div>
          } 
        />
        <Route 
          path="/fifth" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Fifth />
            </motion.div>
          } 
        />
        <Route 
          path="/people" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <People />
            </motion.div>
          } 
        />
        <Route 
          path="/publications" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Publications />
            </motion.div>
          } 
        />
        <Route 
          path="/lectures" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Lectures />
            </motion.div>
          } 
        />
        <Route 
          path="/positions" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Positions />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="app-background">
      {/* Animated floating particles */}
      <motion.div
        variants={particlesVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '10px',
          height: '10px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <motion.div
        variants={particlesVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '8px',
          height: '8px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none',
          animationDelay: '2s'
        }}
      />
      <motion.div
        variants={particlesVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '12px',
          height: '12px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none',
          animationDelay: '4s'
        }}
      />

      <div className="app-content">
        <Router>
          <AnimatedRoutes />
        </Router>
      </div>
    </div>
  );
}

export default App;