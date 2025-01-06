import React from "react";

const Achievements = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-gray-300 rounded-lg shadow-lg p-8 w-full max-w-4xl">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold mb-6">Achievements</h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
          {/* Ongoing Projects */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold">On Going Projects</p>
          </div>

          {/* Total Projects */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold">Total Projects</p>
          </div>

          {/* Completed Projects */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold">Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
