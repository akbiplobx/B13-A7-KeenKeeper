import { useParams } from 'react-router-dom';
import { Phone, MessageSquare, Video, Bell, Archive, Trash2 } from 'lucide-react';

const FriendDetails = ({ friends, onAction }) => {
  const { id } = useParams();
  const friend = friends.find(f => f.id == id);

  if (!friend) return <div className="p-20 text-center font-inter">Friend not found!</div>;

  return (
    <div className="max-w-[1100px] mx-auto p-4 md:p-8 bg-[#f8fafc] font-['Inter']">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src={friend.picture} 
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white shadow-sm" 
              alt={friend.name} 
            />
            <h2 className="text-[22px] font-[800] text-[#1a2e35] mb-2 font-['Manrope']">{friend.name}</h2>
            <div className="flex flex-col gap-2 mb-4">
              <span className="bg-[#ff4d4d] text-white px-4 py-1 rounded-full text-[10px] font-[800] uppercase">{friend.status}</span>
              <span className="bg-[#dcfce7] text-[#166534] px-4 py-1 rounded-full text-[10px] font-[800] uppercase">{friend.tags[0]}</span>
            </div>
            <p className="text-[#64748b] italic text-[14px] mb-1">"Former colleague, great mentor"</p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <button className="w-full bg-white py-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-3 text-[#1a2e35] font-[700] text-[14px] hover:bg-gray-50 transition-all">
              <Bell size={16} /> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white py-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-3 text-[#ff4d4d] font-[700] text-[14px] hover:bg-red-50 transition-all">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>

       
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
              <h4 className="text-[36px] font-[800] text-[#1a4a3e] mb-2">{friend.days_since_contact}</h4>
              <p className="text-[#64748b] text-[12px] font-[600]">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
              <h4 className="text-[36px] font-[800] text-[#1a4a3e] mb-2">30</h4>
              <p className="text-[#64748b] text-[12px] font-[600]">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm flex flex-col justify-center">
              <h4 className="text-[20px] font-[800] text-[#1a4a3e]">Feb 27, 2026</h4>
              <p className="text-[#64748b] text-[12px] font-[600]">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
            <h3 className="text-[#1a2e35] text-[16px] font-[800] mb-6 font-['Manrope']">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => onAction('Call', friend.name)} className="py-6 bg-[#f8fafc] rounded-[15px] flex flex-col items-center gap-3 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all">
                <Phone className="text-[#1a2e35]" size={22} />
                <span className="text-[#1a2e35] font-[700] text-[13px]">Call</span>
              </button>
              <button onClick={() => onAction('Text', friend.name)} className="py-6 bg-[#f8fafc] rounded-[15px] flex flex-col items-center gap-3 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all">
                <MessageSquare className="text-[#1a2e35]" size={22} />
                <span className="text-[#1a2e35] font-[700] text-[13px]">Text</span>
              </button>
              <button onClick={() => onAction('Video', friend.name)} className="py-6 bg-[#f8fafc] rounded-[15px] flex flex-col items-center gap-3 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all">
                <Video className="text-[#1a2e35]" size={22} />
                <span className="text-[#1a2e35] font-[700] text-[13px]">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;