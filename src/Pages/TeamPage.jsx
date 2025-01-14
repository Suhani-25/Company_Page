import React from 'react';

const TeamSection = () => {
  return (
    <section className="section-team py-20">
      <div className="container mx-auto px-6">
        {/* Start Header Section */}
        <div className="row justify-center text-center mb-12">
          <div className="col-md-8 col-lg-6">
            <div className="header-section">
              <h3 className="small-title mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700">Our Experts</h3>
              <h2 className="title text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700 font-bold">Let's meet with Our Team</h2>
            </div>
          </div>
        </div>
        {/* / End Header Section */}
        <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Start Single Person */}
          <div className="single-person bg-[#f6f9ff] p-8 rounded-lg hover:bg-gradient-to-r hover:from-[#016cec] hover:to-[#00b5f7]">
            <div className="person-image relative mb-12 rounded-full border-4 border-transparent transition-all duration-300 hover:p-3 hover:border-white">
              <img className="w-full rounded-full" src="https://i.ibb.co/G2CBWvb/person1.jpg" alt="Vivek Gupta" />
              <span className="icon absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 inline-block w-16 h-16 text-center bg-gradient-to-r from-[#016cec] to-[#00b5f7] text-white rounded-full text-2xl">
                <i className="fab fa-html5"></i>
              </span>
            </div>
            <div className="person-info text-center">
              <h3 className="full-name text-2xl font-bold mb-2">Vivek Gupta</h3>
              <span className="speciality text-sm text-blue-600 uppercase">CEO & Founder</span>
            </div>
          </div>
          {/* / End Single Person */}

          {/* Start Single Person */}
          <div className="single-person bg-[#f6f9ff] p-8 rounded-lg hover:bg-gradient-to-r hover:from-[#016cec] hover:to-[#00b5f7]">
            <div className="person-image relative mb-12 rounded-full border-4 border-transparent transition-all duration-300 hover:p-3 hover:border-white">
              <img className="w-full rounded-full" src="https://i.ibb.co/nbpNr4r/person2.jpg" alt="Vivek Tiwari" />
              <span className="icon absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 inline-block w-16 h-16 text-center bg-gradient-to-r from-[#016cec] to-[#00b5f7] text-white rounded-full text-2xl">
                <i className="fab fa-wordpress-simple"></i>
              </span>
            </div>
            <div className="person-info text-center">
              <h3 className="full-name text-2xl font-bold mb-2">Vivek Tiwari</h3>
              <span className="speciality text-sm text-blue-600 uppercase">Digital Marketer & Software Development</span>
            </div>
          </div>
          {/* / End Single Person */}

          {/* Start Single Person */}
          <div className="single-person bg-[#f6f9ff] p-8 rounded-lg hover:bg-gradient-to-r hover:from-[#016cec] hover:to-[#00b5f7]">
            <div className="person-image relative mb-12 rounded-full border-4 border-transparent transition-all duration-300 hover:p-3 hover:border-white">
              <img className="w-full rounded-full" src="https://i.ibb.co/25zdRMr/person3.jpg" alt="Akash Singh" />
              <span className="icon absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 inline-block w-16 h-16 text-center bg-gradient-to-r from-[#016cec] to-[#00b5f7] text-white rounded-full text-2xl">
                <i className="fab fa-angular"></i>
              </span>
            </div>
            <div className="person-info text-center">
              <h3 className="full-name text-2xl font-bold mb-2">Akash Singh</h3>
              <span className="speciality text-sm text-blue-600 uppercase">Tech Lead</span>
            </div>
          </div>
          {/* / End Single Person */}

          {/* Start Single Person */}
          <div className="single-person bg-[#f6f9ff] p-8 rounded-lg hover:bg-gradient-to-r hover:from-[#016cec] hover:to-[#00b5f7]">
            <div className="person-image relative mb-12 rounded-full border-4 border-transparent transition-all duration-300 hover:p-3 hover:border-white">
              <img className="w-full rounded-full" src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="Sundarm Mishra" />
              <span className="icon absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 inline-block w-16 h-16 text-center bg-gradient-to-r from-[#016cec] to-[#00b5f7] text-white rounded-full text-2xl">
                <i className="fab fa-js"></i>
              </span>
            </div>
            <div className="person-info text-center">
              <h3 className="full-name text-2xl font-bold mb-2">Sundarm Mishra </h3>
              <span className="speciality text-sm text-blue-600 uppercase">Software Engineer</span>
            </div>
          </div>
          {/* / End Single Person */}

          
          {/* Start Single Person */}
          <div className="single-person bg-[#f6f9ff] p-8 rounded-lg hover:bg-gradient-to-r hover:from-[#016cec] hover:to-[#00b5f7]">
            <div className="person-image relative mb-12 rounded-full border-4 border-transparent transition-all duration-300 hover:p-3 hover:border-white">
              <img className="w-full rounded-full" src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="Pankaj Rana" />
              <span className="icon absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 inline-block w-16 h-16 text-center bg-gradient-to-r from-[#016cec] to-[#00b5f7] text-white rounded-full text-2xl">
                <i className="fab fa-js"></i>
              </span>
            </div>
            <div className="person-info text-center">
              <h3 className="full-name text-2xl font-bold mb-2">Pankaj Rana</h3>
              <span className="speciality text-sm text-blue-600 uppercase">Senior Technical Architect</span>
            </div>
          </div>
          {/* / End Single Person */}

          
          {/* Start Single Person */}
          <div className="single-person bg-[#f6f9ff] p-8 rounded-lg hover:bg-gradient-to-r hover:from-[#016cec] hover:to-[#00b5f7]">
            <div className="person-image relative mb-12 rounded-full border-4 border-transparent transition-all duration-300 hover:p-3 hover:border-white">
              <img className="w-full rounded-full" src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="Vikash" />
              <span className="icon absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 inline-block w-16 h-16 text-center bg-gradient-to-r from-[#016cec] to-[#00b5f7] text-white rounded-full text-2xl">
                <i className="fab fa-js"></i>
              </span>
            </div>
            <div className="person-info text-center">
              <h3 className="full-name text-2xl font-bold mb-2">Vikash</h3>
              <span className="speciality text-sm text-blue-600 uppercase">Software Engineer</span>
            </div>
          </div>
          {/* / End Single Person */}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;