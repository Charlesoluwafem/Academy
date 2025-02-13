// pages/terms.js
import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Terms of Use</h1>
        <p className="text-gray-600 mb-4">
          These Terms of Use govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By using our website, you agree to comply with and be bound by these terms. If you disagree, please do not use our services.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. User Responsibilities</h2>
        <p className="text-gray-600 mb-4">
          You agree to use our website in a lawful manner and avoid activities that may harm the functionality of our services.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">
          We are not liable for any damages resulting from your use of our services or from errors or omissions in the content.
        </p>
        <p className="text-gray-600 mt-6">
          If you have any questions about these Terms of Use, please contact us.
        </p>
      </div>
    </div>
  );
}
