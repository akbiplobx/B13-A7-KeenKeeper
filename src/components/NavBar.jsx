import { Link, NavLink } from 'react-router-dom';
import { Home, Clock, LineChart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
    
      <Link to="/" className="text-2xl font-bold tracking-tight">
        <span className="text-[#1a2e35]">Keen</span>
        <span className="text-[#2d4f3e]">Keeper</span>
      </Link>

      <div className="flex items-center gap-8">
       
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-all ${
              isActive ? 'bg-[#2d4f3e] text-white' : 'text-[#5a6b7d] hover:text-[#2d4f3e]'
            }`
          }
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>

       
        <NavLink 
          to="/timeline" 
          className={({ isActive }) => 
            `flex items-center gap-2 font-medium transition-all ${
              isActive ? 'text-[#2d4f3e] border-b-2 border-[#2d4f3e]' : 'text-[#5a6b7d]'
            }`
          }
        >
          <Clock size={20} />
          <span>Timeline</span>
        </NavLink>

       
        <NavLink 
          to="/stats" 
          className={({ isActive }) => 
            `flex items-center gap-2 font-medium transition-all ${
              isActive ? 'text-[#2d4f3e] border-b-2 border-[#2d4f3e]' : 'text-[#5a6b7d]'
            }`
          }
        >
          <LineChart size={20} />
          <span>Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};


export default Navbar;