import React, { createContext, useState, useContext } from 'react';

// 1. Create Context
const AuthContext = createContext();

// 2. AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in

  // Simulated login (normally you'd verify credentials)
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};