// App.tsx
import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Adjust the path according to your structure
import SignUp from './views/SignupPages';
import NewPost from './views/NewPost'; 
// Example for another component

const App: React.FC = () => {
    return (
      
            <Router>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                   
                    <Route path="/add-post" element={<NewPost/>} />
                    {/* Add other routes as necessary */}
                </Routes>
            </Router>
      
    );
};

export default App;
