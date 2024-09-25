import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../views/SignupPages";
import Home from "../views/Home";
import NewPost from "../views/NewPost";


const MainRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-post" element={<NewPost/>} /> 
      </Routes>
    </Router>
  );
};

export default MainRoutes;
