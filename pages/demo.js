"use client";
import { useState } from "react";
import { X } from "lucide-react";

const DemoRequest = () => {
  const [step, setStep] = useState(1); // Step control
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Demo request submitted successfully!");
        setIsOpen(false);
      } else {
        alert("Failed to submit request");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2D2D2D]">
      <div className="flex w-full max-w-4xl bg-[#D3B79C] rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-white">Request A Demo</h2>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-6 text-white font-semibold">Choose your role to continue request</p>
        </div>

        {/* Right Side - Form */}
        {isOpen && (
          <div className="w-1/2 bg-white p-8 relative rounded-r-lg">
            <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {step === 1 ? <StepOne nextStep={() => setStep(2)} handleChange={handleChange} /> : <StepTwo prevStep={() => setStep(1)} handleChange={handleChange} handleSubmit={handleSubmit} />}
          </div>
        )}
      </div>
    </div>
  );
};

// Step One Component
const StepOne = ({ nextStep, handleChange }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Step One</h3>
      <p className="text-gray-600 text-sm mt-2">Please complete all fields below</p>
      <form className="mt-6 space-y-4">
        <InputField id="name" label="Full Name" type="text" handleChange={handleChange} />
        <InputField id="email" label="Email Address" type="email" handleChange={handleChange} />
        <InputField id="company" label="Company Name" type="text" handleChange={handleChange} />
        <InputField id="website" label="Company Website" type="text" handleChange={handleChange} />
        <button
          type="button"
          onClick={nextStep}
          className="w-full py-3 bg-[#A3B6A3] text-white text-sm font-semibold rounded-lg hover:bg-[#8AA78A] transition duration-300"
        >
          Next
        </button>
      </form>
    </div>
  );
};

// Step Two Component
const StepTwo = ({ prevStep, handleChange, handleSubmit }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Step Two</h3>
      <p className="text-gray-600 text-sm mt-2">Almost done! Just a few more details.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <InputField id="industry" label="Industry" type="text" handleChange={handleChange} />
        <InputField id="source" label="How did you hear about us?" type="text" handleChange={handleChange} />
        <InputField id="users" label="Estimated users to onboard?" type="text" handleChange={handleChange} />
        <InputField id="launch" label="Expected Launch Date?" type="text" handleChange={handleChange} />
        
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={prevStep}
            className="py-3 px-6 bg-gray-400 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition duration-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="py-3 px-6 bg-[#A3B6A3] text-white text-sm font-semibold rounded-lg hover:bg-[#8AA78A] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ id, label, type, handleChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm text-gray-700">{label}</label>
    <input id={id} type={type} className="w-full p-3 border border-gray-300 rounded-lg mt-2" onChange={handleChange} />
  </div>
);

export default DemoRequest;

