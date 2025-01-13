import React, { useState, useEffect } from "react";
import Models from '../Components/Models.jsx';
import RelatedServices from "../Components/RelatedServices.jsx";

const ServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "IT Services",
      description: (
        <>
          <p>Comprehensive IT solutions, including training, digital marketing, and QA, to empower businesses and enhance competitiveness.</p>
        </>
      ),
      benefits: [
        "24/7 support and monitoring for seamless operations.",
        "Expert training in IT, digital marketing, and QA.",
        "Scalable solutions tailored to businesses of all sizes.",
        "Access to top industry professionals."
      ],
      icon: "/src/assets/img/ITservice.png"
    },
    {
      title: "Staff Augmentation",
      description: (
        <>
          <p>Specialized talent integration to scale businesses effectively with compliance, skilled recruiters, and cost-effective solutions.</p>
        </>
      ),
      benefits: [
        "Access to top talent with industry-best practices.",
        "Cost-efficient contingent staffing solutions.",
        "Dedicated support team for seamless execution.",
        "Enhanced efficiency in resource management."
      ],
      icon: "/src/assets/img/Staffagumentation.png"
    },
    {
      title: "Direct Hire Solutions",
      description: (
        <>
          <p>Streamlined hiring process to connect businesses with top talent quickly and efficiently.</p>
        </>
      ),
      benefits: [
        "Simplified recruitment process from start to finish.",
        "Thorough reference checks to ensure quality hires.",
        "Access to a vast network of skilled candidates.",
        "Time and cost savings through expert management."
      ],
      icon: "/src/assets/img/hired.png"
    },
    {
      title: "Technology Consulting",
      description: (
        <>
          <p>Expert IT consulting to align strategies, enhance security, and ensure smooth digital transformation.</p>
        </>
      ),
      benefits: [
        "Tailored IT solutions for business challenges.",
        "Guidance on digital transformation and strategy.",
        "Cost-effective resource optimization.",
        "Business continuity through disaster recovery expertise."
      ],
      icon: "/src/assets/img/consultation.png"
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="py-0">
      
      < div className="bg-gray-400 ">
      <h1 className="text-5xl font-extrabold text-blue-900 font-serif mb-8 text-center">
        Unlock the Future with Our Services
      </h1>
      <p className="text-lg text-indigo-950 font-semibold mb-6 text-center">
        Tailored Solutions to Drive Your Business Forward.<br />
        From cutting-edge mobile apps to AI-powered analytics, our expertise spans across various domains.
      </p>

      <p className="text-lg text-gray-700 mx-10 mb-16 text-center">
        At Shivsys, we are committed to providing innovative solutions that not only meet your needs but also exceed your expectations. Whether you're looking for a complete digital transformation or specialized development services, our team is here to bring your vision to life.
      </p>
      
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mx-2">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link || "#"}
            className={`relative bg-white rounded-lg p-3 w-3/4 h-auto mx-auto transition-transform transform hover:scale-110 hover:shadow-2xl duration-500 group flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center justify-center border-2 border-teal-200 hover:border-teal-400`}
          >
            <div className="flex-1 text-center lg:text-left mb-2 lg:mb-0 lg:mr-8">
              <h3 className="text-2xl font-bold text-indigo-800 mb-1 group-hover:text-indigo-900 transition-all duration-500 transform group-hover:scale-110 text-center">
                {service.title}
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed h-auto group-hover:text-gray-800 transition-colors duration-500">
                {service.description}
              </div>

              <div className="mt-4">
                <h4 className="text-base font-semibold mb-1">Benefits:</h4>
                <ul className="list-disc pl-6 text-sm text-gray-600">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-shrink-0 w-20 h-20 lg:w-28 lg:h-28 mx-auto lg:mx-0 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:bg-pink-50 transition-all duration-500">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 lg:w-16 lg:h-16 object-contain group-hover:opacity-80 transition-opacity duration-500"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Process Section */}
      <section className="bg-white py-16 mb-0" id="process">
        <div className="container mx-auto px-4 border-2 rounded-lg shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-teal-700 animate-textColorChange mb-10 font-custom leading-normal mt-2">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-5">
            {["Analyze", "Develop", "Test", "Deploy"].map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4">{step}</h3>
                <hr className="w-12 border-t-2 border-blue-500 mb-4 group-hover:border-white transition-all duration-300 ease-in-out" />
                <p className="mb-4">{`Description for ${step}`}</p>
                <h4 className="text-4xl font-bold">{idx + 1}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections (Optional) */}
      <section className={`bg-white py-12 px-6 md:px-16 lg:px-24 text-blue-900 ${isVisible ? "animate-fallDown" : "opacity-0"}`}>
        <Models />
        <RelatedServices />
      </section>
    </section>
  );
};

export default ServicePage;
