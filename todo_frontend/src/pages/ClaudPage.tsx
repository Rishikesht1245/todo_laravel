import React from 'react';

const ClaudPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <span className="text-3xl font-bold text-blue-600">Loc<span className="text-gray-600">ator</span></span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Log In
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
            Forgot password
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClaudPage;