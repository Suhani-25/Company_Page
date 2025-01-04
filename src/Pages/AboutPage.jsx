import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Defining the values array
const values = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and technology to create innovative solutions that drive business growth.",
    image:"",
      
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest standards of integrity in all our actions, ensuring trust and long-lasting relationships.",
      image:"",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, delivering results that exceed client expectations.",
    image:"",
  },
  {
    title: "Trust",
    description:
      "We known for trust in everything we do, delivering results that exceed client expectations.",
    image:"",
  },
  {
    title: "Security",
    description:
      "We strive for excellence in everything we do, delivering results that exceed client expectations.",
    image:"",
  },
];

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const Clients = [
    {
      title: "CarsDekho",
      description:
        "Delivering excellence through rigorous quality assurance. Our QA services ensure your products meet the highest standards, enhancing user satisfaction and reliability.",
      link: "/quality_engineering",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-indigo-700 group-hover:text-indigo-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m-7 8h8a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

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

  const extendedCompanies = [...companies, ...companies];

  const testimonials = [
    {
      name: "Jeeva Markam",
      position: "CEO",
      text: "Shivsys Inc. is quick to identify larger problems with the software, allowing us to expand our scope effectively.",
      image: "/assets/img/john_doe.jpg", // Corrected image path
    },
    {
      name: "Jane Smith",
      position: "Marketing Director at InnovateX",
      text: "The business strategy solutions provided by Shivsys have revolutionized our approach to growth. Their insights and expertise are invaluable.",
      image: "/assets/img/jane_smith.jpg", // Corrected image path
    },
    {
      name: "David Brown",
      position: "CTO at DevSolutions",
      text: "Shivsys's software development team took our project to the next level. They understood our needs and delivered beyond our expectations.",
      image: "/assets/img/david_brown.jpg", // Corrected image path
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

  const valuesSliderSettings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
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

  // Dummy handleSubmit function if needed
  const handleSubmit = () => {
    // Logic for handling the button click
    console.log("Get Started button clicked!");
  };

  return (
    <section
      className={`bg-gradient-to-r from-pink-100 via-blue-100 to-pink-200 py-12 px-6 md:px-16 lg:px-24 text-white ${isVisible ? "animate-fallDown" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto items-center justify-center flex flex-col mt-48 mb-56">
        <div className="animate-slideLeft flex flex-col justify-center items-center text-center">
        <div className="w-full lg:w-1/2 -ml-14">
          <img
            src="/src/assets/img/collage.png" // Corrected image path
            alt="Description of Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
            Your Digital Partners
          </h2>
          <p className="text-lg font-bold text-indigo-700 leading-relaxed mb-6">
            Shivsys offering solutions that transform ideas into reality. Our expertise spans software development, hardware design, and providing personalized strategies for businesses to excel in a competitive landscape. Collaborate with us to experience the fusion of creativity, technology, and reliability.
            With dedicated teams passionate about excellence, we are committed to delivering values, innovations, and an unmatched experience for our clients.
          </p>
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex item-center justify-center"
            href="/ContactPage"
          >
            Get Started With Us
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" ml-2 my-2"
            >
              <path
                d="M19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967L14.7574 0.696699C14.4645 0.403806 13.9896 0.403806 13.6967 0.696699C13.4038 0.989593 13.4038 1.46447 13.6967 1.75736L17.9393 6L13.6967 10.2426C13.4038 10.5355 13.4038 11.0104 13.6967 11.3033C13.9896 11.5962 14.4645 11.5962 14.7574 11.3033L19.5303 6.53033ZM0.5 6.75L19 6.75V5.25L0.5 5.25L0.5 6.75Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-8 mb-36">
        <div className="w-full lg:w-1/2 -ml-14">
          <img
            src="/src/assets/img/collage.png" // Corrected image path
            alt="Description of Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Re-Invent Ideas Into Reality
          </h1>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">We Build. Your Innovations.</h3>
          <p className="text-lg text-indigo-700 leading-relaxed">
            We work at the intersection of creativity and technology to bring your ideas to life. Our approach blends innovation, design, and expertise to deliver impactful solutions that accelerate your business growth.
          </p>
        </div>
      </div>

      {/* Values Carousel */}
      <div className="w-full bg-gray-100 py-12 mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Our Values</h2>
        
          <Slider {...valuesSliderSettings}>
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-lg text-gray-700">{value.description}</p>
              </div>
            ))}
          </Slider>
        
      </div>
    
      {/* Companies Swiper */}
      <div className="w-full bg-blue-100 py- mt-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Trusted By Global Leaders</h2>
         <h3 className="text-xl font-semibold text-center text-blue-900">Their Trust for us,is the foundation of Our Success.  </h3>
      <div className="w-3/4 mx-auto">
          <Slider {...sliderSettings}>
            {extendedCompanies.map((company, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="w-32 h-32 mx-auto transform transition-transform duration-300 hover:scale-125 group-hover:shadow-xl"
                />
                <h3 className="text-xl font-semibold mt-4 text-blue-900">{company.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Clients Section */}
      <div className="w-full bg-blue-200 py-8 mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Our Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              {client.icon}
              <h3 className="text-xl font-semibold mt-4 text-blue-900">{client.title}</h3>
              <p className="text-gray-700 mt-2">{client.description}</p>
              <a href={client.link} className="text-indigo-700 hover:underline mt-4">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>


      {/* Testimonial Section */}
      <div className="w-full bg-blue-100 py-12 mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">What Our Clients Say</h2>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700"> About Us</h2>
        <div className="w-3/4 mx-auto">
          <Slider {...testimonialSliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s picture`}
                  className="w-24 h-24 rounded-full border-4 border-indigo-700"
                />
                <h3 className="text-xl font-semibold mt-4 text-blue-900">{testimonial.name}</h3>
                <p className="text-gray-700 italic">{testimonial.position}</p>
                <p className="text-gray-700 mt-4">{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
