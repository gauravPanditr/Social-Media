
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext'; // Import UserProvider
import SignupPage from './views/SignupPages';
import { Provider } from 'react-redux';
import AddPostPage from './views/NewPost';
import PostsList from './components/PostList';
import Home from './views/Home';
import store from './redux/store';
const App: React.FC = () => {
  return (
    <Provider store={store}>
    <UserProvider> {/* Wrap your application with UserProvider */}
      <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/postlist" element={<PostsList />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/add-post" element={<AddPostPage />} />
        </Routes>
      </Router>
    </UserProvider>
    </Provider>
  );
};

export default App;
