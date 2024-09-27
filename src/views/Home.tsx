// Home.tsx
import React from 'react';
import Sidebar from '../components/sidebar'; // Adjust the path according to your structure

const Home: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar /> {/* Sidebar component */}
            <div className="flex-1 p-4 bg-gray-100">
                <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
                {/* Add more content here */}
            </div>
        </div>
    );
};

export default Home;
