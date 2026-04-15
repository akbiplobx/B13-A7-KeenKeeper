import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner"; 
import StatsCards from "./components/StatsCards"; 
import FriendsDashboard from "./components/FriendsDashboard";
import friendsData from "./data/friends.json"; 


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
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            
            <Route path="/" element={<Home />} />
            
           
            <Route path="/timeline" element={<div>Timeline Coming Soon...</div>} />
            <Route path="/stats" element={<div>Detailed Stats Coming Soon...</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;