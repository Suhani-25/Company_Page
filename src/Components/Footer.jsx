import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-200">
      {/* Footer CTA */}
      <div className="container mx-auto py-5 border-b border-[#373636]">
        <div className="flex space-x-8">
          {/* Address Section */}
          <div className="flex-1">
            <div className="flex items-center">
              <img
                src="/src/assets/img/location.gif" // Replace with your actual image path
                alt="Address"
                className="w-8 h-8 mr-3" // Smaller icon size
              />
              <div className="text-blue-950">
                <h4 className="text-lg font-semibold">Find us</h4>
                <span className="text-blue-900 text-sm">1010 , sw 54321, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Call Section */}
          <div className="flex-1">
            <div className="flex items-center">
              <img
                src="/src/assets/img/call-us.gif" // Replace with your actual image path
                alt="Phone"
                className="w-8 h-8 mr-3" // Smaller icon size
              />
              <div className="text-blue-950">
                <h4 className="text-lg font-semibold">Call us</h4>
                <span className="text-blue-900 text-sm">9876543210</span>
              </div>
            </div>
          </div>

          {/* Mail Section */}
          <div className="flex-1">
            <div className="flex items-center">
              <img
                src="/src/assets/img/mail-us.gif" // Replace with your actual image path
                alt="Mail"
                className="w-8 h-8 mr-3" // Smaller icon size
              />
              <div className="text-blue-950">
                <h4 className="text-lg font-semibold">Mail us</h4>
                <span className="text-blue-900 text-sm">shivsys@info.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto py-5">
        <div className="flex space-x-8">
          {/* Footer Widget 1 */}
          <div className="flex-1 mb-12">
            <div className="mb-8">
              <a href="index.html">
                <img
                  src=""
                  alt="Logo"
                  className="max-w-[200px] mb-6"
                />
              </a>
              <p className="text-blue-900 text-sm leading-7 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
              </p>
              <div>
                <span className="text-blue-900 block text-xl font-semibold mb-4">Follow us</span>
                <div className="flex space-x-4">
                  <a href="https://example.com/path/to/facebook-icon.png" download className="text-blue-950 text-xl bg-[#547cd2] p-2 rounded-full">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://example.com/path/to/twitter-icon.png" download className="text-blue-950 text-xl bg-[#547cd2] p-2 rounded-full">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://example.com/path/to/google-plus-icon.png" download className="text-blue-950 text-xl bg-[#547cd2] p-2 rounded-full">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Widget 2 */}
          <div className="flex-1 mb-12">
            <h3 className="text-blue-950 text-2xl font-semibold mb-8">Useful Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-950 hover:text-[#3314ff]">Home</a></li>
              <li><a href="#" className="text-blue-950 hover:text-[#3314ff]">About</a></li>
              <li><a href="#" className="text-blue-950 hover:text-[#3314ff]">Services</a></li>
              <li><a href="#" className="text-blue-950 hover:text-[#3314ff]">Portfolio</a></li>
              <li><a href="#" className="text-blue-950 hover:text-[#3314ff]">Contact</a></li>
            </ul>
          </div>

          {/* Footer Widget 3 (Subscribe) */}
          <div className="flex-1 mb-12">
            <h3 className="text-blue-950 text-2xl font-semibold mb-8">Subscribe</h3>
            <p className="text- text-sm mb-6">
              Don’t miss to subscribe to our new feeds, kindly fill the form below.
            </p>
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full p-4 bg-[#2E2E2E] text-white border border-[#2E2E2E] rounded-full mb-4"
              />
              <button className="bg-[#ff5e14] p-4 rounded-full text-white">
                <i className="fab fa-telegram-plane text-lg"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="bg-blue-300 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-center font-bold text-sm text-blue-900">
            <p>
              Copyright &copy; 2024, All Right Reserved <a href="#" className="text-[#ff5e14]">Shivsys</a>
            </p>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-5  font-bold text-sm text-[#878787]">
            
              <li><a href="#" className="hover:text-[#ff5e14]">Terms</a></li>
              <li><a href="#" className="hover:text-[#ff5e14]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#ff5e14]">Policy</a></li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
