import React, { useState } from 'react';

const values = () => {
  // State to manage the clicked image
  const [expandedImage, setExpandedImage] = useState(null);

  // Handle the image click to toggle the expanded state
  const handleImageClick = (image) => {
    setExpandedImage(expandedImage === image ? null : image); // Toggle the image
  };

  return (
    <section className="ourValuesSection py-16">
      <div className="container mx-auto px-6">
        <h4 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700 text-center animate-textColorChange mb-20 font-custom">Our Values</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Innovation Card */}
          <div className="cardBlock bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div onClick={() => handleImageClick('innovation')}>
              <img 
                src="https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/abouts/our-story1.png" 
                alt="Innovation" 
                className={`card__image w-full h-48 object-cover rounded-t-lg mb-4 cursor-pointer transition-all ${
                  expandedImage === 'innovation' ? 'transform scale-110 transition-transform duration-300' : ''
                }`} 
              />
            </div>
            <div className="card__infos">
              <div className="card_info_head text-xl font-semibold mb-2">Innovation with integrity</div>
              <div className="card_info_para text-gray-600 text-sm">
                Prioritizing creative solutions while upholding ethical standards and honesty
              </div>
            </div>
            <span className="card-heading block mt-4 text-center font-bold text-xl text-gray-900">Innovation</span>
          </div>

          {/* Excellence Card */}
          <div className="cardBlock bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div onClick={() => handleImageClick('excellence')}>
              <img 
                src="https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/abouts/excellence.png" 
                alt="Excellence" 
                className={`card__image w-full h-48 object-cover rounded-t-lg mb-4 cursor-pointer transition-all ${
                  expandedImage === 'excellence' ? 'transform scale-110 transition-transform duration-300' : ''
                }`} 
              />
            </div>
            <div className="card__infos">
              <div className="card_info_head text-xl font-semibold mb-2">Excellence with reliability</div>
              <div className="card_info_para text-gray-600 text-sm">
                Striving for top-tier performance while ensuring consistent and dependable outcomes
              </div>
            </div>
            <span className="card-heading block mt-4 text-center font-bold text-xl text-gray-900">Excellence</span>
          </div>

          {/* Agility Card */}
          <div className="cardBlock bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div onClick={() => handleImageClick('agility')}>
              <img 
                src="https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/abouts/agility.png" 
                alt="Agility" 
                className={`card__image w-full h-48 object-cover rounded-t-lg mb-4 cursor-pointer transition-all ${
                  expandedImage === 'agility' ? 'transform scale-110 transition-transform duration-300' : ''
                }`} 
              />
            </div>
            <div className="card__infos">
              <div className="card_info_head text-xl font-semibold mb-2">Agility and<br/> flexibility</div>
              <div className="card_info_para text-gray-600 text-sm">
                Embracing adaptability, quickness, and responsiveness to navigate change effectively
              </div>
            </div>
            <span className="card-heading block mt-4 text-center font-bold text-xl text-gray-900">Agility</span>
          </div>

          {/* Security Card */}
          <div className="cardBlock bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div onClick={() => handleImageClick('security')}>
              <img 
                src="https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/abouts/security.png" 
                alt="Security" 
                className={`card__image w-full h-48 object-cover rounded-t-lg mb-4 cursor-pointer transition-all ${
                  expandedImage === 'security' ? 'transform scale-110 transition-transform duration-300' : ''
                }`} 
              />
            </div>
            <div className="card__infos">
              <div className="card_info_head text-xl font-semibold mb-2">Security and<br/> scalability </div>
              <div className="card_info_para text-gray-600 text-sm">
                Ensuring robust protection while seamlessly accommodating growth and expansion
              </div>
            </div>
            <span className="card-heading block mt-4 text-center font-bold text-xl text-gray-900">Security</span>
          </div>
        </div>

        {/* Fullscreen Image Overlay */}
        {expandedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setExpandedImage(null)} // Close overlay on click
          >
            <img
              src={
                expandedImage === 'innovation'
                  ? "https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/abouts/our-story1.png"
                  : expandedImage === 'excellence'
                  ? "https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/abouts/excellence.png"
                  : expandedImage === 'agility'
                  ? "https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/abouts/agility.png"
                  : "https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/abouts/security.png"
              }
              alt={expandedImage}
              className="max-w-full max-h-full object-contain transition-all duration-500"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default values;
