import React, { useState, useEffect, useRef } from 'react';

const FeatureCircle = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [rotation, setRotation] = useState(0);
  const dotCircleRef = useRef(null);
  const itemDotsRef = useRef([]);
  const containerRef = useRef(null);

  const handleDotClick = (tab) => {
    setActiveTab(tab);
  };

  const updatePositions = () => {
    const fields = itemDotsRef.current;
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const radius = width / 2;
    let angle = 0;
    const step = (2 * Math.PI) / fields.length;

    fields.forEach((dot, index) => {
      const x = Math.round(width / 2 + radius * Math.cos(angle) - dot.offsetWidth / 2);
      const y = Math.round(height / 2 + radius * Math.sin(angle) - dot.offsetHeight / 2);
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      angle += step;
    });
  };

  useEffect(() => {
    updatePositions();

    const interval = setInterval(() => {
      let nextTab = activeTab + 1 > 10 ? 1 : activeTab + 1;
      setActiveTab(nextTab);
      setRotation(rotation + 36);

      // Apply rotation to the entire dotCircle and the container that holds the dots
      dotCircleRef.current.style.transform = `rotate(${rotation + 36}deg)`;
      containerRef.current.style.transform = `rotate(${rotation + 36}deg)`;
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTab, rotation]);

  const getBackgroundImage = (tab) => {
    switch (tab) {
      case 1:
        return '/src/assets/img/Mobile_App_Development.gif';
      case 2:
        return '/src/assets/img/Ed_Tech.gif';
      case 3:
        return '/src/assets/img/Development_Services.gif';
      case 4:
        return '/src/assets/img/Cloud.gif';
      case 5:
        return '/src/assets/img/cybersecurity.gif';
      case 6:
        return '/src/assets/img/consulting.gif';
      case 7:
        return '/src/assets/img/AI_Data_Analytics.gif';
      case 8:
        return '/src/assets/img/digital_marketing.gif';
      case 9:
        return '/src/assets/img/Software_Testing_Services.gif';
      case 10:
        return '/src/assets/img/Web_Design&Development.gif';
      default:
        return '/src/assets/img/Mobile_App_Development.gif';
    }
  };

  return (
    <section className="iq-features py-16">
      <div className="container mx-auto flex justify-start items-center space-x-10 ml-40">
        <div className="flex-shrink-0">
          {/* Outer circle holder */}
          <div className="holderCircle relative w-[32rem] h-[32rem] mx-auto">
            {/* Static background image container */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                zIndex: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${getBackgroundImage(activeTab)})`, // Background image based on the active tab
                backgroundSize: '70%', // Ensure the image covers the entire circle
                backgroundPosition: 'center', // Center the image within the circle
                filter:'blur(1px)', // Apply blur to the bg image
                backgroundRepeat: 'no-repeat', // Prevent the image from repeating
              }}
            ></div>

            {/* Outer dotted circle */}
            <div
              ref={dotCircleRef}
              className="dotCircle absolute inset-0 border-2 border-dotted border-purple-700 rounded-full transition-transform duration-1000"
              style={{
                zIndex: 1,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              }}
            ></div>

            {/* Dots container */}
            <div
              ref={containerRef}
              className="absolute inset-0 flex justify-center items-center relative"
              style={{
                zIndex: 2,
                width: '100%',
                height: '100%',
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tab) => (
                <span
                  key={tab}
                  ref={(el) => (itemDotsRef.current[tab - 1] = el)}
                  data-tab={tab}
                  className={`itemDot absolute flex items-center justify-center w-20 h-20 bg-white text-purple-700 rounded-xl border-2 border-gray-300 cursor-pointer transition-all duration-300 transform hover:bg-gradient-to-r from-purple-700 to-purple-800 hover:text-white hover:scale-105 hover:shadow-lg ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleDotClick(tab)}
                >
                  <div className="flex flex-col items-center justify-center">
                    {/* Replace the icon with an image */}
                    <img
                      src={`/src/assets/img/${
                        tab === 1
                          ? 'Mobile_App_Development.gif'
                          : tab === 2
                          ? 'Ed_Tech.gif'
                          : tab === 3
                          ? 'Development_Services.gif'
                          : tab === 4
                          ? 'Cloud.gif'
                          : tab === 5
                          ? 'cybersecurity.gif'
                          : tab === 6
                          ? 'consulting.gif'
                          : tab === 7
                          ? 'AI_Data_Analytics.gif'
                          : tab === 8
                          ? 'digital_marketing.gif'
                          : tab === 9
                          ? 'Software_Testing_Services.gif'
                          : tab === 10
                          ? 'Web_Design&Development.gif'
                          : 'support-icon.png'
                      }`}
                      alt={`Icon for tab ${tab}`}
                      className="w-12 h-12 object-contain"
                      style={{
                        transform: 'rotate(0)', // Prevent rotation of the images
                      }}
                    />
                    <span className="mt-2 text-sm">
                      {tab === 1
                        ? ''
                        : tab === 2
                        ? ''
                        : tab === 3
                        ? ''
                        : tab === 4
                        ? ''
                        : tab === 5
                        ? ''
                        : tab === 6
                        ? ''
                        : tab === 7
                        ? ''
                        : tab === 8
                        ? ''
                        : tab === 9
                        ? ''
                        : tab === 10
                        ? ''
                        : 'Support'}
                    </span>
                  </div>
                </span>
              ))}
            </div>

            {/* Content circle for active tab */}
            <div className="contentCircle absolute inset-0 flex justify-center items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tab) => (
                <div
                  key={tab}
                  className={`CirItem absolute w-full h-full flex justify-center items-center text-center opacity-0 scale-0 transition-all duration-500 transform ${activeTab === tab ? 'active opacity-100 scale-100 z-10' : 'z-0'}`}
                >
                  <div className="title-box relative">
                    <h2 className="text-2xl font-bold text-purple-700 relative z-10">
                      {tab === 1
                        ? ''
                        : tab === 2
                        ? ''
                        : tab === 3
                        ? ''
                        : tab === 4
                        ? ''
                        : tab === 5
                        ? ''
                        : tab === 6
                        ? ''
                        : tab === 7
                        ? ''
                        : tab === 8
                        ? ''
                        : tab === 9
                        ? ''
                        : tab === 10
                        ? ''
                        : 'Support'}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parallel content section */}
        <div className="flex-grow max-w-[40rem] ml-auto">
          <div className="text-right">
            <h3 className="text-3xl font-semibold text-purple-700 mb-4">
              {activeTab === 1
                ? 'Mobile App Development'
                : activeTab === 2
                ? 'Edu Tech'
                : activeTab === 3
                ? 'Custom Software Development'
                : activeTab === 4
                ? 'Cloud Solutions'
                : activeTab === 5
                ? 'Cybersecurity Services'
                : activeTab === 6
                ? 'IT Consulting & Strategy'
                : activeTab === 7
                ? 'Data Analytics & Business Intelligence'
                : activeTab === 8
                ? 'Digital Marketing'
                : activeTab === 9
                ? 'Software Testing Services'
                : activeTab === 10
                ? 'Web Development'
                : 'Support'}
            </h3>
            <p className="text-lg text-gray-600">
              {activeTab === 1
                ? 'We provide top-notch mobile app development services.'
                : activeTab === 2
                ? 'Revolutionizing education with advanced tech solutions.'
                : activeTab === 3
                ? 'Building customized software solutions for businesses.'
                : activeTab === 4
                ? 'Cloud-based solutions for improved scalability.'
                : activeTab === 5
                ? 'Protecting your digital assets with our cybersecurity services.'
                : activeTab === 6
                ? 'Strategizing and advising IT solutions for your business.'
                : activeTab === 7
                ? 'Turning data into actionable insights with analytics.'
                : activeTab === 8
                ? 'Driving growth with targeted digital marketing strategies.'
                : activeTab === 9
                ? 'Ensuring quality with our software testing services.'
                : activeTab === 10
                ? 'Delivering robust web development services.'
                : 'Providing reliable support for your tech needs.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCircle;
