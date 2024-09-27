// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../redux/store'; // Adjust the path according to your structure
import SignUp from '../views/SignupPages';
import NewPost from '../components/Card'; 
// Example for another component

const MainRoutes: React.FC = () => {
    return (
        <Provider store={store}> {/* Redux Provider */}
            <Router>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                   
                    <Route path="/post" element={<NewPost/>} />
                    {/* Add other routes as necessary */}
                </Routes>
            </Router>
        </Provider>
    );
};

export default MainRoutes;
