import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';

const RequestDemoModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [demoDate, setDemoDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!demoDate) {
      setMessage("Please select a date for the demo.");
      return;
    }

    const demoDateObj = new Date(demoDate);
    if (isNaN(demoDateObj)) {
      setMessage("Invalid date format. Please select a valid date.");
      return;
    }

    const formattedDemoDate = demoDateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    const formData = {
      firstName,
      lastName,
      email,
      phone,  // Phone already formatted with the country code
      company,
      demoDate: formattedDemoDate,
    };

    try {
      await axios.post('http://localhost:4000/api/demo-request', formData);
      setIsSubmitted(true);
      setMessage('Sent successfully');
    } catch (error) {
      setMessage('Failed to submit demo request: Please try again later');
      console.error('Error submitting request:', error.response || error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
        {isSubmitted ? (
          <p className="text-center text-white text-2xl">{message}</p>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-white mb-6">Request a Demo</h2>
            <p className="text-center text-gray-200 mb-8">
              Schedule consultation and we'll re.
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="custom-phone-input block text-sm font-semibold text-white" htmlFor="phone">Phone Number</label>
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={(phone, country) => {
                    // Format phone with '+' and space between country code and phone number
                    const formattedPhone = `+${country.dialCode} ${phone.slice(country.dialCode.length)}`;
                    setPhone(formattedPhone);
                  }}
                  enableSearch={true}
                  inputClass="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  containerStyle={{
                    width: '100%',
                    borderRadius: '8px'
                  }}
                  dropdownStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '0.375rem',
                    width: '900%',
                    maxHeight: '900px',
                    zIndex: 999,
                    overflowY: 'auto'
                  }}
                  searchStyle={{
                    width: '100%',
                    padding: '0.5rem',
                    borderBottom: '1px solid #e2e8f0',
                    backgroundColor: '#f9fafb',
                    fontSize: '20px',
                    height: '90px'
                  }}
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="company">Company Name</label>
                <input
                  id="company"
                  type="text"
                  className="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              {/* Preferred Demo Date */}
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="demoDate">Preferred Demo Date</label>
                <input
                  id="demoDate"
                  type="date"
                  className="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  value={demoDate}
                  onChange={(e) => setDemoDate(e.target.value)}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestDemoModal;