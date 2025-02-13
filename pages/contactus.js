import React, { useState } from "react";

const ContactUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    website: "",
    query: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);

    // Clear form after submission
    setFormData({
      name: "",
      company: "",
      email: "",
      website: "",
      query: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#2D2D2D] flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="bg-[#B39D82] rounded-full p-2 flex items-center justify-center">
            <img src="/images/icon-contact us.svg" alt="Contact Icon" className="w-5 h-5" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center text-[#2D2D2D] mb-6">Contact Us</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-xs text-[#2D2D2D]">Full Name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border border-[#ccc] rounded-md mt-1 text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs text-[#2D2D2D]">Company Name</label>
            <input 
              id="company" 
              name="company" 
              type="text" 
              value={formData.company} 
              onChange={handleChange} 
              className="w-full p-2 border border-[#ccc] rounded-md mt-1 text-sm" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs text-[#2D2D2D]">Email Address</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border border-[#ccc] rounded-md mt-1 text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-xs text-[#2D2D2D]">Website</label>
            <input 
              id="website" 
              name="website" 
              type="text" 
              value={formData.website} 
              onChange={handleChange} 
              className="w-full p-2 border border-[#ccc] rounded-md mt-1 text-sm" 
            />
          </div>
          <div>
            <label htmlFor="query" className="block text-xs text-[#2D2D2D]">Query</label>
            <textarea 
              id="query" 
              name="query" 
              value={formData.query} 
              onChange={handleChange} 
              className="w-full p-2 border border-[#ccc] rounded-md mt-1 h-24 text-sm" 
              required 
            ></textarea>
          </div>
          <div>
            <button type="submit" className="w-full py-2.5 bg-[#B39D82] text-white text-xs font-semibold rounded-md hover:bg-[#9E8B71] transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;


