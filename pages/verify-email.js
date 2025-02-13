import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const VerifyEmail = () => {
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { token } = router.query; // Get the token from the query params

  useEffect(() => {
    if (token) {
      verifyEmail(token); // Call the verification function once the token is available
    }
  }, [token]); // Run this effect when token changes

  const verifyEmail = async (token) => {
    try {
      // Send a GET request to your backend API to verify the email with the token
      const response = await fetch(`http://localhost:4000/api/verify-email?token=${token}`);

      // Check if the response is not ok (not a 2xx status)
      if (!response.ok) {
        const text = await response.text(); // Read the response as plain text
        setMessage('Error: ' + text); // Show the raw response text if not JSON
        console.error('Error from API:', text); // Log the error for debugging
        return;
      }

      // Try to parse the response as JSON
      const data = await response.json();

      // Check the response status and show appropriate messages
      if (response.ok) {
        setMessage('Email successfully verified!');
      } else {
        setMessage(data.message || 'Something went wrong during verification.');
      }
    } catch (err) {
      // Handle errors during the fetch request
      setMessage('Error verifying email. Please try again later.');
      console.error('Verification error:', err); // Log the error for debugging
    }
  };

  return (
    <div>
      <h1>Verify Email</h1>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
