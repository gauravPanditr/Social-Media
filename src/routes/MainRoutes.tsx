
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../views/SignupPages'

const MainRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/signup" element={<Signup />} />
     
      </Routes>
    </Router>
  );
};

export default MainRoutes;
