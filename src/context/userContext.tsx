import React, { createContext, useContext, useState, ReactNode } from 'react';


interface UserContextType {
  userId: string | null; // User ID can be a string or null
  setUserId: (id: string | null) => void; // Function to set user ID
}


const UserContext = createContext<UserContextType | undefined>(undefined);


const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null); // State to hold user ID

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};


const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
