import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
  return (<>
   
    <Router basename="/Company_Page">
    <Navbar />
        <Switch>
          <Route path="/" extract Component={<Home />} />
          <Route path="/AboutPage" extract Component={<AboutPage />} />
          <Route path="/ServicePage" extract Component={<ServicePage />} />
          <Route path="/TeamPage" extract Component={<TeamPage />} />
          <Route path="/CareerPage" extract Component={<CareerPage />} />
          <Route path="/ContactPage" extract Component={<ContactPage />} />
        </Switch>
       <Footer/>
    </Router>
    </>
  );
};

export default App;