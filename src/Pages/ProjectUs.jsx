// src/Pages/ProjectPages.jsx
import React, { useState } from "react";

const ProjectUs = [
  {
    title: "Project 1: Software Development",
    description:
      "We developed a custom software solution that helps businesses manage inventory and improve logistics efficiency.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Project 2: Mobile App Development",
    description:
      "A custom mobile app built to improve user engagement and enhance business performance on Android and iOS platforms.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Project 3: Cloud Migration",
    description:
      "We assisted a major client in migrating their on-premise infrastructure to the cloud, improving scalability and security.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Project 4: Business Intelligence",
    description:
      "Our team implemented a business intelligence solution that helped the client make data-driven decisions and optimize operations.",
    imageUrl: "https://via.placeholder.com/300",
  },
];

function ProjectPages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ProjectUs.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ProjectUs.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Projects</h2>

        {/* Carousel container */}
        <div className="relative">
          {/* Slide */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src={ProjectUs[currentIndex].imageUrl}
              alt={ProjectUs[currentIndex].title}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              {ProjectUs[currentIndex].title}
            </h3>
            <p className="text-gray-700">{ProjectUs[currentIndex].description}</p>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            &gt;
          </button>
        </div>

        {/* Optionally, add pagination dots */}
        <div className="mt-4 flex justify-center space-x-2">
          {ProjectUs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectPages;
