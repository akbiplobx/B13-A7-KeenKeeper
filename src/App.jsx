import Banner from './component/Banner'
import Navbar from './component/NavBar'
import StatsCards from './component/StatsCards'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsCards></StatsCards>
      <Footer></Footer>
    </div>
  )
}

export default App
