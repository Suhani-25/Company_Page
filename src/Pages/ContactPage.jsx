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
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
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
      {/* Header Section */}
      <section className="contact-header bg-white text-blue-800 py-16 mb-6">
        <div className="max-w-screen-xl mx-auto text-center" data-aos="fade-down">
          <h1 className="text-5xl sm:text-4xl font-extrabold mb-4">Get in Touch with Shivsys</h1>
          <p className="text-lg mb-8 px-4 text-blue-950">
            We’d love to hear from you! Whether you have questions, feedback, or you're ready to start a project, fill out the form below and we’ll get back to you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <div
        className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md max-w-4xl mx-auto mb-12 border-2 border-teal-300"
        data-aos="zoom-in"
      >
        <h2 className="text-blue-900 text-3xl font-bold mb-6 text-center">Let's Connect</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:ring-2 focus:ring-teal-500"
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
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:ring-2 focus:ring-teal-500"
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
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:ring-2 focus:ring-teal-500"
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
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full h-32 focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-300"
          >
            Send Your Query
          </button>
        </form>
      </div>

      
    </div>
  );
}

export default ContactPage;
