import { useState, useEffect } from "react"; // Added hooks
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const FriendshipAnalytics = ({ events }) => {
  // Loading state management
  const [isLoading, setIsLoading] = useState(true);

  // Simulate chart data processing time
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  
  // Count frequency of each event type
  const dataMap = events.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {});

  // Convert object to array for Recharts
  const chartData = Object.keys(dataMap).map(key => ({
    name: key,
    value: dataMap[key]
  }));

  // Define chart segment colors
  const COLORS = ['#8b5cf6', '#1a4a3e', '#34d399', '#facc15'];

  // Loading spinner UI
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="w-10 h-10 border-4 border-[#1a4a3e] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto p-10 font-['Inter']">
      <h1 className="text-[40px] font-[800] text-[#1a2e35] mb-8 font-['Manrope']">Friendship Analytics</h1>
      
      {/* Chart visualization card */}
      <div className="bg-white p-10 rounded-[25px] border border-gray-100 shadow-sm">
        <h3 className="text-[#1a4a3e] font-bold text-lg mb-6">By Interaction Type</h3>
        
        <div className="h-[400px] w-full">
          {/* Responsive chart container */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {/* Apply custom colors to segments */}
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FriendshipAnalytics;