import React, { useState, useEffect } from "react";

const ShivsysCarousel = () => {
  const qualities = [
    {
      title: "Innovation",
      description: "We thrive on creating cutting-edge solutions tailored for your needs.",
      icon: "💡",
    },
    {
      title: "Reliability",
      description: "Delivering consistent and dependable results every time.",
      icon: "✅",
    },
    {
      title: "Customer Focus",
      description: "Your success is our priority, and we ensure satisfaction at every step.",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "Striving for perfection in everything we do.",
      icon: "🏆",
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally conscious and sustainable solutions.",
      icon: "🌱",
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
    <div className="w-full bg-gradient-to-r from-pink-50 via-blue-200 to-pink-50 py-12 mt-16 mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 drop-shadow-lg">
        Why Choose Shivsys?
      </h2>
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
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
              className="w-full flex-shrink-0 flex flex-col items-center text-center p-8"
            >
              <div className="text-6xl mb-4">{quality.icon}</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                {quality.title}
              </h3>
              <p className="text-blue-950">{quality.description}</p>
            </div>
          ))}
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {qualities.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-200" : "bg-gray-100"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShivsysCarousel;
