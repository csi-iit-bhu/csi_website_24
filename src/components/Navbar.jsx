import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-green-700 text-white">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="public\csi-logo-removebg-preview.png"
            alt="CSI Logo"
            className="w-44"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Events
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Verticals
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Achievement
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Team
          </a>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12H4.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M12 6.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0112 21.75a9.75 9.75 0 010-19.5 9.718 9.718 0 016.002 2.248A7.501 7.501 0 0021.752 15z"
            />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-items-center">
        <div className="w-full text-center text-white py-16 bg-green-700">
          <h1 className="text-8xl font-bold">CSI</h1>
          <p className="text-2xl font-semibold mt-4">
            Club Of Sustainability & Innovation
          </p>
        </div>
       
      </main>
    </div>
  );
};

export default Navbar;