import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200">
      {/* Logo Section */}
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-[#1a2e35]">Keen</span>
        <span className="text-[#2d4f3e]">Keeper</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <button className="flex items-center gap-2 bg-[#2d4f3e] text-white px-5 py-2 rounded-lg font-medium transition-all hover:bg-[#233f32]">
          <Home size={20} />
          <span>Home</span>
        </button>

        <button className="flex items-center gap-2 text-gray-500 font-medium hover:text-[#2d4f3e] transition-colors">
          <Clock size={20} />
          <span>Timeline</span>
        </button>

        <button className="flex items-center gap-2 text-gray-500 font-medium hover:text-[#2d4f3e] transition-colors">
          <BarChart3 size={20} />
          <span>Stats</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;