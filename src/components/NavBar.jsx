import { useState } from "react"; // Added state for mobile menu
import { NavLink } from "react-router-dom";
import { Home, Clock, LineChart, Menu, X } from "lucide-react"; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  // Dynamic styles for active links
  const navStyle = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
      isActive 
        ? "bg-[#1a4a3e] text-white shadow-md"  
        : "text-gray-500 hover:bg-gray-100" 
    }`;

  const mobileNavStyle = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-4 font-bold transition-all ${
      isActive 
        ? "bg-[#1a4a3e]/10 text-[#1a4a3e] border-r-4 border-[#1a4a3e]" 
        : "text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-[1400px] mx-auto">
        
        {/* Brand logo section */}
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-[#1a2e35]">Keen</span>
          <span className="text-[#2d4f3e]">Keeper</span>
        </div>
        
        {/* Desktop Navigation (Hidden on mobile) */}
        <div className="hidden md:flex gap-4">
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

        {/* Mobile Menu Button (Hidden on desktop) */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full py-8">
          <div className="px-6 mb-10">
            <h2 className="text-xl font-bold text-[#1a2e35]">Menu</h2>
          </div>
          
          <div className="flex flex-col gap-1">
            <NavLink to="/" className={mobileNavStyle} onClick={() => setIsOpen(false)}>
              <Home size={22} />
              <span>Home</span>
            </NavLink>

            <NavLink to="/timeline" className={mobileNavStyle} onClick={() => setIsOpen(false)}>
              <Clock size={22} />
              <span>Timeline</span>
            </NavLink>

            <NavLink to="/stats" className={mobileNavStyle} onClick={() => setIsOpen(false)}>
              <LineChart size={22} />
              <span>Stats</span>
            </NavLink>
          </div>

          <div className="mt-auto px-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
              KeenKeeper v1.0
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;