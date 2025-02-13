'use client';
import { useState } from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2D2D2D]">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/3 bg-[#D3B79C] p-12 flex flex-col justify-center items-center">
          <div className="mt-6">
            <img src="/images/logo-2.svg" alt="Logo" className="w-24" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-2/3 p-16">
          <h3 className="text-4xl font-semibold text-gray-800">Welcome Back</h3>
          <form className="mt-8 space-y-6">
            <div className="flex space-x-6">
              <div className="w-1/2">
                <label htmlFor="email" className="block text-lg text-gray-700">Email address</label>
                <input id="email" type="email" className="w-full p-4 border border-gray-300 rounded-lg mt-3 text-lg" placeholder="Email address" />
              </div>
              <div className="w-1/2">
                <label htmlFor="password" className="block text-lg text-gray-700">Password</label>
                <input id="password" type="password" className="w-full p-4 border border-gray-300 rounded-lg mt-3 text-lg" placeholder="Password" />
              </div>
            </div>
            <div className="flex justify-between items-center text-lg text-gray-600">
              <button type="submit" className="py-4 px-8 bg-[#BFAE9B] text-white rounded-lg hover:bg-[#A99785] transition duration-300 text-lg">
                Sign In
              </button>
              <a href="#" className="text-gray-600 hover:underline">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;