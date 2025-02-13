import React, { useState } from 'react';


const RequestDemoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Request a Demo</h1>
      <p className="text-center text-lg mb-8">
        Fill out the form below to request a demo and learn more about our services.
      </p>

      <button
        onClick={openModal}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Request Demo
      </button>

      {/* Modal Component */}
      <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default RequestDemoPage;

