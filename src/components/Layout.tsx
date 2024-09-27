// Layout.tsx
import React from 'react';
import Sidebar from '../components/sidebar'; // Adjust the path to Sidebar

interface LayoutProps {
  children: React.ReactNode; // Accepts any children components
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
