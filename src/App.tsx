
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext'; // Import UserProvider
import SignupPage from './views/SignupPages';
import AddPostPage from './views/NewPost';
import PostsList from './views/Home';

const App: React.FC = () => {
  return (
    <UserProvider> {/* Wrap your application with UserProvider */}
      <Router>
        <Routes>
          <Route path="/postlist" element={<PostsList />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/add-post" element={<AddPostPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
