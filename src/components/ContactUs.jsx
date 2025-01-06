import React from "react";

const ContactUs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-96 bg-gray-200">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="public/World_Map_Blank.svg"
          alt="World Map Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-4xl text-center space-y-8 py-12">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white">Contact Us</h1>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Joint Secretary 1 */}
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-lg font-semibold text-white">Joint Secretary</p>
            <a
              href="mailto:jointsecretary1@itbhu.ac.in"
              className="text-blue-400 text-sm underline hover:text-blue-500"
            >
              jointsecretary1@itbhu.ac.in
            </a>
          </div>

          {/* Secretary */}
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-lg font-semibold text-white">Secretary</p>
            <a
              href="mailto:secretary@itbhu.ac.in"
              className="text-blue-400 text-sm underline hover:text-blue-500"
            >
              secretary@itbhu.ac.in
            </a>
          </div>

          {/* Joint Secretary 2 */}
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-lg font-semibold text-white">Joint Secretary</p>
            <a
              href="mailto:jointsecretary2@itbhu.ac.in"
              className="text-blue-400 text-sm underline hover:text-blue-500"
            >
              jointsecretary2@itbhu.ac.in
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-sm font-medium text-gray-300 mt-8">
          &copy; 2024 CSI IIT(BHU). All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
