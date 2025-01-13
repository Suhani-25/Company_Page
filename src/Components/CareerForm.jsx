import React, { useState } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    role: '',
    email: '',
    phone: '',
    resume: null,
  });

  const [errors, setErrors] = useState({}); // To store error messages

  // Validating the form fields
  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/; // Example: validates a 10-digit phone number

    if (!formData.fullname) newErrors.fullname = 'Name is required';
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailPattern.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!phonePattern.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    else if (!['application/pdf', 'text/plain', 'application/msword', 'image/jpeg', 'image/png'].includes(formData.resume.type))
      newErrors.resume = 'File must be a PDF, DOC, TXT, JPG, or PNG';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form
    const validationErrors = validate();
    setErrors(validationErrors);

    // If no validation errors, proceed with form submission logic
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic (e.g., API call)
      console.log('Form submitted', formData);

      // Clear form fields after submission
      setFormData({
        fullname: '',
        role: '',
        email: '',
        phone: '',
        resume: null,
      });
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-blue-800 mb-4">
            Haven't found the perfect role yet?
          </h4>
          <p className="text-lg text-gray-700">
            Send us your resume, and our dedicated recruitment team will reach out to you soon.
          </p>
        </div>

        <div className="flex justify-center mb-8 lg:hidden">
          <img
            src="/src/assets/img/form-graphics.png"
            alt="form-graphics"
            className="w-48"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          {/* Image container with equal width */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <img
              src="/src/assets/img/form-graphics.png"
              alt="form-graphics"
              className="w-full h-full object-cover rounded-lg shadow-lg" // Ensure it covers the space and is equal in size
            />
          </div>

          {/* Form container with equal width */}
          <div className="lg:w-1/2 w-full h-full border border-gray-300 rounded-lg p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Name"
                  required
                />
                {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Role"
                  required
                />
                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Phone"
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  accept=".pdf,.txt,.doc,.jpg,.jpeg,.png"
                  required
                />
                {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;
