import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner"; 
import StatsCards from "./components/StatsCards"; 
import FriendsDashboard from "./components/FriendsDashboard";
import FriendDetails from "./components/FriendDetails"; 
import Timeline from "./components/Timeline"; 
import FriendshipAnalytics from "./components/FriendshipAnalytics";
import NotFound from "./components/NotFound"; // Import 404
import friendsData from "./data/friends.json"; 

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
      type,
      with: friendName,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      icon: type === 'Call' ? '📞' : type === 'Text' ? '💬' : '📧'
    };
    setTimelineEvents([newEvent, ...timelineEvents]); 

    setToastConfig({ show: true, message: `${type} with ${friendName} logged!` });

    // 5 seconds timer to match your animation request
    setTimeout(() => {
      setToastConfig({ show: false, message: "" });
    }, 5000);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] relative overflow-x-hidden">
        <Navbar />

        {/* Custom Animated Toast with Progress Bar */}
        {toastConfig.show && (
          <div className="fixed top-5 right-5 z-[150] pointer-events-none">
            <div className="relative bg-[#1a4a3e] text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 animate-toast min-w-[320px]">
              <div className="bg-white/20 p-2 rounded-full text-xl flex items-center justify-center">✅</div>
              <div>
                <p className="font-bold text-[15px] leading-tight text-white">Action Logged</p>
                <p className="text-white/80 text-[13px]">{toastConfig.message}</p>
              </div>
              {/* Progress bar line */}
              <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full rounded-b-2xl overflow-hidden">
                <div className="h-full bg-white animate-progress"></div>
              </div>
            </div>
          </div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friend/:id" element={<FriendDetails friends={friendsData} onAction={handleContactAction} />} />
            <Route path="/timeline" element={<Timeline events={timelineEvents} />} />
            <Route path="/stats" element={<FriendshipAnalytics events={timelineEvents} />} />
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;