import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Home from "./Pages/Home";
import Research from "./Pages/Research";
import Projects from "./Pages/Projects";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import "./App.css";  // Import the CSS file

function App() {
  return (
    <div className="app-background">
      <div className="app-content">  {/* Ensures content is above the overlay */}
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
