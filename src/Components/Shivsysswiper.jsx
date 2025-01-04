import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShivsysSwiper = () => {
  const settings = {
    dots: false, // No navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 10000, // Control overall scrolling speed (lower is faster)
    slidesToShow: 5, // Show three companies at a time
    slidesToScroll: 2, // Scroll two slides at a time
    autoplay: true, // Automatically play the swiper
    autoplaySpeed: 0, // Continuous autoplay without pause
    cssEase: "linear", // Smooth continuous transition
    centerMode: false, // Disable centering the active slide (to reduce gaps)
  };

  const companies = [
    {
      name: "MagicBricks",
      logo: "src/assets/img/mb.png",
    },
    {
      name: "StrategicERP",
      logo: "src/assets/img/StrategicERP.png",
    },
    {
      name: "NSE",
      logo: "src/assets/img/NSE.png",
    },
    {
      name: "NTT Data",
      logo: "src/assets/img/NTT.png",
    },
    {
      name: "Witqualis",
      logo: "src/assets/img/Witqualis.png",
    },
    {
      name: "Rivian",
      logo: "src/assets/img/Rivan.png",
    },
    {
      name: "CarsDekho",
      logo: "src/assets/img/CarDekho.png",
    },
    {
      name: "Yokogawa",
      logo: "src/assets/img/Yokogawa.png"
    },
    {
      name: "QSpear",
      logo: "src/assets/img/Qspear.png"
    },
    {
      name: "W3r",
      logo: "src/assets/img/w3r.png"
    },
    {
      name: "Systegration",
      logo: "src/assets/img/Systegration.png"
    },
    {
      name: "TechMe",
      logo: "src/assets/img/Techme.png"
    },    {
      name: "Sample Junction",
      logo: "src/assets/img/Samplejunction.png"
    },


  ];

  // Duplicate slides for seamless looping
  const extendedCompanies = [...companies, ...companies];

  return (
    <div className="w-full bg-white py-8">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-900 to-sky-500">
        Global Companies Trust Us
      </h2>
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {extendedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="w-32 h-32 mx-auto transform transition-transform duration-300 hover:scale-125 group-hover:shadow-xl"
              />
              <h3 className="text-xl font-semibold mt-4 text-blue-900">
                {company.name}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShivsysSwiper;
