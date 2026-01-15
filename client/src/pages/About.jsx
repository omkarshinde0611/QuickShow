import React from "react";

const About = () => {
  return (
    <div className="pt-28 pb-20 px-6 md:px-16 lg:px-36 bg-black text-gray-200">
      
      {/* Header Section */}
      <div className="max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          This platform is built to simplify the way people discover movies and book tickets.
          We focus on creating a smooth, reliable experience without unnecessary complexity.
        </p>
      </div>

      {/* Divider */}
      <div className="my-14 h-px bg-white/10" />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-medium text-white mb-4">
            Our Purpose
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            The idea behind this project was to build a clean and intuitive movie booking
            platform that feels fast and easy to use. From browsing movies to managing
            bookings, every feature is designed with user convenience in mind.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Instead of cluttered interfaces and confusing flows, we aim to deliver a
            straightforward experience that works well across devices.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-2xl font-medium text-white mb-4">
            What the Platform Offers
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              Browse currently running and upcoming movies
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              Watch trailers and view movie details
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              Secure and fast ticket booking
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              User accounts with booking history
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              Admin panel for managing movies and shows
            </li>
          </ul>
        </div>

      </div>

      {/* Technology Section */}
      <div className="mt-16 max-w-5xl">
        <h2 className="text-2xl font-medium text-white mb-4">
          Technology
        </h2>
        <p className="text-gray-400 leading-relaxed">
          The application is built using React for the frontend and Tailwind CSS for styling,
          with secure authentication and role-based access for users and administrators.
          Performance, scalability, and maintainability were key considerations during development.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mt-14 max-w-5xl">
        <h2 className="text-2xl font-medium text-white mb-4">
          Vision
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Our long-term vision is to continuously improve the platform by adding smarter
          features, better recommendations, and an even smoother booking experience for users.
        </p>
      </div>

    </div>
  );
};

export default About;
