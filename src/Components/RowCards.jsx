import React from 'react';

const Section1 = () => {
  return (
    <div className="section1 w-full my-20 relative font-oswald">
      {/* Title Header */}
      <div className="title_header w-11/20 mx-auto text-uppercase font-medium mb-10">
        <em className="text-red-600">WHAT WE DO?</em>
        <h1 className="text-3xl font-semibold text-black">
          We give you complete control of your shipments.
        </h1>
      </div>

      {/* Table (converted to flex for responsiveness) */}
      <div className="flex flex-wrap justify-center">
        {/* First Row */}
        <div className="relative flex w-full bg-orange-300 md:w-1/4 p-4 mb-3">
          <img
            src="/src/assets/img/Mobile_App_Development.gif"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Left Arrow Indicator */}
          <div className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rotate-45 z-10"></div>
        </div>
        <div className="flex w-full md:w-1/4 p-4 mb-3">
          <section className="p-4">
            <i className="fa fa-heart-o text-5xl text-black block"></i>
            <h1 className="text-red-600 text-sm uppercase">Small Things</h1>
            <p className="text-sm leading-6">
              I can't do all the good that the world needs. But the world needs
              all the good that I can do. Be strong enough to stand alone, smart
              enough to know when you need help, and brave enough to ask for it.
            </p>
          </section>
        </div>
        <div className="relative flex w-full bg- bg-orange-300 md:w-1/4 p-4 mb-3">
          <img
            src="/src/assets/img/Mobile_App_Development.gif"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Right Arrow Indicator */}
          <div className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rotate-45 z-10"></div>
        </div>
        <div className="flex w-full md:w-1/4 p-4 mb-3">
          <section className="p-4">
            <i className="fa fa-heart-o text-5xl text-black block"></i>
            <h1 className="text-red-600 text-sm uppercase">Small Things</h1>
            <p className="text-sm leading-6">
              I can't do all the good that the world needs. But the world needs
              all the good that I can do. Be strong enough to stand alone, smart
              enough to know when you need help, and brave enough to ask for it.
            </p>
          </section>
        </div>

        {/* Second Row */}
        <div className="relative flex w-full md:w-1/4 p-4 mb-3">
          <section className="p-4">
            <i className="fa fa-heart-o text-5xl text-black block"></i>
            <h1 className="text-red-600 text-sm uppercase">Small Things</h1>
            <p className="text-sm leading-6">
              I can't do all the good that the world needs. But the world needs
              all the good that I can do. Be strong enough to stand alone, smart
              enough to know when you need help, and brave enough to ask for it.
            </p>
          </section>
        </div>
        <div className="relative flex w-full bg-orange-300 md:w-1/4 p-4 mb-3">
          <img
            src="/src/assets/img/Mobile_App_Development.gif"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Left Arrow Indicator */}
          <div className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rotate-45 z-10"></div>
        </div>
        <div className="relative flex w-full md:w-1/4 p-4 mb-3">
          <section className="p-4">
            <i className="fa fa-heart-o text-5xl text-black block"></i>
            <h1 className="text-red-600 text-sm uppercase">Small Things</h1>
            <p className="text-sm leading-6">
              I can't do all the good that the world needs. But the world needs
              all the good that I can do. Be strong enough to stand alone, smart
              enough to know when you need help, and brave enough to ask for it.
            </p>
          </section>
        </div>
        <div className="relative flex w-full  bg-orange-300 md:w-1/4 p-4 mb-3">
          <img
            src="/src/assets/img/Mobile_App_Development.gif"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Right Arrow Indicator */}
          <div className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rotate-45 z-10"></div>
        </div>

        {/* Third Row */}
         <div className="relative flex w-full bg-orange-300 md:w-1/4 p-4 mb-3">
          <img
            src="/src/assets/img/Mobile_App_Development.gif"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Left Arrow Indicator */}
          <div className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rotate-45 z-10"></div>
        </div>
        <div className="flex w-full md:w-1/4 p-4 mb-3">
          <section className="p-4">
            <i className="fa fa-heart-o text-5xl text-black block"></i>
            <h1 className="text-red-600 text-sm uppercase">Small Things</h1>
            <p className="text-sm leading-6">
              I can't do all the good that the world needs. But the world needs
              all the good that I can do. Be strong enough to stand alone, smart
              enough to know when you need help, and brave enough to ask for it.
            </p>
          </section>
        </div>
        <div className="relative flex w-full bg-orange-300 md:w-1/4 p-4 mb-3">
          <img
            src="/src/assets/img/Mobile_App_Development.gif"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Right Arrow Indicator */}
          <div className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rotate-45 z-10"></div>
        </div>
        <div className="flex w-full md:w-1/4 p-4 mb-3">
          <section className="p-4">
            <i className="fa fa-heart-o text-5xl text-black block"></i>
            <h1 className="text-red-600 text-sm uppercase">Small Things</h1>
            <p className="text-sm leading-6">
              I can't do all the good that the world needs. But the world needs
              all the good that I can do. Be strong enough to stand alone, smart
              enough to know when you need help, and brave enough to ask for it.
            </p>
          </section>
        </div>        
      </div>
    </div>
  );
};

export default Section1;
