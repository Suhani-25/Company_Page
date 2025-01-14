import React from 'react';

const ServicesPage = () => {
  const cardData = [
    {
      title: 'Custom Software Development',
      description:
        'Empowering your business with tailor-made software solutions designed to streamline processes and enhance productivity.',
      backgroundImage:
        'url("https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      clipPath: 'circle(calc(6.25rem + 7.5vw) at 100% 100%)',
    },
    {
      title: 'IT Infrastructure Management',
      description:
        'Reliable and scalable infrastructure solutions to keep your operations running smoothly and securely.',
      backgroundImage:
        'url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      clipPath: 'circle(calc(6.25rem + 7.5vw) at 0% 100%)',
    },
    {
      title: 'Cloud Solutions and Services',
      description:
        'Innovative cloud-based services to optimize your digital transformation journey and ensure seamless scalability.',
      backgroundImage:
        'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      clipPath: 'circle(calc(6.25rem + 7.5vw) at 100% 0%)',
    },
    {
      title: 'Cybersecurity',
      description:
        'Comprehensive security strategies to safeguard your business from evolving cyber threats.',
      backgroundImage:
        'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      clipPath: 'circle(calc(6.25rem + 7.5vw) at 0% 0%)',
    },
  ];

  return (
    <section className="min-h-screen bg-white text-center py-20 px-4 sm:px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700 animate-textColorChange font-custom text-center sm:text-lg max-w-lg mx-auto mb-4 capitalize flex items-center justify-center">
        what we're offering
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-indigo-400 ml-2 w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700 animate-textColorChange font-custom text-center  sm:text-4xl md:text-5xl xl:text-6xl max-w-3xl mx-auto mb-12 leading-snug">
        Services Built Specifically for your Business
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative p-6 sm:p-8 md:p-10 bg-white rounded-lg shadow-lg group transition-all duration-300 hover:bg-blue-200"
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg transition-all duration-300 group-hover:clip-circle"
              style={{
                backgroundImage: card.backgroundImage,
                clipPath: card.clipPath,
              }}
            ></div>
            <div className="relative z-10">
              <h2 className="capitalize text-blue-800 mb-3 sm:mb-4 text-xl sm:text-2xl xl:text-3xl">
                {card.title}
              </h2>
              <p className="text-blue-950 text-sm sm:text-base group-hover:text-white">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
