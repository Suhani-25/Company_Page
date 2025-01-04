import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const services = [
    {
      title: "Mobile App Development",
      description:
        "We create innovative mobile apps tailored to your needs, ensuring seamless user experiences and cutting-edge features.",
      link: "/quality_engineering",
      icon: "src/assets/img/Mobile_App_Development.gif", // Ensure this path is correct
    },
    {
      title: "Software Testing Services",
      description:
        "Our rigorous testing processes guarantee that your software is reliable, efficient, and meets the highest quality standards.",
      icon: "src/assets/img/Software_Testing_Services.gif", // Ensure this path is correct
    },
    {
      title: "Web Design & Development",
      description:
        "Your website is your number one marketing asset in today’s digital age. We help you design and develop a website that is an extension of your brand and communicates your message effectively.",
      link: "/cloud_engineering",
      icon: "src/assets/img/Web_Design&Development.gif", // Ensure this path is correct
    },
    {
      title: "Development Services",
      description:
        "Innovative software development tailored to your needs. Our expert developers create cutting-edge applications that boost your business efficiency and growth.",
      link: "/development_services",
      icon: "src/assets/img/Development_Services.gif", // Ensure this path is correct
    },
    {
      title: "EduTech",
      description:
        "Creating cutting-edge solutions to revolutionize education. Our EduTech services ensure innovative approaches to learning and teaching.",
      link: "/edutech",
      icon: "src/assets/img/Ed_Tech.gif", // Ensure this path is correct
    },
    {
      title: "AI & Data Analytics",
      description:
        "Leverage the power of AI and analytics for smarter decision-making. Our services help you transform raw data into actionable insights for business success.",
      link: "/ai_data_analytics",
      icon: "src/assets/img/AI_Data_Analytics.gif", // Ensure this path is correct
    },
  ];

  
  // Event handlers for hover state on service buttons
  const handleHover = (index) => {
    setHoveredButton(index);
  };

  const handleLeave = () => {
    setHoveredButton(null);
  };

  const buttons = [
    "Custom Software Development",
    "Cloud Solutions",
    "Cybersecurity Services",
    "IT Consulting & Strategy",
    "Mobile App Development",
    "Data Analytics & Business Intelligence",
    "Digital Marketing",
    "Software Testing Services",
    "Web Design & Development",
    "Edu Tech",
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-900 font-serif mb-8">
          Shivsys Services
        </h2>
        <p className="text-lg text-indigo-950 font-semibold mb-16">
          Drive Growth and Innovations With Bespoke Solutions
        </p>

        {/* Centering buttons container in inverted cone shape */}
        <div className="flex justify-center items-center">
          <div className="grid gap-8">
            {/* First row (most buttons) */}
            <div className="flex justify-center space-x-4">
              {buttons.slice(0, 5).map((service, index) => (
                <button
                  key={index}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleLeave}
                  className={`service-button relative bg-white hover:bg-blue-200 text-indigo-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 overflow-hidden border-2 border-transparent ${
                    hoveredButton === index ? "scale-110" : ""
                  }`}
                >
                  <span
                    className={`absolute top-0 left-0 w-full h-full border-2 border-blue-600 transform transition-all duration-500 ${
                      hoveredButton === index ? "scale-100" : "scale-0"
                    }`}
                  ></span>
                  {service}
                </button>
              ))}
            </div>

            {/* Second row (fewer buttons) */}
            <div className="flex justify-center space-x-6">
              {buttons.slice(5, 9).map((service, index) => (
                <button
                  key={index}
                  onMouseEnter={() => handleHover(index + 5)}
                  onMouseLeave={handleLeave}
                  className={`service-button relative bg-white hover:bg-blue-200 text-indigo-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 overflow-hidden border-2 border-transparent ${
                    hoveredButton === index + 5 ? "scale-110" : ""
                  }`}
                >
                  <span
                    className={`absolute top-0 left-0 w-full h-full border-2 border-blue-600 transform transition-all duration-500 ${
                      hoveredButton === index + 5 ? "scale-100" : "scale-0"
                    }`}
                  ></span>
                  {service}
                </button>
              ))}
            </div>

            {/* Third row (even fewer buttons) */}
            <div className="flex justify-center space-x-8">
              {buttons.slice(9, 11).map((service, index) => (
                <button
                  key={index}
                  onMouseEnter={() => handleHover(index + 9)}
                  onMouseLeave={handleLeave}
                  className={`service-button relative bg-white hover:bg-blue-200 text-indigo-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 overflow-hidden border-2 border-transparent ${
                    hoveredButton === index + 9 ? "scale-110" : ""
                  }`}
                >
                  <span
                    className={`absolute top-0 left-0 w-full h-full border-2 border-blue-600 transform transition-all duration-500 ${
                      hoveredButton === index + 9 ? "scale-100" : "scale-0"
                    }`}
                  ></span>
                  {service}
                </button>
              ))}
            </div>

            {/* Fourth row (least buttons) */}
            <div className="flex justify-center space-x-10">
              {buttons.slice(11).map((service, index) => (
                <button
                  key={index}
                  onMouseEnter={() => handleHover(index + 11)}
                  onMouseLeave={handleLeave}
                  className={`service-button relative bg-white hover:bg-blue-200 text-indigo-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 overflow-hidden border-2 border-transparent ${
                    hoveredButton === index + 11 ? "scale-110" : ""
                  }`}
                >
                  <span
                    className={`absolute top-0 left-0 w-full h-full border-2 border-blue-600 transform transition-all duration-500 ${
                      hoveredButton === index + 11 ? "scale-100" : "scale-0"
                    }`}
                  ></span>
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="relative bg-white rounded-lg p-6 w-full h-auto mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 group animate-fadeInUp delay-150 flex flex-col items-center justify-center border-2 border-teal-200 hover:border-teal-400"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white group-hover:bg-pink-50 transition-all duration-500 mb-4 shadow-lg ">
                <img
                  src={service.icon} // Make sure the image path is correct
                  alt={service.title}
                  className="w-8 h-8 object-contain group-hover:opacity-80 transition-opacity duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-indigo-800 text-center mb-2 group-hover:text-indigo-900 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-500">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      
{/* Cards End */}

      {/* Additional Sections (Optional) */}
      <section
        className={`bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 py-12 px-6 md:px-16 lg:px-24 text-white ${isVisible ? "animate-fallDown" : "opacity-0"}`}
      >
        {/* Other content (like Services List, Clients, etc.) */}
      </section>
    </section>
  );
};

// Technologies Section Component
const TechnologiesSection = () => {
  return (
    <div className="bg-blue-500 p-8">
      <h2 className="text-white text-2xl font-semibold mb-4">Technologies We Use for Data Engineering Services</h2>
      <p className="text-white mb-8">
        We use cloud environments, distributed processing frameworks, relational databases, and other advanced technologies to deliver comprehensive data engineering solutions. Our diverse tech stack ensures efficient data management, reliable analytics, and secure data handling.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Cloud Environment</h3>
          <h3 className="text-white text-lg font-semibold mb-2">Distributed Processing</h3>
          <h3 className="text-white text-lg font-semibold mb-2">Relational Database</h3>
          <h3 className="text-white text-lg font-semibold mb-2">NoSQL Database</h3>
          <h3 className="text-white text-lg font-semibold mb-2">Reporting & Dashboards</h3>
          <h3 className="text-white text-lg font-semibold mb-2">ELK Stack</h3>
          <h3 className="text-white text-lg font-semibold mb-2">Real-time Processing</h3>
          <h3 className="text-white text-lg font-semibold mb-2">Data Lakes</h3>
          <h3 className="text-white text-lg font-semibold mb-2">Big Data Storage</h3>
          <h3 className="text-white text-lg font-semibold mb-2">ML Platforms</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
