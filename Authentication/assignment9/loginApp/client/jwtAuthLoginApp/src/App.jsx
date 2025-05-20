// 


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import AdminDashBoard from "./Component/AdminDashboard.jsx";
import Editor from "./Component/Editor.jsx";
import Layout from "./Component/Layout.jsx";
import Unauthorized from "./Component/Unauthorized.jsx";
import Logout from "./Component/Logout";
import { AuthProvider } from './Context/AuthContextLatest';
import { ProtectedRoute } from './Context/ProtectedRoute';
import Error from './Component/Error';

const Roles = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:8015/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const token = localStorage.getItem('token');
      const result = token ? true : false;
      setIsAuthenticated(result);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);

  const storedRole = localStorage.getItem('user_role');

  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register setAuth={setAuth} />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout setAuth={setAuth} />} />
        {/* </Route> */}

        {/* Role-based Routes */}
        <Route element={<ProtectedRoute allowedRoles={[Roles.Admin]} />}>
          <Route path="/adminDashboard" element={<AdminDashBoard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={[Roles.Editor]} />}>
          <Route path="/editor" element={<Editor />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
