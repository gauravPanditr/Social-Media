import React, { useState } from "react";
import Input from "../components/Input"; 
import { signUpUser } from "../apis/authapi";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     signUpUser({username,password});
    console.log({ username, password });
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl mb-6 text-center">Sign Up</h2>
      <Input 
        label="Username" 
        placeholder="Enter your username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required 
      />
    
      <Input 
        label="Password" 
        type="password" 
        placeholder="Enter your password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
