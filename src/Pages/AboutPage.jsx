import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Values from "../Components/Values.jsx";
import ShivsysSwiper from "../Components/Shivsysswiper.jsx";
import Career from "../Components/Career.jsx";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);

  const solutions = [
    {
      title: "Software Development",
      description:
        "We develop innovative software solutions tailored to meet your unique business needs, from custom apps to enterprise systems.",
    },
    {
      title: "Hardware Design",
      description:
        "Our hardware design services ensure cutting-edge products with optimal performance, durability, and scalability.",
    },
    {
      title: "Business Strategy",
      description:
        "We offer personalized business strategies to help organizations grow, innovate, and excel in a competitive landscape.",
    },
  ];

  const testimonials = [
    {
      name: "Jeeva Markam",
      position: "CEO",
      text: "Shivsys Inc. is quick to identify larger problems with the software, allowing us to expand our scope effectively.",
      image: "/src/assets/img/Dummy1.jpeg", // Corrected image path
    },
    {
      name: "Jane Smith",
      position: "Marketing Director at InnovateX",
      text: "The business strategy solutions provided by Shivsys have revolutionized our approach to growth. Their insights and expertise are invaluable.",
      image: "/src/assets/img/Dummy2.jpeg", // Corrected image path
    },
    {
      name: "David Brown",
      position: "CTO at DevSolutions",
      text: "Shivsys's software development team took our project to the next level. They understood our needs and delivered beyond our expectations.",
      image: "/src/assets/img/Dummy3.jpeg", // Corrected image path
    },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: false,
  };

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length); // Loop back to the first slide after the last
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length); // Loop to the last slide if moving back
  };

  const toggleImageExpansion = (image) => {
    if (expandedImage === image) {
      setExpandedImage(null); // If the clicked image is already expanded, collapse it
    } else {
      setExpandedImage(image); // Set the clicked image as expanded
    }
  };

  // Dummy handleSubmit function if needed
  const handleSubmit = () => {
    // Logic for handling the button click
    console.log("Get Started button clicked!");
  };

  return (
    <section
      className={`bg-white py-12 px-6 md:px-16 lg:px-24 text-blue-950 ${isVisible ? "animate-fallDown" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto items-center justify-center flex flex-col mt-0 mb-52 relative">
        <div
          className="w-full h-[80vh] lg:h-screen bg-cover bg-center rounded-lg filter blur-sm"
          style={{ backgroundImage: "url('/src/assets/img/')" }}
        ></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-20 rounded-lg">
          <h2 className="text-7xl font-extrabold text-blue-800 mb-10">Your Digital Partners</h2>
          <p className="text-xl font-semibold text-gray-900 leading-relaxed mb-6 px-4">
            Shivsys offering solutions that transform ideas into reality. Our expertise spans software development, hardware design, and providing personalized strategies for businesses to excel in a competitive landscape. Collaborate with us to experience the fusion of creativity, technology, and reliability. With dedicated teams passionate about excellence, we are committed to delivering values, innovations, and an unmatched experience for our clients.
          </p>
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center"
            href="/ContactPage"
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

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between -mt-40 mb-26">
        <div className="w-full lg:w-1/2 -ml-14">
          <img
            src="/src/assets/img/collage.png" // Corrected image path
            alt="Description of Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-7xl font-bold text-blue-900 mt-6 mb-4">Re-Invent Ideas Into Reality</h1>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Innovation For Future</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            At the crossroads of creativity and technology, we specialize in turning your ideas into tangible solutions. Our unique approach merges forward-thinking innovation, cutting-edge design, and unparalleled expertise to craft impactful products that drive your business forward. We empower you to navigate the future, unlocking new growth opportunities and ensuring your success in an ever-evolving landscape.
          </p>
        </div>
      </div>
      <div><Values/></div>

      
{/* company Section starts */}
     <ShivsysSwiper/>
{/* Process Section ends */}
      
      {/* Testimonial Section */}
      <div className="w-full bg-white py-12 mt-12">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700 text-center animate-textColorChange mb-10 font-custom leading-normal">What Our Clients Say</h2>
        <div className="w-3/4 mx-auto shadow-xl py-6 bg-white rounded-lg">
  <Slider {...testimonialSliderSettings}>
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center p-6 bg-white rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <div className="w-24 h-24 mb-4 flex items-center justify-center overflow-hidden rounded-full border-4 border-indigo-700 mx-auto">
          <img
            src={testimonial.image}
            alt={`${testimonial.name}'s picture`}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl font-semibold mt-4 text-blue-900">{testimonial.name}</h3>
        <p className="text-gray-700 italic">{testimonial.position}</p>
        <p className="text-gray-700 mt-4">{testimonial.text}</p>
      </div>
    ))}
  </Slider>
</div>

<Career/>
      </div>
    </section>
  );
};

export default AboutPage;
