import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.js";
import Home from "./pages/Home.js";
import Research from "./pages/Research.js";

const App = () => {
  return (
    <Router> {/* Only one Router */}
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
