import React from "react";

const Verticals = () => {
  const technicalVerticals = [
    {
      title: "Machine Learning and AI",
      image: "ML-AI.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic.",
    },
    {
      title: "Data Analysis",
      image: "DataAnalysis.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, unde.",
    },
    {
      title: "Software Development",
      image: "SDE.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ex!",
    },
    {
      title: "Electrotech",
      image: "ElectroTech.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ex!",
    },
    {
      title: "Materials",
      image: "Materials.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ex!",
    },
    {
      title: "Mech Innovations",
      image: "MechInno.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ex!",
    },
    {
      title: "Chemical",
      image: "chem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ex!",
    },
  ];

  const managementVerticals = [
    {
      title: "Outreach And Sponsorship",
      image: "Outreach.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ex!",
    },
    {
      title: "Events And Operations",
      image: "E&Ops.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ex!",
    },
    {
      title: "Social Media",
      image: "SocialMedia.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ex!",
    },
  ];

  return (
    <main className="text-center py-10 text-white bg-gray-200">
      <section className="max-w-7xl mx-auto p-6 rounded-lg bg-gray-200">
        {/* Heading */}
        <h2 className="text-4xl text-black font-bold mb-8">Our Verticals</h2>

        {/* Technical Verticals */}
        <div className="mb-12">
          <h3 className="text-3xl text-black font-semibold mb-4">Technical Verticals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalVerticals.map((vertical, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                <h4 className="text-2xl font-semibold">{vertical.title}</h4>
                <div className="flex justify-center items-center my-4">
                  <img
                    src={vertical.image}
                    alt={vertical.title}
                    className="h-20 rounded-full"
                  />
                </div>
                <p className="mt-2 text-sm">{vertical.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management Verticals */}
        <div>
          <h3 className="text-3xl text-black font-semibold mb-4">Management Verticals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementVerticals.map((vertical, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                <h4 className="text-2xl font-semibold">{vertical.title}</h4>
                <div className="flex justify-center items-center my-4">
                  <img
                    src={vertical.image}
                    alt={vertical.title}
                    className="h-20 rounded-full"
                  />
                </div>
                <p className="mt-2 text-sm">{vertical.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Verticals;
