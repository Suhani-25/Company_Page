import React from 'react';
import { useNavigate } from 'react-router-dom';

function ServiceStack() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="mt-16 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700 animate-textColorChange mb-20 font-custom text-center">
        Services We Offer...
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {/* Full Stack Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Full-Stack.gif" alt="Full-Stack" className="w-12 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Full Stack</h2>
        </div>

        {/* Web Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Web.gif" alt="Web" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Web</h2>
        </div>

        {/* Cloud Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Cloud.gif" alt="Cloud" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Cloud</h2>
        </div>

        {/* Frontend Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Frontend.gif" alt="Frontend" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Frontend</h2>
        </div> 

        {/* Mobile Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Mobile.gif" alt="Mobile" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Mobile</h2>
        </div>

        {/* ReactJS Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/ReactJS.gif" alt="ReactJS" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">ReactJS</h2>
        </div>

        {/* Flutter Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Flutter.png" alt="Flutter" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Flutter</h2>
        </div>

        {/* Backend Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Backend.gif" alt="Backend" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Backend</h2>
        </div>

        {/* Java Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Java.gif" alt="Java" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Java</h2>
        </div>

        {/* .NET Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/NET.gif" alt="NET" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">.NET</h2>
        </div>

        {/* Python Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/python.png" alt="Python" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Python</h2>
        </div>

        {/* UI/UX Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/UI_UX.gif" alt="UI/UX" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">UI/UX</h2>
        </div>

        {/* AI/ML Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/AI_ML.gif" alt="AI/ML" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">AI/ML</h2>
        </div>

        {/* AWS Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/AWS.gif" alt="AWS" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">AWS</h2>
        </div>

        {/* PHP Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/PHP.gif" alt="PHP" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">PHP</h2>
        </div>

        {/* Express Card */}
        <div
          className="bg-white p-6 shadow-md cursor-pointer rounded-md hover:bg-white border-2 border-blue-300 hover:border-blue-500 flex items-center w-full h-20"
          onClick={() => handleCardClick('/ContactPage')}
        >
          <img src="src/assets/img/Express.gif" alt="Express" className="w-16 h-12 mr-4" />
          <h2 className="text-xl font-semibold">Express</h2>
        </div>
      </div>

      {/* Quote Button */}
      <div className="col-span-4 flex justify-center mt-8 mb-12">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full w-full sm:w-64 flex items-center justify-center"
          onClick={() => navigate('/ContactPage')}
        >
          Give a Quote
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
  );
}

export default ServiceStack;
