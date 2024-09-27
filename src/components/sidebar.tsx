
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    
    if (location.pathname !== "/") {
      setIsOpen(true);
    }
  }, [location.pathname]); // Run this effect on pathname change

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button onClick={toggleSidebar} className="p-4 focus:outline-none">
        <div className="space-y-2">
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </div>
      </button>

      {/* Sidebar and Overlay */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeSidebar}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold">Your Profile</h2>
              <nav className="mt-6">
                <ul>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="block p-2 rounded hover:bg-gray-700"
                      onClick={closeSidebar}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/add-post"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      New Post
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/notifications"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Notifications
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/messages"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Messages
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/explore"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Explore
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
