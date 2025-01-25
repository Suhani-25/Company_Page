import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Values from "../components/values";
import shivsysSwiper from "../components/shivsysSwiper";
import Career from "../components/career";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Jeeva Markam",
      position: "CEO",
      text: "Shivsys Inc. is quick to identify larger problems with the software, allowing us to expand our scope effectively.",
      image: "/assets/img/Dummy1.jpeg",
    },
    {
      name: "Jane Smith",
      position: "Marketing Director at InnovateX",
      text: "The business strategy solutions provided by Shivsys have revolutionized our approach to growth. Their insights and expertise are invaluable.",
      image: "/assets/img/Dummy2.jpeg",
    },
    {
      name: "David Brown",
      position: "CTO at DevSolutions",
      text: "Shivsys's software development team took our project to the next level. They understood our needs and delivered beyond our expectations.",
      image: "/assets/img/Dummy3.jpeg",
    },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section
      className={`bg-white pt-4 md:pt-8 px-6 md:px-16 lg:px-24 text-blue-950 ${
        isVisible ? "animate-fallDown" : "opacity-0"
      }`}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto items-center justify-center flex flex-col relative mt-0">
        <div className="w-full h-[60vh] md:h-[70vh] lg:h-screen bg-cover bg-center rounded-lg filter blur-sm"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-20 rounded-lg">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-blue-800 mb-6">
            Your Digital Partners
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 leading-relaxed mb-6 px-4">
          Shivsys offering solutions that transform ideas into reality. Our expertise spans software development, hardware design, and providing personalized strategies for businesses to excel in a competitive landscape. Collaborate with us to experience the fusion of creativity, technology, and reliability. With dedicated teams passionate about excellence, we are committed to delivering values, innovations, and an unmatched experience for our clients.
          </p>
          <button
            onClick={() => console.log("Get Started button clicked!")}
            className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center"
          >
            Get Started With Us
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967L14.7574 0.696699C14.4645 0.403806 13.9896 0.403806 13.6967 0.696699C13.4038 0.989593 13.4038 1.46447 13.6967 1.75736L17.9393 6L13.6967 10.2426C13.4038 10.5355 13.4038 11.0104 13.6967 11.3033C13.9896 11.5962 14.4645 11.5962 14.7574 11.3033L19.5303 6.53033ZM0.5 6.75L19 6.75V5.25L0.5 5.25L0.5 6.75Z"
                fill="#FFB6C1"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-8">
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/img/collage.png"
            alt="Description of Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-4">
            Re-Invent Ideas Into Reality
          </h1>
          <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-4">
            Innovation For Future
          </h3>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            At the crossroads of creativity and technology, we specialize in
            turning your ideas into tangible solutions. Our unique approach
            merges forward-thinking innovation, cutting-edge design, and
            unparalleled expertise to craft impactful products that drive your
            business forward.
          </p>
        </div>
      </div>

      <Values />

      <shivsysSwiper />

      {/* Testimonial Section */}
      <div className="w-full bg-white py-12 mt-8">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700 text-center mb-10 leading-normal">
          What Our Clients Say
        </h2>
        <div className="w-3/4 mx-auto shadow-xl py-6 bg-white rounded-lg">
          <Slider {...testimonialSliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="w-24 h-24 mb-4 overflow-hidden rounded-full border-4 border-indigo-700 mx-auto">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s picture`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-blue-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 italic">{testimonial.position}</p>
                <p className="text-gray-700 mt-4">{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
        <career />
      </div>
    </section>
  );
};

export default AboutPage;
