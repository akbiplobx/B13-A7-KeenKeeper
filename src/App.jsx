import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner"; 
import StatsCards from "./components/StatsCards"; 
import FriendsDashboard from "./components/FriendsDashboard";
import FriendDetails from "./components/FriendDetails"; 
import friendsData from "./data/friends.json"; 
import Timeline from "./components/Timeline"; 
import FriendshipAnalytics from "./components/FriendshipAnalytics";

const Home = () => (
  <>
    <Banner />
    <StatsCards />
    <FriendsDashboard friends={friendsData} />
  </>
);

function App() {
  const [timelineEvents, setTimelineEvents] = useState([
    { id: 1, type: 'Meetup', with: 'Tom Baker', date: 'March 29, 2026', icon: '🤝' },
    { id: 2, type: 'Text', with: 'Sarah Chen', date: 'March 28, 2026', icon: '💬' },
    { id: 3, type: 'Meetup', with: 'Olivia Martinez', date: 'March 26, 2026', icon: '🤝' }
  ]);

  
  const [toastConfig, setToastConfig] = useState({ show: false, message: "" });

  const handleContactAction = (type, friendName) => {
    const newEvent = {
      id: Date.now(),
      type: type,
      with: friendName,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      icon: type === 'Call' ? '📞' : type === 'Text' ? '💬' : '📧'
    };
    setTimelineEvents([newEvent, ...timelineEvents]); 

   
    setToastConfig({ show: true, message: `${type} with ${friendName} logged!` });

    
    setTimeout(() => {
      setToastConfig({ show: false, message: "" });
    }, 3000);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] relative">
        <Navbar />

        {/* daisyUI Toast implementation */}
        {toastConfig.show && (
          <div className="toast toast-top toast-center z-[100] mt-4 animate-bounce">
            <div className="alert alert-success bg-[#1a4a3e] text-white border-none shadow-2xl rounded-2xl flex items-center gap-3">
              <div className="bg-white/20 p-1 rounded-full text-lg">✅</div>
              <span className="font-bold tracking-tight">{toastConfig.message}</span>
            </div>
          </div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friend/:id" element={<FriendDetails friends={friendsData} onAction={handleContactAction} />} />
            <Route path="/timeline" element={<Timeline events={timelineEvents} />} />
            <Route path="/stats" element={<FriendshipAnalytics events={timelineEvents} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;