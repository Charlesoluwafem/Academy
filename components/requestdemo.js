import React, { useState } from "react";

const RequestDemo = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    industry: "",
    source: "",
    estimatedUsers: "",
    launchDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted with data:", formData);
  };

  const isStepOneValid = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.companyName &&
      formData.companyWebsite
    );
  };

  const isStepTwoValid = () => {
    return (
      formData.industry &&
      formData.source &&
      formData.estimatedUsers &&
      formData.launchDate
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
          &times;
        </button>

        {/* Step One */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Request A Demo</h2>
            <p className="text-gray-600">Please complete all fields below.</p>

            <form>
              <div className="mb-3">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-700">Company Website</label>
                <input
                  type="text"
                  name="companyWebsite"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter company website"
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="button"
                className="w-full bg-green-600 text-white p-2 rounded mt-4"
                onClick={() => setStep(2)}
                disabled={!isStepOneValid()}
              >
                Next
              </button>
            </form>
          </div>
        )}

        {/* Step Two */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step Two</h2>
            <p className="text-gray-600">Please complete all fields below.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-gray-700">Industry</label>
                <input
                  type="text"
                  name="industry"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-700">How did you hear about us?</label>
                <input
                  type="text"
                  name="source"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter source"
                  value={formData.source}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-700">Estimated users to onboard?</label>
                <input
                  type="text"
                  name="estimatedUsers"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter number of users"
                  value={formData.estimatedUsers}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-700">When would you like to launch?</label>
                <input
                  type="date"
                  name="launchDate"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.launchDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-400 text-white p-2 rounded"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white p-2 rounded"
                  disabled={!isStepTwoValid()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestDemo;
