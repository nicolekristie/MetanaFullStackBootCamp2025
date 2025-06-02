import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./Component/Login.jsx";
import Dashboard from "./Component/Dashboard.jsx";
import Register from "./Component/Register.jsx";
import Home from "./Component/Home.jsx";
import Profile from "./Component/Profile.jsx";
import AdminDashBoard from "./Component/AdminDashboard.jsx";
import Editor from "./Component/Editor.jsx";
import Users from './Component/Users.jsx';
import Layout from "./Component/Layout.jsx";
import Unauthorized from "./Component/Unauthorized.jsx";
import Logout from "./Component/Logout.jsx";
import AdminRoute from "./Component/AdminRoute.jsx";
import { LoginProvider } from "./Context/LoginContext.jsx";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <LoginProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin Dashboard */}
        <Route path="/adminDashboard" element={<AdminDashBoard />} />

        {/* Protected routes under Dashboard layout */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editor" element={<Editor />} />
          <Route path="users" element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          } />
        </Route>
      </Routes>
      <ToastContainer />
    </LoginProvider>
  );
}

export default App;