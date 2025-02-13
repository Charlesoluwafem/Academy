import React, { useState } from 'react';

const ContactModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  // Handle form submission
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const formData = { name, email, message };

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Log the response for debugging
      console.log('Response Status:', response.status);
      console.log('Response Headers:', response.headers);

      // First, read the response as text
      let responseBody = await response.text();

      // Try parsing the response body as JSON
      let data;
      try {
        data = JSON.parse(responseBody);
      } catch (jsonErr) {
        console.warn('Failed to parse JSON, using raw response...');
        data = responseBody;  // Fallback to raw response text if JSON parsing fails
      }

      console.log('Response Data:', data);

      if (response.ok) {
        setSuccess('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data.message || data || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
     

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-white">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-900 bg-white"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={toggleModal} className="text-white mr-4">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>

        {/* Display success or error message */}
        {success && <p className="text-green-500 mt-4">{success}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ContactModal;
