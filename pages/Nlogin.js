import { useState } from 'react'; 
import { useRouter } from 'next/router'; // For navigation

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // To show loading state
  const router = useRouter(); // To navigate after successful login

  // Handle the login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(''); // Clear previous messages

    try {
      // Send POST request to backend for login
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if response is ok (status 200-299)
      if (response.ok) {
        // If response is OK, parse the response as JSON
        const data = await response.json();

        // Store the token and redirect to the dashboard
        localStorage.setItem('authToken', data.token);
        setIsLoading(false);
        router.push('/dashboard'); // Redirect to the dashboard
      } else {
        // If response is not OK, handle error message
        const responseText = await response.text(); // Get response text (not JSON)
        
        // Attempt to parse responseText as JSON, if not, use it as plain text
        try {
          const data = JSON.parse(responseText);
          setMessage(data.message || 'An error occurred. Please try again.');
        } catch (err) {
          setMessage(responseText || 'An unexpected error occurred. Please try again.');
        }

        setIsLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Something went wrong. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
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
          {isLoading ? 'Logging In...' : 'Log In'}
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

