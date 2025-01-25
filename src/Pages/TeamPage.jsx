import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Vivek Gupta",
      role: "CEO & Founder",
      imgSrc: "https://i.ibb.co/G2CBWvb/person1.jpg",
      linkedin: "https://www.linkedin.com/in/vivek-gupta/",
      icon: "fab fa-html5",
    },
    {
      name: "Vivek Tiwari",
      role: "Digital Marketer & Software Development",
      imgSrc: "https://i.ibb.co/nbpNr4r/person2.jpg",
      linkedin: "https://www.linkedin.com/in/vivek-tiwari/",
      icon: "fab fa-wordpress-simple",
    },
    {
      name: "Akash Singh",
      role: "Tech Lead",
      imgSrc: "https://i.ibb.co/25zdRMr/person3.jpg",
      linkedin: "https://www.linkedin.com/in/akash-singh/",
      icon: "fab fa-angular",
    },
    {
      name: "Sundarm Mishra",
      role: "Software Engineer",
      imgSrc: "https://i.ibb.co/25zdRMr/person3.jpg",
      linkedin: "https://www.linkedin.com/in/akash-singh/",
      icon: "fab fa-angular",
    },
    {
      name: "Pankaj Rana",
      role: "Senior Technical Architect",
      imgSrc: "https://i.ibb.co/25zdRMr/person3.jpg",
      linkedin: "https://www.linkedin.com/in/akash-singh/",
      icon: "fab fa-angular",
    },
    {
      name: "Vikash",
      role: "Software Engineer",
      imgSrc: "https://i.ibb.co/25zdRMr/person3.jpg",
      linkedin: "https://www.linkedin.com/in/akash-singh/",
      icon: "fab fa-angular",
    },
  ];

  return (
    <section className="section-team py-20">
      <div className="container mx-auto px-6">
        {/* Start Header Section */}
        <div className="row justify-center text-center mb-12">
          <div className="col-md-8 col-lg-6">
            <div className="header-section">
              <h3 className="small-title mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r hover:from-[#016cec] hover:to-[#00b5f7]">
                Our Experts
              </h3>
              <h2 className="title text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700 font-bold">
                Let's meet with Our Team
              </h2>
            </div>
          </div>
        </div>
        {/* End Header Section */}
        <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="single-person bg-[#f6f9ff] p-8 rounded-lg hover:bg-gradient-to-r hover:from-[#016cec] hover:to-[#00b5f7]"
            >
              <div className="person-image relative mb-12 rounded-full border-4 border-transparent transition-all duration-300 hover:p-3 hover:border-white">
                <img
                  className="w-full rounded-full"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <span className="icon absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 inline-block w-16 h-16 text-center bg-gradient-to-r from-[#b5d5fc] to-[#3bc7fb] text-white rounded-full text-2xl">
                  <i className={member.icon}></i>
                </span>
              </div>
              <div className="person-info text-center">
                <h3 className="full-name text-2xl font-bold mb-2">{member.name}</h3>
                <span className="speciality text-sm text-blue-600 uppercase">{member.role}</span>
                <div className="social-links mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-blue-600 hover:underline"
                  >
                    <img
                      src="/assets/img/linkedin2.png"
                      alt="LinkedIn"
                      className="w-6 h-6 mr-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
