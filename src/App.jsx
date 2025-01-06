import Navbar from './components/Navbar'
import './App.css'
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Team from './components/Team';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import Achievements from './components/Achivements';
import Verticals from './components/verticals';



function App() {

  return (
    <>
      <Navbar />
     <AboutUs/>
     <Events />
     <Verticals/>
     <Achievements />
     <Team />
     <ContactUs />
     <Footer/>
    </>
  );
}

export default App;







