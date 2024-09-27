import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../context/userContext'; // Import UserContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignupPage: React.FC = () => {
  const { setUserId } = useUserContext(); // Access setUserId from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        password,
      });
  
      console.log('Sign-up response:', response.data); // Log the entire response
  
      // Access the MongoDB generated ID
      const userId = response.data._id; // Assuming the ID is at the root level
  
      if (userId) {
        setUserId(userId); // Store user ID in context
        navigate('/add-post'); // Navigate after sign-up
      } else {
        setError('User ID not found in response');
      }
    } catch (err) {
      console.error('Sign-up error:', err);
      setError('Failed to sign up.'); // Show error message
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
        {error && <div className="error">{error}</div>} {/* Display error message */}
      </form>
    </div>
  );
};

export default SignupPage;
