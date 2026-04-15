import { useState, useEffect } from "react";

const Timeline = ({ events }) => {
  
  // Track selected category filter
  const [filter, setFilter] = useState("All");
  // Loading state management
  const [isLoading, setIsLoading] = useState(true);

  // Fake loading effect for smooth transition
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Logic to narrow down events
  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(event => event.type === filter);

  // Loading spinner UI
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="w-10 h-10 border-4 border-[#1a4a3e] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto p-6 md:p-12 font-['Inter']">
      <h1 className="text-[40px] font-[800] text-[#1a2e35] mb-8 font-['Manrope']">Timeline</h1>
      
      {/* Dropdown for type selection */}
      <div className="mb-8">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white border border-gray-100 px-4 py-3 rounded-xl text-[#1a2e35] text-sm font-bold focus:outline-none shadow-sm w-56 cursor-pointer hover:border-gray-300 transition-all"
        >
          <option value="All">All interactions</option>
          <option value="Call">Calls only</option>
          <option value="Text">Texts only</option>
          <option value="Video">Videos only</option>
          <option value="Meetup">Meetups only</option>
        </select>
      </div>

      <div className="space-y-4">
        {/* Handle empty filter results */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white p-10 rounded-[20px] border border-dashed border-gray-200 text-center text-gray-400 font-medium">
            No {filter !== "All" ? filter : ""} interactions found.
          </div>
        ) : (
          /* Map through display items */
          filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white p-6 rounded-[20px] border border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-6 transition-transform hover:scale-[1.01]"
            >
              {/* Event icon display */}
              <div className="text-2xl bg-[#f8fafc] p-4 rounded-full w-14 h-14 flex items-center justify-center border border-gray-50">
                {event.icon}
              </div>
              <div>
                <p className="text-[16px] text-gray-500 font-medium">
                  <span className="font-bold text-[#1a4a3e]">{event.type}</span> with {event.with}
                </p>
                <p className="text-gray-400 text-[13px] font-semibold mt-1 uppercase tracking-wide">
                  {event.date}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;