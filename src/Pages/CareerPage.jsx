import React from 'react';

const jobListings = [
  { title: 'Software Engineer', location: 'Remote', description: 'Develop and maintain web applications using React and Node.js.' },
  { title: 'Product Manager', location: 'San Francisco, CA', description: 'Lead product development for cutting-edge software solutions.' },
  { title: 'UX/UI Designer', location: 'Remote', description: 'Design user-centric interfaces and experiences for web applications.' },
  { title: 'Marketing Specialist', location: 'New York, NY', description: 'Create and execute marketing strategies to grow Shivsys brand awareness.' },
  // Add more job listings as needed
];

const CareerPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Careers at Shivsys</h1>
      <p>We're always looking for talented individuals to join our team!</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {jobListings.map((job, index) => (
          <div key={index} style={{ width: '250px', margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <button style={{ padding: '10px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
