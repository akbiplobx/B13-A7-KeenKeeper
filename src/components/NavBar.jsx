import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart3 } from "lucide-react"; 

const NavBar = () => {
 
  const navStyle = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
      isActive 
        ? "bg-[#1a4a3e] text-white"  
        : "text-gray-500 hover:bg-gray-100" 
    }`;

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100 shadow-sm">
      <div className="text-2xl font-black text-[#1a4a3e]">KeenKeeper</div>
      
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
          <BarChart3 size={20} />
          <span>Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar; 