import { NavLink } from "react-router-dom";
import { Home, Clock, LineChart } from "lucide-react"; 

const NavBar = () => {
 
  // Dynamic styles for active links
  const navStyle = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
      isActive 
        ? "bg-[#1a4a3e] text-white"  
        : "text-gray-500 hover:bg-gray-100" 
    }`;

  return (
    // Main navigation bar container
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100 shadow-sm">
      
      {/* Brand logo section */}
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-[#1a2e35]">Keen</span>
        <span className="text-[#2d4f3e]">Keeper</span>
      </div>
      
      {/* Navigation menu links */}
      <div className="flex gap-4">
        <NavLink to="/" className={navStyle}>
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/timeline" className={navStyle}>
          <Clock size={20} />
          <span>Timeline</span>
        </NavLink>

        <NavLink to="/stats" className={navStyle}>
          <LineChart size={20} />
          <span>Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;