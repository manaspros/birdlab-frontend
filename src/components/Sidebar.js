import { Link } from "react-router-dom";
import "./Sidebar.css"; // Create this CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>BirdLab</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/research">Research</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
