const FriendsDashboard = ({ friends }) => {

  if (!friends || friends.length === 0) return null;

  return (
    <div className="max-w-[1400px] mx-auto p-12 bg-[#f8fafc]">
      <h2 className="text-2xl font-bold mb-10 text-[#1a2e35]">Your Friends</h2>
      
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {friends.map((friend) => (
          <div 
            key={friend.id} 
            className="bg-white rounded-[25px] p-8 flex flex-col items-center text-center transition-all cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-50"
          >
        
            <div className="mb-6">
              <img 
                src={friend.picture} 
                alt={friend.name} 
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-sm"
                onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
              />
            </div>

         
            <h3 className="text-xl font-bold text-[#1a2e35] mb-1">{friend.name}</h3>
            <p className="text-sm text-gray-400 mb-5">{friend.days_since_contact}d ago</p>

       
            <div className="mb-6 h-8 flex items-center justify-center">
              {friend.tags.length > 0 && (
                <span className="px-5 py-1.5 bg-[#dcfce7] text-[#166534] text-[11px] font-bold rounded-full uppercase tracking-widest">
                  {friend.tags.includes("WORK") ? "WORK" : friend.tags[0]}
                </span>
              )}
            </div>

          
            <div className={`w-full max-w-[150px] py-2.5 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md transition-colors ${
              friend.status === 'overdue' ? 'bg-[#ff3b3b]' : 
              friend.status === 'almost due' ? 'bg-[#f0ad4e]' : 
              'bg-[#1a4a3e]'
            }`}>
              {friend.status.replace('-', ' ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsDashboard;