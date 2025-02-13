import { useState } from 'react';
import { useRouter } from 'next/router'; // For navigation

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(''); // Clear any previous messages

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response status:", response.status); // Debug log
      let data;
      const contentType = response.headers.get('content-type');

      // Check if the response is JSON
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
        console.log("Response JSON data:", data); // Debug log
      } else {
        // Handle non-JSON responses (e.g., HTML error pages)
        const errorText = await response.text();
        console.error('Non-JSON response:', errorText);
        data = { message: 'An unexpected error occurred. Please try again later.' };
      }

      if (response.ok) {
        setMessage(data.message || 'Signup successful! Please check your email to verify your account.');
        console.log("Signup successful, message:", data.message); // Debug log
        setIsLoading(false);

        // Wait a bit for the user to see the success message, then redirect
        setTimeout(() => router.push('/login'), 1500);
      } else {
        setMessage(data.message || 'Signup failed. Please try again.');
        console.error("Signup failed, message:", data.message); // Debug log
        setIsLoading(false);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Signup error:', error);
      setIsLoading(false);
    }

    // Clear input fields on submit
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSignup} className="w-full max-w-md bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Display the message (success or error) */}
        {message && <p className="text-center mb-4 text-red-600">{message}</p>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-blue-600'} text-white p-3 rounded font-semibold`}
          disabled={isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}
