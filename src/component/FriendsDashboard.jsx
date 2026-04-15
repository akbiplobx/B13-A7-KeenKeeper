const FriendsDashboard = ({ friends }) => {
  // for avoid erorr
  if (!friends || friends.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Your Friends</h2>
      
      {/* grid lauout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <div 
            key={friend.id} 
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Profile pic */}
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-50"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} // ছবি লোড না হলে ব্যাকআপ
            />

            <h3 className="text-lg font-bold text-gray-900">{friend.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{friend.days_since_contact}d ago</p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {friend.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* status */}
            <div className={`mt-auto px-6 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider ${
              friend.status === 'overdue' ? 'bg-red-500' : 
              friend.status === 'almost due' ? 'bg-orange-400' : 
              'bg-emerald-600'
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