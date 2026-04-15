import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner"; 
import StatsCards from "./components/StatsCards"; 
import FriendsDashboard from "./components/FriendsDashboard";
import FriendDetails from "./components/FriendDetails"; 
import friendsData from "./data/friends.json"; 
import Timeline from "./components/Timeline"; 
import FriendshipAnalytics from "./components/FriendshipAnalytics";

// Main landing page layout
const Home = () => {
  return (
    <>
      <Banner />
      <StatsCards />
      <FriendsDashboard friends={friendsData} />
    </>
  );
};

function App() {
  // Store interaction history
  const [timelineEvents, setTimelineEvents] = useState([
    { id: 1, type: 'Meetup', with: 'Tom Baker', date: 'March 29, 2026', icon: '🤝' },
    { id: 2, type: 'Text', with: 'Sarah Chen', date: 'March 28, 2026', icon: '💬' },
    { id: 3, type: 'Meetup', with: 'Olivia Martinez', date: 'March 26, 2026', icon: '🤝' }
  ]);

  // Log new contact activity
  const handleContactAction = (type, friendName) => {
    const newEvent = {
      id: Date.now(),
      type: type,
      with: friendName,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      icon: type === 'Call' ? '📞' : type === 'Text' ? '💬' : '📧'
    };
    setTimelineEvents([newEvent, ...timelineEvents]); 
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main routes setup */}
            <Route path="/" element={<Home />} />
           
            <Route 
              path="/friend/:id" 
              element={<FriendDetails friends={friendsData} onAction={handleContactAction} />} 
            />
            
            <Route 
              path="/timeline" 
              element={<Timeline events={timelineEvents} />} 
            />
            
            <Route path="/stats" element={<FriendshipAnalytics events={timelineEvents} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;