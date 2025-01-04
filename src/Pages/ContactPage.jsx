import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    company: '',
    message: '',
    selectedFile: null,
  });

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
    <div className="bg-white p-10 rounded-lg shadow-md max-w-4xl mx-auto relative">
      <div className="motion-border absolute inset-0 border-4 border-teal-500 rounded-lg animate-border-motion"></div>
      <h2 className="text-blue-900 text-3xl font-bold mb-6 relative z-10">Let's Connect</h2>
      <p className="text-gray-700 mb-8 relative z-10">
        Contact us for a quote, CVs, or any inquiries. We'll revert within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out transform hover:border-teal-400 focus:border-teal-500"
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
              className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out transform hover:border-teal-400 focus:border-teal-500"
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
              className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out transform hover:border-teal-400 focus:border-teal-500"
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
              className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out transform hover:border-teal-400 focus:border-teal-500"
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
            className="bg-gray-100 border-2 border-gray-200 rounded-md p-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out transform hover:border-teal-400 focus:border-teal-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Send Your Query
        </button>
      </form>

    </div>
  );
}

export default ContactPage;
