import React from "react";

const Team = () => {
  return (
    <main className="text-center text-white">
     
      {/* Meet Our Team Section */}
      <section className="py-16 bg-gray-100">
        {/* Vertical Logo */}
        {/* Replace with an actual image and comment out the placeholder */}
        <h1 className="my-8 text-2xl text-black font-bold">
          Insert Vertical Logo
        </h1>

        {/* Team Members Grid */}
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member Cards */}
            <TeamMember
              imgSrc="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"
              name="Roger Lubin"
              role="CEO"
            />
            <TeamMember
              imgSrc="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg"
              name="Jane Doe"
              role="CTO"
            />
            <TeamMember
              imgSrc="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg"
              name="John Smith"
              role="CFO"
            />
            <TeamMember
              imgSrc="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"
              name="Emily Davis"
              role="COO"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

// Team Member Card Component
const TeamMember = ({ imgSrc, name, role }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default Team;
