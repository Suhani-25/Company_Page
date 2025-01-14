import React, { useState, useEffect } from 'react';

function BouncingButton() {
  const [isBouncing, setIsBouncing] = useState(false);
  const [bgClass, setBgClass] = useState('bg-gradient-to-r from-pink-500 to-blue-500'); // Initial dynamic background class

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBouncing(!isBouncing);
    }, 1000);

    // Change background every 3 seconds for dynamic effect
    const bgIntervalId = setInterval(() => {
      setBgClass(
        bgClass === 'bg-gradient-to-r from-pink-300 to-blue-100'
          ? 'bg-gradient-to-r from-pink-400 to-blue-600'
          : 'bg-gradient-to-r from-pink-300 to-blue-100'
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearInterval(bgIntervalId);
    };
  }, [isBouncing, bgClass]);

  return (
    <div className="bg-white flex flex-col justify-start items-center min-h-screen pb-10">
      {/* Hire Us Button in a separate card with transparent background */}
      <div className="w-full max-w-2xl p-6 md:p-8 mb-10 mt-12 rounded-xl shadow-xl relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          <span className="text-blue-900 font-bold text-xl md:text-2xl text-center md:text-left">
            Hire The Best Developers Around You
          </span>
          <button
            className={`text-white font-bold py-3 px-6 md:py-4 md:px-8 text-lg md:text-xl rounded-full shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl duration-300 ${isBouncing ? 'animate-bounce' : ''} ${bgClass}`}
          >
            Hire Us
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full bg-white pt-12 pb-12 px-4">
        <div className="faq w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 border-2 border-blue-200 rounded-lg shadow-xl p-6 hover:bg-white transition-all duration-300 hover:scale-105 transform">
          {/* Left Section with Images */}
          <div className="w-full md:w-1/2 relative">
            {/* Desktop Image */}
            <div className="hidden md:block relative w-full">
              <img
                className="absolute top-1/2 left-[-14%] transform -translate-y-1/2 w-full"
                src="https://rvs-faq-accordion-card.netlify.app/images/illustration-woman-online-desktop.svg"
                alt="illustration-woman-online-desktop"
              />
              <img
                className="absolute top-[32%] left-[-18%] w-[30%]"
                src="https://rvs-faq-accordion-card.netlify.app/images/illustration-box-desktop.svg"
                alt="illustration-box-desktop"
              />
            </div>

            {/* Mobile Image */}
            <div className="md:hidden relative w-[70%] mx-auto">
              <img
                className=" w-full transform -translate-x-1/2"
                src="https://rvs-faq-accordion-card.netlify.app/images/illustration-woman-online-mobile.svg"
                alt="illustration-woman-online-mobile"
              />
            </div>
          </div>

          {/* Right Section with FAQ Content */}
          <div className="w-full md:w-1/2 font-roboto">
            <div className="faq-title text-lg md:text-2xl font-bold mb-4 text-center md:text-left">FAQs</div>
            <div className="faq-body space-y-4">
              {/* Question 1 */}
              <details className="border-b-[1px] border-b-[#3B65B3] cursor-pointer hover:bg-blue-100 hover:scale-105 transform transition-all duration-200">
                <summary className="text-[#1e1865f4] font-bold relative">
                  What services does Shivsys Inc. provide?
                  <span className="absolute right-0 w-2.5 h-2.5 bg-no-repeat bg-center transform rotate-0" style={{ backgroundImage: 'url(https://rvs-faq-accordion-card.netlify.app/images/icon-arrow-down.svg)' }}></span>
                </summary>
                <p className="text-black text-sm md:text-base font-medium line-height-4 pr-4 mt-2 mb-2">
                  Shivsys Inc. specializes in IT services, including Staff Augmentation, CRM and ERP software solutions, SaaS development, eCommerce platforms, quality engineering, cloud engineering, and digital marketing services.
                </p>
              </details>
{/* Question 2 */}
           <details className="border-b-[1px] border-b-[#3B65B3] mb-5 cursor-pointer hover:bg-blue-100 hover:scale-105 transform transition-all duration-200">
                <summary className="text-[#1e1865f4] font-bold relative">
                  What industries does Shivsys Inc. cater to?
                  <span className="absolute right-0 w-2.5 h-2.5 bg-no-repeat bg-center transform rotate-0" style={{ backgroundImage: 'url(https://rvs-faq-accordion-card.netlify.app/images/icon-arrow-down.svg)' }}></span>
                </summary>
                <p className="text-black text-xs font-bold line-height-4 pr-6">
                  We serve a wide range of industries, including healthcare, eCommerce, fitness, industrial manufacturing, and more, delivering tailored IT solutions to meet specific business needs.
                </p>
              </details>

              {/* Question 3 */}
              <details className="border-b-[1px] border-b-[#3B65B3] mb-5 cursor-pointer hover:bg-blue-100 hover:scale-105 transform transition-all duration-200">
                <summary className="text-[#1e1865f4] font-bold relative">
                  How does Shivsys Inc. ensure project success?
                  <span className="absolute right-0 w-2.5 h-2.5 bg-no-repeat bg-center transform rotate-0" style={{ backgroundImage: 'url(https://rvs-faq-accordion-card.netlify.app/images/icon-arrow-down.svg)' }}></span>
                </summary>
                <p className="text-black text-xs font-bold line-height-4 pr-6">
                  Shivsys Inc. uses Agile methodologies, skilled IT professionals with extensive experience, and advanced tools to deliver projects on time, with transparency and consistent communication.
                </p>
              </details>

              {/* Question 4 */}
              <details className="border-b-[1px] border-b-[#3B65B3] mb-5 cursor-pointer hover:bg-blue-100 hover:scale-105 transform transition-all duration-200">
                <summary className="text-[#1e1865f4] font-bold relative">
                  Do you offer customized software solutions?
                  <span className="absolute right-0 w-2.5 h-2.5 bg-no-repeat bg-center transform rotate-0" style={{ backgroundImage: 'url(https://rvs-faq-accordion-card.netlify.app/images/icon-arrow-down.svg)' }}></span>
                </summary>
                <p className="text-black text-xs font-bold line-height-4 pr-6">
                  Yes, we develop custom software and applications tailored to meet the unique requirements of businesses, ensuring scalability and long-term efficiency.
                </p>
              </details>

              {/* Question 5 */}
              <details className="border-b-[1px] border-b-[#3B65B3] mb-5 cursor-pointer hover:bg-blue-100 hover:scale-105 transform transition-all duration-200">
                <summary className="text-[#1e1865f4] font-bold relative">
                  What digital marketing services do you offer?
                  <span className="absolute right-0 w-2.5 h-2.5 bg-no-repeat bg-center transform rotate-0" style={{ backgroundImage: 'url(https://rvs-faq-accordion-card.netlify.app/images/icon-arrow-down.svg)' }}></span>
                </summary>
                <p className="text-black text-xs font-bold line-height-4 pr-6">
                  Shivsys Inc. provides SEO, PPC campaigns, social media management, and email automation services to help businesses grow their online presence and achieve measurable results.
                </p>
              </details>

              {/* Question 6 */}
              <details className="border-b-[1px] border-b-[#3B65B3] mb-5 cursor-pointer hover:bg-blue-100 hover:scale-105 transform transition-all duration-200">
                <summary className="text-[#1e1865f4] font-bold relative">
                  How can I get started with Shivsys Inc.?
                  <span className="absolute right-0 w-2.5 h-2.5 bg-no-repeat bg-center transform rotate-0" style={{ backgroundImage: 'url(https://rvs-faq-accordion-card.netlify.app/images/icon-arrow-down.svg)' }}></span>
                </summary>
                <p className="text-black text-xs font-bold line-height-4 pr-6">
                  Contact us via email at info@shivsys.com or visit our website to discuss your requirements. Our team will guide you through the process to kickstart your project.
                </p>
              </details>

              {/* Question 7 */}
              <details className="border-b-[1px] border-b-[#3B65B3] mb-5 cursor-pointer hover:bg-blue-100 hover:scale-105 transform transition-all duration-200">
                <summary className="text-[#1e1865f4] font-bold relative">
                  Why should I choose Shivsys Inc.?
                  <span className="absolute right-0 w-2.5 h-2.5 bg-no-repeat bg-center transform rotate-0" style={{ backgroundImage: 'url(https://rvs-faq-accordion-card.netlify.app/images/icon-arrow-down.svg)' }}></span>
                </summary>
                <p className="text-black text-xs font-bold line-height-4 pr-6">
                  With experienced professionals, a customer-centric approach, and a proven track record of delivering high-quality IT solutions, Shivsys Inc. is a trusted partner for businesses worldwide.
                </p>
              </details>



              {/* Add more questions as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BouncingButton;
