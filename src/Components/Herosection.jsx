import React from "react";


const HeroSection = () => {
  return (
    <div className="container-full bg-white hero-header h-[90vh] flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left text-white">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 animate-fadeInLeft delay-100 text-blue-900">
  Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 animate-textColorChange">Products</span> <br/>are Built by <br/>Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 animate-textColorChange">Teams</span> 
</h1>
 <p className="text-lg sm:text-xl mb-6 animate-fadeInLeft font-semibold delay-200 opacity-90 text-blue-800">
            We help build and manage a team of world-class developers to bring your vision to life.
            </p>
            <div className="space-x-6 mt-20">
              <a
                href="https://wa.me/12672183807"
                className="bg-blue-500 text-white py-4 px-6 rounded-full font-medium hover:bg-blue-800 hover:text-white transition-all duration-300 animate-bounceIn delay-300 no-underline"
              >
              Contact Us

              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="text-center lg:text-right">
            <img
              className="w-full max-w-md mx-auto lg:max-w-5xl animate-zoomIn delay-200 "
              src="src/assets/img/shivsyshero.png"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
