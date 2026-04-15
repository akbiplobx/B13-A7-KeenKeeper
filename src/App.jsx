import { useState, useEffect } from 'react';
import Banner from './component/Banner';
import Navbar from './component/NavBar';
import StatsCards from './component/StatsCards';
import Footer from './component/Footer';
import FriendsDashboard from './component/FriendsDashboard';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // public/friends.json data fetch
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <StatsCards />
      
     {/* loading animation */}
{loading ? (
  <div className="flex flex-col justify-center items-center h-64 gap-4">
    {/* DaisyUI Spinner */}
    <span className="loading loading-spinner loading-lg text-primary"></span>
    <p className="text-xl font-semibold text-gray-500">Loading Friends...</p>
  </div>
) : (
  <FriendsDashboard friends={friends} />
)}
      
      <Footer />
    </div>
  );
};

export default App;