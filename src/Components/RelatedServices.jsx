import React from "react";

const RelatedServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">
          Related Services Which Might Interest You
        </h2>

        {/* List of related services */}
        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <a
              href=""
              className="bg-indigo-300 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-indigo-400 transition-all duration-300"
            >
              Quality Engineering
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-rose-400 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-rose-300 transition-all duration-300"
            >
              AI & Data Analytics
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-teal-200 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-teal-300 transition-all duration-300"
            >
              Ed Tech
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-blue-200 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-blue-300 transition-all duration-300"
            >
              Development Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-amber-300 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-amber-400 transition-all duration-300"
            >
              Web Design & Development
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-fuchsia-400 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-fushsia-500 transition-all duration-300"
            >
              Software Testing
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-indigo-400 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300"
            >
              Mobile App Development
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-pink-300 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-pink-400 transition-all duration-300"
            >
              Cloud &amp; DevOps
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-yellow-200 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300"
            >
              Salesforce
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-rose-300 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-rose-400 transition-all duration-300"
            >
              Data Engineering
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-purple-300 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-purple-400 transition-all duration-300"
            >
              Blockchain
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-green-300 text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-green-400 transition-all duration-300"
            >
              Artificial Intelligence
            </a>
          </li>
        </ul>

        {/* Button */}
        <div className="mt-8 text-center">
          <a
            href="/ContactPage"
            className="inline-flex items-center justify-center bg-orange-400 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-orange-500 transition-all duration-300"
          >
            TALK TO OUR TEAM
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967L14.7574 0.696699C14.4645 0.403806 13.9896 0.403806 13.6967 0.696699C13.4038 0.989593 13.4038 1.46447 13.6967 1.75736L17.9393 6L13.6967 10.2426C13.4038 10.5355 13.4038 11.0104 13.6967 11.3033C13.9896 11.5962 14.4645 11.5962 14.7574 11.3033L19.5303 6.53033ZM0.5 6.75L19 6.75V5.25L0.5 5.25L0.5 6.75Z"
                fill="black"
              />
            </svg>
    
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
