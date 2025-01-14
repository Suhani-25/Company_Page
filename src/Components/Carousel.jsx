import React, { useState, useEffect } from "react";
import Innovation from "/public/img/Innovation.png";
import reliabilty from "/public/img/reliabilty.png";
import Excellent from "/public/img/Excellent.png";
import CustomerFocus from "/public/img/CustomerFocus.jpg";
import sustainability from "/public/img/sustainability.avif";

const ShivsysCarousel = () => {
  const qualities = [
    {
      title: "Innovation",
      description: "We thrive on creating cutting-edge solutions tailored for your needs.",
      icon: "💡",
      backgroundImage: {Innovation},
    },
    {
      title: "Reliability",
      description: "Delivering consistent and dependable results every time.",
      icon: "✅",
      backgroundImage: {reliabilty},
    },
    {
      title: "Customer Focus",
      description: "Your success is our priority, and we ensure satisfaction at every step.",
      icon: "🤝",
      backgroundImage: {CustomerFocus},
    },
    {
      title: "Excellence",
      description: "Striving for perfection in everything we do.",
      icon: "🏆",
      backgroundImage: {Excellent},
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally conscious and sustainable solutions.",
      icon: "🌱",
      backgroundImage: {sustainability},
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % qualities.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [qualities.length]);

  return (
    <div className="w-full bg-white py-8 mt-12 mb-12 px-4 sm:px-8 md:px-16">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-900 drop-shadow-lg">
        Why Choose Shivsys?
      </h2>
      <div className="relative w-full max-w-screen-md mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center text-center p-4 relative"
              style={{
                minHeight: "250px", // Keep card height consistent
              }}
            >
              {/* Blurred Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${quality.backgroundImage})`,
                  filter: "blur(1px)", // Adjust blur effect
                  opacity: 0.5, // Adjust opacity for background dimming
                }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="bg-transparent rounded-full p-3 mb-3 text-4xl ">
                  {quality.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2 drop-shadow-md bg-transparent p-2 rounded-md">
                  {quality.title}
                </h3>
                <p className="text-blue-800 text-sm drop-shadow-sm bg-transparent p-2 rounded-md">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {qualities.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-blue-400" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShivsysCarousel;
