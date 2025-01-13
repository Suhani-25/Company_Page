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
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12">
            <div className="titleSection text-center mb-8">
              <h4 className="text-3xl font-semibold text-gray-800">Grab New Opportunities</h4>
              <p className="text-lg text-gray-600">Explore career opportunities and discover the perfect fit for your talents</p>
            </div>
          </div>
        </div>

        <div className="openPositionRow flex flex-col lg:flex-row items-start justify-between">
          <div className="jobPostionFilter flex flex-wrap space-x-4 mb-8 lg:mb-0">
            <div className="dropdown w-full lg:w-1/3 mb-4 lg:mb-0">
              <input
                className="form-control job_title border-2 border-gray-300 rounded-lg py-2 px-4 w-full"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
              />
            </div>
            <div className="dropdown selectDropBox w-full lg:w-1/3 mb-4 lg:mb-0">
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
                {/* Add more options as needed */}
              </select>
            </div>
            <button
              className="serachButton bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-700 transition duration-300"
              onClick={handleSearch}
            >
              Search
              <svg
                viewBox="0 0 7.4 22"
                className="button_arrow__379Os desktopArrow ml-2 w-4 h-4 transform rotate-45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="3.7,0.5 3.7,21.5 6.9,18.4" />
                <polyline points="3.7,0.5 3.7,21.5 0.5,18.4" />
              </svg>
            </button>
          </div>

          <div className="jobOpenPosition w-full">
            <div id="all_jobs_div">
              {/* Jobs listing will be rendered here */}
              {/* Map through job postings data to display individual job cards */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpenSection;
