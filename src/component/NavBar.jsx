import { Home, Clock, LineChart } from 'lucide-react'; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200">
    
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-[#1a2e35]">Keen</span>
        <span className="text-[#2d4f3e]">Keeper</span>
      </div>

     
      <div className="flex items-center gap-10">
    
        <button className="flex items-center gap-2 bg-[#2d4f3e] text-white px-4 py-2 rounded-md font-semibold">
          <Home size={20} strokeWidth={2.5} />
          <span className="text-lg">Home</span>
        </button>

      
        <button className="flex items-center gap-2 text-[#5a6b7d] font-medium hover:text-[#2d4f3e] transition-colors">
          <Clock size={22} />
          <span className="text-lg">Timeline</span>
        </button>

      
        <button className="flex items-center gap-2 text-[#5a6b7d] font-medium hover:text-[#2d4f3e] transition-colors">
          <LineChart size={22} />
          <span className="text-lg">Stats</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;