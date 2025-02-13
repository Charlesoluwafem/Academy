// pages/privacy.js
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#398D66] p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          Your privacy is very important to us. This Privacy Policy outlines the types of information we collect, how we use it, and how we protect it.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Information Collection</h2>
        <p className="text-gray-600 mb-4">
          We may collect personal information, including your name, email address, and any other information you provide to us when you use our services.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. Use of Information</h2>
        <p className="text-gray-600 mb-4">
          We use your personal information to provide and improve our services, respond to inquiries, and communicate with you.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Data Protection</h2>
        <p className="text-gray-600 mb-4">
          We take appropriate security measures to protect your data from unauthorized access, alteration, and disclosure.
        </p>
        <p className="text-gray-600 mt-6">
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </div>
    </div>
  );
}
