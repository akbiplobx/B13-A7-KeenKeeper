import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import FriendsDashboard from "./components/FriendsDashboard";

import friendsData from "./data/friends.json"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Navbar />

        <main className="flex-grow">
          <Routes>
         
            <Route 
              path="/" 
              element={<FriendsDashboard friends={friendsData} />} 
            />
            
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;