import React from 'react';

const EngagementModels = () => {
  return (
    <section className="engagementModels py-16 mt-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-5xl sm:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-teal-700 animate-textColorChange mb-10 font-custom leading-normal">
            Our Engagement Models
          </h2>
          <span className="text-xl text-gray-600">Get exactly what your business needs with our flexible engagement models</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Fixed Scope Projects */}
          <div className="flex flex-col min-h-[400px]">
            <div className="serviceBlock bg-gradient-to-r from-pink-300 to-blue-200 text-blue-800 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex-grow flex flex-col">
              <div className="img-left mb-6">
                <img src="https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/services/project-icon.svg" alt="Fixed Scope Projects" className="mx-auto w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <div className="service-content mb-6 flex-grow">
                <h3 className="text-2xl sm:text-xl font-semibold mb-3">Fixed Scope Projects</h3>
                <p className="text-base sm:text-sm">Delivering results within defined parameters with clarity and precision.</p>
              </div>
              <ul className="text-base sm:text-sm space-y-3 mb-6">
                <li>Cost predictability without unexpected expenses</li>
                <li>Pre-defined & clear parameters for effective execution</li>
                <li>Ensured delivery within the agreed schedule</li>
              </ul>
              <div className="mt-auto">
                <a href="https://wa.me/12672183807" className="inline-flex items-center justify-center bg-white text-gray-900 py-3 px-8 rounded-full font-bold text-lg sm:text-base hover:bg-gray-100">
                  TALK TO OUR EXPERT
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
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Managed Services */}
          <div className="flex flex-col min-h-[400px]">
            <div className="serviceBlock bg-gradient-to-r from-green-200 to-blue-300 text-blue-800 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex-grow flex flex-col">
              <div className="popular absolute top-6 right-6 bg-yellow-500 text-black px-5 py-3 rounded-full text-sm font-semibold">Popular</div>
              <div className="img-left mb-6">
                <img src="https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/services/service-icon.svg" alt="Managed Services" className="mx-auto w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <div className="service-content mb-6 flex-grow">
                <h3 className="text-2xl sm:text-xl font-semibold mb-3">Managed Services</h3>
                <p className="text-base sm:text-sm">Efficiently tailored solutions for seamless and uninterrupted operations.</p>
              </div>
              <ul className="text-base sm:text-sm space-y-3 mb-6">
                <li>Continuous monitoring and 24/7 support</li>
                <li>Enhanced operational efficiency with innovation</li>
                <li>Scalable to accommodate fluctuating demands</li>
              </ul>
              <div className="mt-auto">
                <a href="https://wa.me/12672183807" className="inline-flex items-center justify-center bg-white text-gray-900 py-3 px-8 rounded-full font-bold text-lg sm:text-base hover:bg-gray-100">
                  TALK TO OUR EXPERT
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
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Staff Augmentation */}
          <div className="flex flex-col min-h-[400px]">
            <div className="serviceBlock bg-gradient-to-r from-yellow-200 to-red-300 text-blue-800 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex-grow flex flex-col">
              <div className="img-left mb-6">
                <img src="https://www.qtsolv.com/wp-content/themes/qtsolvtheme/assets/images/services/staff-icon.svg" alt="Staff Augmentation" className="mx-auto w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <div className="service-content mb-6 flex-grow">
                <h3 className="text-2xl sm:text-xl font-semibold mb-3">Staff Augmentation</h3>
                <p className="text-base sm:text-sm">Empowering your projects with on-demand expertise and flexibility.</p>
              </div>
              <ul className="text-base sm:text-sm space-y-3 mb-6">
                <li>Diverse talent pool with specialized skills</li>
                <li>Eliminates overhead costs while maintaining quality</li>
                <li>Quick scaling based on your needs</li>
              </ul>
              <div className="mt-auto">
                <a href="https://wa.me/12672183807" className="inline-flex items-center justify-center bg-white text-gray-900 py-3 px-8 rounded-full font-bold text-lg sm:text-base hover:bg-gray-100">
                  TALK TO OUR EXPERT
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
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
