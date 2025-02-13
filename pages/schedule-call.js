'use client';
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';

const ScheduleCall = () => {
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
      setMessage("Please select a date for the call.");
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
      phone,
      company,
      demoDate: formattedDemoDate,
    };

    try {
      await axios.post('http://localhost:4000/api/schedule-call', formData);
      setIsSubmitted(true);
      setMessage('Sent successfully');
    } catch (error) {
      setMessage('Failed to submit request: Please try again later');
      console.error('Error submitting request:', error.response || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#398D66] p-6">

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {isSubmitted ? (
          <p className="text-center text-blue-700 text-2xl">{message}</p>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Schedule a Call</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700" htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" className="w-full px-4 py-3 border rounded-lg" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700" htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" className="w-full px-4 py-3 border rounded-lg" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
                <input id="email" type="email" className="w-full px-4 py-3 border rounded-lg" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700" htmlFor="phone">Phone Number</label>
                <PhoneInput country={'us'} value={phone} onChange={(phone) => setPhone(phone)} containerStyle={{ width: '100%' }} inputClass="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700" htmlFor="company">Company Name</label>
                <input id="company" type="text" className="w-full px-4 py-3 border rounded-lg" placeholder="Enter your company name" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700" htmlFor="demoDate">Preferred Date</label>
                <input id="demoDate" type="date" className="w-full px-4 py-3 border rounded-lg" value={demoDate} onChange={(e) => setDemoDate(e.target.value)} />
              </div>
              <button type="submit" className="w-full px-5 py-3 bg-green-400 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleCall;
