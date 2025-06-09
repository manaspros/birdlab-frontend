import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";

// Import main sections, which now internally manage their subsections
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

// REMOVED: All individual subsection imports (FirS1, ThiS1, FouS1, etc.)
// because their content is now integrated directly into their parent components (First, Third, Fourth).

import "./App.css"; // Import global styles

function App() {
  return (
    <div className="app-background">
      <div className="app-content">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />

            {/*
              First Section: Now handles its subsections internally using state.
              The individual sub-routes (firs1, firs2, etc.) are no longer needed here,
              as First.jsx itself manages which content to display based on internal state.
              You only need the main route to the 'First' component.
            */}
            <Route path="/first" element={<First />} />

            {/*
              Second Section: Handles its subsections internally.
              Only the main route to the 'Second' component is needed.
            */}
            <Route path="/second" element={<Second />} />

            {/*
              Third Section: Now handles its subsections internally using state.
              The individual sub-routes (this1, this2, etc.) are no longer needed here.
              Only the main route to the 'Third' component is needed.
            */}
            <Route path="/third" element={<Third />} />

            {/*
              Fourth Section: Now handles its subsections internally using state.
              The individual sub-routes (fous1, fous2, etc.) are no longer needed here.
              Only the main route to the 'Fourth' component is needed.
            */}
            <Route path="/fourth" element={<Fourth />} />

            {/* Fifth Section (already had no external subsections) */}
            <Route path="/fifth" element={<Fifth />} />

            {/* Other Pages */}
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/lectures" element={<Lectures />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;