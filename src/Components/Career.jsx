import React from 'react';

const Careers = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24 text-blue-950 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4 text-center">Career At Shivsys</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are the foundation of our culture. We invest in your talent as much we invest in our future. We're fostering a culture of innovation and growth that benefits everyone.
            </p>
            <div className="space-x-4">
              <a 
                href="https://www.linkedin.com/company/shivsys-incorporation123/posts/?feedView=all" 
                className="inline-flex items-center bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
              >
                JOIN SHIVSYS TEAM
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
              <a
                href="/TeamPage.jsx"
                className="inline-flex items-center bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
              >
                View leadership
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
        </div>
      </div>
    </section>
  );
};

export default Careers;
