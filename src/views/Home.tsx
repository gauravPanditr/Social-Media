import React from 'react';
import Sidebar from '../components/sidebar'; // Adjust the import path as needed

const Home: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className="p-8">
        <h1 className="text-2xl font-semibold">Welcome to the Home Page</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
};

export default Home;
