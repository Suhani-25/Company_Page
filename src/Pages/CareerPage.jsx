import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import CareerSheet from "../Components/CareerSheet"; // Import the CareerSheet component
import CareerForm from '../Components/CareerForm';

const CareerBanner = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing type
      once: false, // Make the animation trigger every time the element comes into view
      offset: 200, // Trigger animation when the element is 200px away from the viewport
    });
  }, []);

  return (
    <section className="bg-white py-16 mt-3 mb-8">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-9/12" data-aos="fade-up">
            <div className="text-center lg:text-left">
              <div className="mb-4">
                {/* Add a unique branding line or divider */}
                {/*<span className="block h-1 w-16 bg-blue-500 mx-auto lg:mx-0"></span>*/}
              </div>

              <h2 className="text-3xl font-extrabold text-blue-800 mb-4" data-aos="fade-up">
                Join Shivsys - Innovation For Future
              </h2>
              <p className="text-lg text-gray-700 font-bold mb-6" data-aos="fade-up">
                At Shivsys, we empower passionate individuals to innovate, grow, and make a lasting impact on the world.
              </p>
              <a
                href="/CareerPage" // Change the URL to Shivsys careers page
                className="inline-flex items-center bg-orange-400 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
                data-aos="fade-up"
              >
                Explore Jobs
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
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/12 mt-8 lg:mt-0" data-aos="fade-left">
            {/* Replace with Shivsys branding or logo */}
            <img
              src="/assets/img/ShivsysLogo.png" // Replace with Shivsys logo or related image
              alt="Shivsys"
              width="123"
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section Starts */}
      <div className="container mx-auto px-6 lg:px-24 mt-10 mb-6">
        {/* Title Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h4 className="text-3xl font-bold text-blue-800 mb-4">Our Values</h4>
          <p className="text-2xl font-semibold text-gray-700">
            We attribute our success to our core values that actively promote inclusive growth and equality of opportunities.
          </p>
        </div>

        {/* Our Values Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <div className="w-full">
              <img
                src="/assets/img/CareerValues.webp" // Replace with Shivsys's relevant image
                alt="Shivsys Values"
                className="w-full rounded-lg "
              />
            </div>
          </div>

          <div className="lg:w-1/2 pl-0 lg:pl-12">
            <ul className="space-y-8">
              {/* Card 1 */}
              <li
                className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-500"
                data-aos="fade-up"
              >
                <h5 className="text-xl font-semibold text-blue-800 mb-2">Trust and Accountability</h5>
                <p className="text-gray-600">
                  At Shivsys, we trust our team members to make decisions, take initiatives, and be accountable for their work. We empower them to be the best they can be.
                </p>
              </li>

              {/* Card 2 */}
              <li
                className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-500"
                data-aos="fade-up"
              >
                <h5 className="text-xl font-semibold text-blue-800 mb-2">Collective Excellence</h5>
                <p className="text-gray-600">
                  Excellence is our obsession. At Shivsys, we strive for excellence in everything we do, and this dedication drives every team member to contribute their best.
                </p>
              </li>

              {/* Card 3 */}
              <li
                className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-500"
                data-aos="fade-up"
              >
                <h5 className="text-xl font-semibold text-blue-800 mb-2">Unrelenting Passion</h5>
                <p className="text-gray-600">
                  Passion is the driving force behind our success. Every project we take on is fueled by a collective passion for creativity and innovation. We seek individuals who share this mindset.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Our Values Section Ends */}

      {/* CareerSheet Component */}
      <div>
        <CareerSheet />
      </div>
       
       {/* CareerForm Component */}
      <div>
        <CareerForm />
      </div>

      
      
    </section>
  );
};

export default CareerBanner;
