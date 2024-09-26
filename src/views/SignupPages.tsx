// views/SignupPage.tsx
import React, { useState } from 'react';
import { signUpUser } from '../apis/authapi'; // Import the signUpUser API function
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate(); // Get navigate function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await signUpUser({ username, password });
      setSuccessMessage(`Signup successful! User ID: ${response._id}`);
      setUsername('');
      setPassword('');

      // Navigate to Add Post page
      navigate('/add-post'); // Use navigate instead of history
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
