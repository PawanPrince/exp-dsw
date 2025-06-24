import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-white px-4">
      
      <img
        src="https://st2.depositphotos.com/1431107/8940/v/450/depositphotos_89404368-stock-illustration-404-error-sign.jpg" 
        alt="404 Not Found Illustration"
        className="w-72 h-auto mb-8 rounded-lg shadow-xl"
      />

      <h1 className="text-5xl font-extrabold mb-4 text-center text-[#c1b4a0]">
        404 - Page Not Found
      </h1>

      <p className="text-lg text-center mb-6 max-w-lg text-gray-400">
        Sorry, the page you’re looking for doesn’t exist or has been moved. Let’s get you back on track!
      </p>

      <Link to="/">
        <button className="bg-[#c1b4a0] hover:bg-[#e1d6c0] text-black font-semibold py-3 px-6 rounded-full shadow-md transition duration-200">
          🚀 Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
