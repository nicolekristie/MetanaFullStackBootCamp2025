import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/Home.jsx";
import AdminDashBoard from "./pages/AdminDashboard.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Navbar from "./components/NavBar.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import Login from "./components/Login.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path="/create-account" element={<RegistrationPage />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bloglist" element={<BlogListPage />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/admindashboard" element={<AdminDashBoard />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
