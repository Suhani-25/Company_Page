import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShivsysSwiper = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered logo

  const settings = {
    dots: false,
    infinite: true, // Infinite loop for continuous scrolling
    speed: 3000, // Speed of the swipe (this is how fast the logo moves)
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set it to 0 for continuous motion
    cssEase: "linear", // Smooth continuous transition
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const companies = [
    { name: "Magic Bricks", logo: "/assets/img/mb.png", link: "https://www.magicbricks.com/" },
    { name: "Strategic ERP", logo: "/assets/img/StrategicERP.png", link: "https://strategicerp.com/" },
    { name: "NSE", logo: "/assets/img/NSE.png", link: "https://www.nseindia.com/" },
    { name: "NTT Data", logo: "/assets/img/NTT.png", link: "https://www.nttdata.com/global/en/" },
    { name: "Witqualis", logo: "/assets/img/Witqualis.png", link: "https://witqualis.com/" },
    { name: "Rivian", logo: "/assets/img/Rivan.png", link: "https://rivian.com/" },
    { name: "CarDekho", logo: "/assets/img/CarDekho.png", link: "https://www.cardekho.com/" },
    { name: "Yokogawa", logo: "/assets/img/Yokogawa.png", link: "https://www.yokogawa.com/in/" },
    { name: "Qspear", logo: "/assets/img/Qspear.png", link: "" },
    { name: "W3R", logo: "/assets/img/w3r.png", link: "https://w3r.com/" },
    { name: "Systegration", logo: "/assets/img/Systegration.png", link: "https://systegration.com/" },
    { name: "Techme", logo: "/assets/img/Techme.png", link: "" },
    { name: "Sample Junction", logo: "/assets/img/Samplejunction.png", link: "https://www.samplejunction.com/" },
  ];

  return (
    <div className="w-full max-w-full mx-auto bg-white py-8 rounded-lg shadow-gray-700 border-2 border-gray-200 overflow-x-hidden mb-10">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-900 to-sky-500">
        Global Companies Trust Us
      </h1>
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered logo on hover
              onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
            >
              {/* Wrapping the logo in a clickable <a> tag */}
              <a href={company.link} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="w-28 h-28 mx-auto transform transition-transform duration-300 hover:scale-110 group-hover:shadow-xl" // Adjusted the width and height, and hover scale to 110%
                />
              </a>
              
              {/* Show company name only when hovered */}
              {hoveredIndex === index && (
                <>
                  <h3 className="text-xl font-semibold mt-4 text-blue-900">{company.name}</h3>
                </>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShivsysSwiper;
