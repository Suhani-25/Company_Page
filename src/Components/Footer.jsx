import React from "react";


const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-white via-blue-200 to-blue-400 animate-gradient">
      <div className="flex flex-col items-center justify-center w-full text-blue-900 py-8 space-y-8">
        {/* Footer Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-900">Shivsys Inc.</h1>
        </div>

        {/* Footer Content */}
        <div className="flex flex-wrap justify-around w-full max-w-7xl px-6">
          {/* Address Section */}
          <div className="spectacledcoder-footer-section flex flex-col w-full md:w-1/4 items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="font-bold text-lg">Address</h2>
            <p className="font-semibold">Sheridan,Wyoming,82801</p>
            <p className="font-semibold">Apex Tower,Greater Noida,Uttar Pradesh</p>
            <p className="font-semibold">143, Mastermind, Royal Palms, Goregaon East, Mumbai</p>
            <p className="font-semibold">Delapeer,Bareilly,Uttar Pradesh</p>
          </div>

          {/* Mail-Us Section */}
          <div className="spectacledcoder-footer-section flex flex-col w-full md:w-1/4 items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="font-bold text-lg">Mail-Us</h2>
            <p>
              <strong>For Sales:</strong> sales@shivsys.com
            </p>
            <p>
              <strong>For Info:</strong> info@shivsys.com
            </p>
            <p>
              <strong>For Hiring:</strong> hr@shivsys.com
            </p>
          </div>

          {/* Links Section */}
          <div className="spectacledcoder-footer-section flex flex-col w-full md:w-1/4 items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="font-bold text-lg">Quick Links</h2>
            <ul className="space-y-2">
              <li className="hover:translate-x-2 transition-all">
                <a href="/App">Home</a>
              </li>
              <li className="hover:translate-x-2 transition-all">
                <a href="/AboutPage">About</a>
              </li>
              <li className="hover:translate-x-2 transition-all">
                <a href="/ServicePage">Services</a>
              </li>
              <li className="hover:translate-x-2 transition-all">
                <a href="/CareerPage">Career</a>
              </li>
              <li className="hover:translate-x-2 transition-all">
                <a href="/ContactPage">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact-Us Section */}
          <div className="spectacledcoder-footer-section flex flex-col w-full md:w-1/4 items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="font-bold text-lg">Contact-Us</h2>
            <p>+12672183807</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center space-y-4">
          <div className="font-semibold">Follow us on</div>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/100/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/100/facebook.png"
                alt="Facebook"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                width="30"
                height="30"
                src="/assets/img/linkedin2.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col w-full items-center justify-center space-y-4 py-2 px-6 text-center font-semibold bg-white text-blue-950">
        <div>Designed & Created by Shivsys,2025</div>
      </div>
    </div>
  );
};

export default Footer;
