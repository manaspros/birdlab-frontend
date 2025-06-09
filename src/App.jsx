import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

// Import subsections for First, Third, and Fourth sections (assuming they still exist as separate files)
import FirS1 from "./Pages/First/FirS1";
import FirS2 from "./Pages/First/FirS2";
import FirS3 from "./Pages/First/FirS3";
import FirS4 from "./Pages/First/FirS4";
import FirS5 from "./Pages/First/FirS5";

// REMOVED: SecS1, SecS2, SecS3, SecS4 imports as their content is now in Second.jsx
// import SecS1 from "./Pages/Second/Exoskeletons";
// import SecS2 from "./Pages/Second/Exosuits";
// import SecS3 from "./Pages/Second/ProstheticLimbs";
// import SecS4 from "./Pages/Second/SupernumeraryRoboticLimbs";

import ThiS1 from "./Pages/Third/ThiS1";
import ThiS2 from "./Pages/Third/ThiS2";
import ThiS3 from "./Pages/Third/ThiS3";

import FouS1 from "./Pages/Fourth/FouS1";
import FouS2 from "./Pages/Fourth/FouS2";
import FouS3 from "./Pages/Fourth/FouS3";

import "./App.css"; // Import global styles

function App() {
  return (
    <div className="app-background">
      <div className="app-content">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />

            {/* First Section with 5 subsections */}
            <Route path="/first" element={<First />}>
              <Route path="firs1" element={<FirS1 />} />
              <Route path="firs2" element={<FirS2 />} />
              <Route path="firs3" element={<FirS3 />} />
              <Route path="firs4" element={<FirS4 />} />
              <Route path="firs5" element={<FirS5 />} />
            </Route>

            {/* Second Section: Now handles its subsections internally */}
            {/* The individual sub-routes for Second (secs1, secs2, etc.) are no longer needed here,
                as Second.jsx itself manages which content to display based on internal state.
                You only need the main route to the 'Second' component. */}
            <Route path="/second" element={<Second />} />
            {/* REMOVED: Nested routes for Second's subsections
            <Route path="/second" element={<Second />}>
              <Route path="secs1" element={<SecS1 />} />
              <Route path="secs2" element={<SecS2 />} />
              <Route path="secs3" element={<SecS3 />} />
              <Route path="secs4" element={<SecS4 />} />
            </Route>
            */}

            {/* Third Section with 3 subsections */}
            <Route path="/third" element={<Third />}>
              <Route path="this1" element={<ThiS1 />} />
              <Route path="this2" element={<ThiS2 />} />
              <Route path="this3" element={<ThiS3 />} />
            </Route>

            {/* Fourth Section with 3 subsections */}
            <Route path="/fourth" element={<Fourth />}>
              <Route path="fous1" element={<FouS1 />} />
              <Route path="fous2" element={<FouS2 />} />
              <Route path="fous3" element={<FouS3 />} />
            </Route>

            {/* Fifth Section (No subsections) */}
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