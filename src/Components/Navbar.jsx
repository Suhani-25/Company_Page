import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-700  sticky top-0 z-50 w-full">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Left Section: Logo and Brand Name */}
          <div className="flex items-center space-x-4 mr-auto">
            <img src="/assets/img/ShivsysLogo.png" alt="Logo" className="h-12 ml-0 max-w-full" />
          </div>

          {/* Center Section: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-lg font-semibold hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="/AboutPage"
              className="text-lg font-semibold hover:text-blue-500 transition duration-300"
            >
              About
            </a>
            <a
              href="/ServicePage"
              className="text-lg font-semibold hover:text-blue-500 transition duration-300"
            >
              Services
            </a>
            <a
              href="/CareerPage"
              className="text-lg font-semibold hover:text-blue-500 transition duration-300"
            >
              Career
            </a>
            <a
              href="/TeamPage"
              className="text-lg font-semibold hover:text-blue-500 transition duration-300"
            >
              Teams
            </a>
            <a
              href="/ContactPage"
              className="text-lg font-semibold hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Right Section: Get Started Button */}
          <a
            href="https://www.linkedin.com/company/shivsyssoftwaresprivatelimited"
            className="hidden lg:inline-block text-lg rounded-full bg-blue-900 text-white font-semibold py-2 px-6 hover:bg-blue-800 transition duration-300 ml-auto"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-500 inline-flex items-center justify-center p-3 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden w-full px-6 py-4 space-y-4 bg-white shadow-md">
          <a href="/" className="block text-lg font-semibold hover:text-blue-500">
            Home
          </a>
          <a href="/AboutPage" className="block text-lg font-semibold hover:text-blue-500">
            About
          </a>
          <a href="/ServicePage" className="block text-lg font-semibold hover:text-blue-500">
            Services
          </a>
          <a href="/CareerPage" className="block text-lg font-semibold hover:text-blue-500">
            Career
          </a>
          <a href="/TeamPage" className="block text-lg font-semibold hover:text-blue-500">
            Team
          </a>
          <a href="/ContactPage" className="block text-lg font-semibold hover:text-blue-500">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/company/shivsyssoftwaresprivatelimited"
            className="block text-lg font-semibold bg-blue-900 text-white rounded-full py-2 px-4 hover:bg-blue-800"
          >
            Get Started
          </a>
        </div>
      )}

      {/* WhatsApp Icon */}
      <div className="fixed bottom-24 right-6 z-10 text-right">
        <a href="https://wa.me/12672183807" target="_blank" rel="noopener noreferrer">
          <img src="/assets/img/img4.gif" alt="WhatsApp" className="w-16 h-16 md:w-24 md:h-24 max-w-full" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;