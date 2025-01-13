import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import Carousel from "./Components/Carousel";
import Services from "./Components/Services";
import HireUs from "./Components/HireUs";
import ShivsysSwiper from "./Components/Shivsysswiper";
import Footer from "./Components/Footer";
import TeamPage from "./Pages/TeamPage";
import CareerPage from "./Pages/CareerPage";
import ContactPage from "./Pages/ContactPage";
import ServiceStack from "./Components/ServiceStack";

const Home = () => {
  return (
    <div className="home-container">
     <Herosection /> 
      <Carousel /> 
      <Services /> 
     <ServiceStack/>
      <ShivsysSwiper /> 
      <HireUs />
      
    </div>
  );
};

const App = () => {
  return (
    <Router>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/TeamPage" element={<TeamPage />} />
          <Route path="/CareerPage" element={<CareerPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
     
       <Footer/>
    </Router>
  );
};

export default App;
