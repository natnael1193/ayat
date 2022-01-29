import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './assets/vendor/animate.css/animate.min.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/css/style.css'

import "./assets/js/main.js"

import Header from './Components/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './Components/Footer';
import PropertyDetail from './Pages/PropertyDetail';
import HomeCarousel from './Components/HomeCarousel';



const Routing = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/about" element={<HomeCarousel />} /> */}
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/portofolio-detail" element={<PortofolioDetail />} /> */}
     <Route path="/propertyDetail" element={<PropertyDetail/>} />
    </Routes>
  )
};


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routing />
        {/* <Footer /> */}
      </BrowserRouter>
     
      <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
