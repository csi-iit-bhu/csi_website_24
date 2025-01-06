import React from "react";

const AboutUs = () => {
  return (
    <div className="relative h-[36rem] w-11/12 bg-gray-300 mx-auto mt-24 rounded-3xl text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold py-6">About Us</h1>
      <img
        src="public\tree.png"
        alt="tree"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3"
      />
    </div>
  );
};

export default AboutUs;
