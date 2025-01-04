import React from "react";

// Import images from your local directories
import facebookIcon from "/src/assets/img/facebook.png"; // adjust the path as needed
import twitterIcon from "/src/assets/img/twitter.png"; // adjust the path as needed
import linkedinIcon from "/src/assets/img/linkedin.png"; // adjust the path as needed
import defaultMemberImage from "/src/assets/img/defaultmember.jpeg"; // adjust the path as needed

const TeamMembers = () => {
  const teamMembers = [
    { name: "Sam", role: "Developer", image: defaultMemberImage },
    { name: "John", role: "Designer", image: defaultMemberImage },
    { name: "Jane", role: "Manager", image: defaultMemberImage },
    { name: "Alice", role: "Tester", image: defaultMemberImage },
  ];

  // Social Media Image URLs (local files)
  const socialIcons = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    linkedin: linkedinIcon,
  };

  return (
    <section className="container mx-auto my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="our-team bg-white p-4 rounded-lg text-center border border-[#0712a8ea] shadow-md hover:shadow-lg transition-all group"
          >
            <div className="pic p-4 mb-6 rounded-full transition-all group-hover:bg-[#0712a8ea]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto rounded-full transition-all group-hover:scale-110 group-hover:opacity-90"
              />
            </div>
            <h3 className="title text-[#0712a8ea] text-xl font-semibold">{member.name}</h3>
            <span className="post text-[#0712a8ea] text-md mb-4">{member.role}</span>
            <ul className="social flex justify-center space-x-3">
              <li>
                <a
                  href="#"
                  className="hover:bg-[#0712a8ea] hover:text-white transition-all"
                >
                  <img
                    src={socialIcons.facebook}
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-[#60c5a8] hover:text-white transition-all"
                >
                  <img
                    src={socialIcons.twitter}
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-[#60c5a8] hover:text-white transition-all"
                >
                  <img
                    src={socialIcons.linkedin}
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
