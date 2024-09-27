// Home.tsx
import React from 'react';
import Sidebar from '../components/sidebar'; // Adjust the path according to your structure
import PostsList from '../components/PostList'; // Import the PostsList component


const Home: React.FC = () => {
    return (
     
        <div className="flex">
            {/* Sidebar */}
            <Sidebar /> 
            
            {/* Main Content Area */}
            <div className="flex-1 p-4 bg-gray-100">
                <h1 className="text-2xl font-bold mb-6">Welcome to the Home Page</h1>

                {/* Posts List */}
                <PostsList />  {/* Display posts list here */}
            </div>
        </div>
       
    );
};

export default Home;
