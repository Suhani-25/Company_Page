import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    company: '',
    message: '',
    selectedFile: null,
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  // Animation duration and once flag for single trigger
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, selectedFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: '',
      workEmail: '',
      phoneNumber: '',
      company: '',
      message: '',
      selectedFile: null,
    });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header Section for Contact Page */}
      <section className="contact-header bg-white text-blue-800 py-16 mb-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch with Shivsys</h1>
          <p className="text-lg mb-8 text-blue-950">
            We’d love to hear from you! Whether you have questions, feedback, or you're ready to start a project, just fill out the form below and we’ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="bg-white p-10 rounded-lg shadow-md max-w-4xl mx-auto mb-12 border-3 border-teal-300">
        <h2 className="text-blue-900 text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-700 mb-8">
          Contact us for a quote, CVs, or any inquiries. We'll revert within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label htmlFor="workEmail" className="text-gray-700">Work Email</label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phoneNumber" className="text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="company" className="text-gray-700">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-gray-700">Your Message/Requirements</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
            ></textarea>
          </div>

          {/* File Input (Optional) */}
          <div>
            <label htmlFor="selectedFile" className="text-gray-700">Upload a File</label>
            <input
              type="file"
              id="selectedFile"
              name="selectedFile"
              onChange={handleFileChange}
              className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
          >
            Send Your Query
          </button>
        </form>
      </div>

      {/* Project Overview Section with dynamic animations */}
      <section className="project-overview py-16 mt-12 border-2 border-gray-400 rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <div className="service-heading">
              <h2 className="text-3xl font-semibold mb-4">What's the Next Step?</h2>
              <p className="text-lg text-gray-600">
                At Shivsys, we know clear communication is key to a project's success. That's why we simplify project management with 3 distinct phases.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="service-box text-center hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out" data-aos="fade-up">
              <div className="img-left flex justify-center items-center mb-4">
                <img
                  src="/src/assets/img/idea-evaluation.svg"
                  alt="Idea Evaluation"
                  className="w-16 h-16 filter brightness-125" // Brighter icons
                />
              </div>
              <div className="service-content">
                <h3 className="text-2xl font-semibold mb-2">Idea Evaluation</h3>
                <p className="text-lg text-gray-600">
                  Assessing the feasibility and potential of a concept to determine its viability, scalability, and involved risks.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-box text-center hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="100">
              <div className="img-left flex justify-center items-center mb-4">
                <img
                  src="/src/assets/img/Contact.svg"
                  alt="Project Scope"
                  className="w-16 h-16 filter brightness-125" // Brighter icons
                />
              </div>
              <div className="service-content">
                <h3 className="text-2xl font-semibold mb-2">Project Scope</h3>
                <p className="text-lg text-gray-600">
                  Defining the objectives, deliverables, and boundaries for ensuring clarity, alignment, and effective management.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-box text-center hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="200">
              <div className="img-left flex justify-center items-center mb-4">
                <img
                  src="/src/assets/img/project-execution-icon.svg"
                  alt="Project Execution"
                  className="w-16 h-16 filter brightness-125" // Brighter icons
                />
              </div>
              <div className="service-content">
                <h3 className="text-2xl font-semibold mb-2">Project Execution</h3>
                <p className="text-lg text-gray-600">
                  Implementing tasks to achieve objectives within scope, budget, and timeline with careful planning, execution, and monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hire Us Button in a separate card with transparent background */}
        <div className="w-full max-w-2xl p-6 md:p-8 mb-10 mt-12 rounded-xl shadow-xl relative z-10">
          <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
            <span className="text-blue-900 font-bold text-xl md:text-2xl text-center md:text-left">
              Hire The Best Developers Around You
            </span>
            <button
              className="text-white font-bold py-3 px-6 md:py-4 md:px-8 text-lg md:text-xl rounded-full shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl duration-300"
            >
              Hire Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
