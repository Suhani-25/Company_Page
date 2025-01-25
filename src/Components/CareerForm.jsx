import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported

const careerForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    role: "",
    email: "",
    phone: "",
    resume: "abc",
  });

  const [errors, setErrors] = useState({});

  // Validating the form fields
  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/; // Example: validates a 10-digit phone number

    if (!formData.fullname) newErrors.fullname = "Name is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!phonePattern.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    // if (!formData.resume) newErrors.resume = "Resume is required";
    // else if (
    //   ![
    //     "application/pdf",
    //     "text/plain",
    //     "application/msword",
    //     "image/jpeg",
    //     "image/png",
    //   ].includes(formData.resume.type)
    // )
    //   newErrors.resume = "File must be a PDF, DOC, TXT, JPG, or PNG";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Axios POST request to submit the form
        const response = await axios.post('http://localhost:3001/careerForm', formData);
        
        // Successful submission
        console.log("Form submitted successfully:", response.data);
        alert("Form submitted successfully!");
  
        // Clear form fields
        setFormData({
          fullname: "",
          role: "",
          email: "",
          phone: "",
          resume: "abc",
        });
      } catch (error) {
        // Handle errors
        if (error.response) {
          console.error("Server responded with error:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
        alert("Failed to submit the form. Please try again.");
      }
    }
  
    // if (Object.keys(validationErrors).length === 0) {
    //   try {
    //     // Construct FormData object for file upload
    // // const data = new FormData();
    // // data.append("fullname", formData.fullname);
    // // data.append("role", formData.role);
    // // data.append("email", formData.email);
    // // data.append("phone", formData.phone);
    //     // //data.append("resume", formData.resume); // Append the actual file

    //     // Axios POST request
    //     // const response = await axios.post(
    //     //   "http://localhost:3001/CareerForm",
    //     //   data,
    //     //   {
    //     //     headers: {
    //     //       "Content-Type": "multipart/form-data",
    //     //     },
    //     //   }
    //     // );

    //     // Handle successful response
        
    //     // const applicantData = {
    //     //   phone: "",
    //     //   email: "",
    //     //   role: "",
    //     //   fullname: "",
    //     //   resume: ""
    //     // };
    //     console.log(formData);

    //     if (formData){
    //       console.log(formData);

    //       axios.post('http://localhost:3001/careerForm', formData)
    //         .then(response => console.log(response.data))
    //         .catch(error => {
    //           if (error.response) {
    //             // The server responded with a status code outside the 2xx range
    //             console.error("Server responded with error:", error.response.data);
    //           } else if (error.request) {
    //             // No response received from server
    //             console.error("No response received:", error.request);
    //           } else {
    //             // Error in setting up the request
    //             console.error("Error:", error.message);
    //           }
            
    //         }
    //           //console.error('Error:', error)
    //       );
          
          
    //       console.log("Form submitted successfully:", response.data);
    //       alert("Form submitted successfully!");}

    //     // Clear form fields
    //     setFormData({
    //       fullname: "",
    //       role: "",
    //       email: "",
    //       phone: "",
    //       resume: "abc",
    //     });
    //   } 
    //   catch (error)  {
    //      if (error.response){
    //       console.error("Server responded with error:", error.response.data);
    //      }
    //      else if (error.request) {
    //       // No response received from server
    //       console.error("No response received:", error.request);
    //     }else{
    //       console.error("Error:",error.message);
    //     }
    //     alert("Failed to submit the form. Please try again.");
    //   }
    // }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-blue-800 mb-4">
            Haven't found the perfect role yet?
          </h4>
          <p className="text-lg text-gray-700">
            Send us your resume, and our dedicated recruitment team will reach
            out to you soon.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <img
              src="/assets/img/CareerHiring.jpeg"
              alt="form-graphics"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

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
                {errors.fullname && (
                  <p className="text-red-500 text-sm">{errors.fullname}</p>
                )}
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
                {errors.role && (
                  <p className="text-red-500 text-sm">{errors.role}</p>
                )}
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
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* <div>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  accept=".pdf,.txt,.doc,.jpg,.jpeg,.png"
                  required
                />
                {errors.resume && (
                  <p className="text-red-500 text-sm">{errors.resume}</p>
                )}
              </div> */}

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

export default careerForm;
