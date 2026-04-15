const StatsCards = () => {
  const stats = [
    { label: 'Total Friends', value: 10 },
    { label: 'On Track', value: 3 },
    { label: 'Need Attention', value: 6 },
    { label: 'Interactions This Month', value: 12 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-10">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105"
        >
       
          <h2 className="text-4xl font-bold text-[#1a3a32] mb-2">
            {stat.value}
          </h2>
        
          <p className="text-[#64748b] font-medium text-center">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;