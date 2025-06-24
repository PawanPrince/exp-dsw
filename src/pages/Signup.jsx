import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#65625d] via-[#917442] to-red-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#2d2a26] rounded-2xl p-8 shadow-2xl border border-[#c1b4a0]">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#c1b4a0]">Create an Account</h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-[#c1b4a0] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#bfa98c]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#c1b4a0] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#bfa98c]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#c1b4a0] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#bfa98c]"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-lg bg-[#c1b4a0] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#bfa98c]"
          />
          <button
            type="submit"
            className="w-full bg-[#c1b4a0] hover:bg-[#e1d6c0] text-black font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{' '}
          <a href="/" className="text-[#c1b4a0] hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
