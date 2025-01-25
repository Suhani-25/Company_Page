import React, { useState } from 'react';

const JobOpenSection = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { jobTitle, location });
    // Implement search functionality
  };

  return (
    <section className="openPosition secondClass py-16 mt-8 mb-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Title Section */}
        <div className="titleSection text-center mb-8">
          <h4 className="text-3xl font-semibold text-gray-800">
            Grab New Opportunities
          </h4>
          <p className="text-lg text-gray-600">
            Explore career opportunities and discover the perfect fit for your talents
          </p>
        </div>

        {/* Job Filters Section */}
        <div className="flex justify-center items-center w-full">
          <div className="openPositionRow flex flex-col lg:flex-row items-center justify-center mx-auto w-full max-w-4xl px-4 space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="dropdown w-full lg:w-1/3">
              <input
                className="form-control job_title border-2 border-gray-300 rounded-lg py-2 px-4 w-full"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
              />
            </div>
            <div className="dropdown selectDropBox w-full lg:w-1/3">
              <select
                className="location_name border-2 border-gray-300 rounded-lg py-2 px-4 w-full"
                id="locationDropdown"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="Delhi-NCR, India">Delhi-NCR, India</option>
                <option value="Bengaluru, India">Bengaluru, India</option>
                <option value="Pune, India">Pune, India</option>
                <option value="Hyderabad, India">Hyderabad, India</option>
                <option value="Jaipur, India">Jaipur, India</option>
                <option value="Ahmedabad, India">Ahmedabad, India</option>
                <option value="Surat, India">Surat, India</option>
                <option value="Bhubaneswar, India">Bhubaneswar, India</option>
                <option value="Mumbai, India">Mumbai, India</option>
                <option value="Noida, India">Noida, India</option>
                <option value="Gurgaon, India">Gurgaon, India</option>
              </select>
            </div>
            <button
              className="serachButton bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-700 transition duration-300"
              onClick={handleSearch}
            >
              Search
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
      </div>
    </section>
  );
};

export default JobOpenSection;
