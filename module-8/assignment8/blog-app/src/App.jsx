import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import BlogDisplay from "./pages/BlogDisplay";
import "./App.css";
import HomePage from "./pages/Home";
import AdminDashBoard from "./pages/AdminDashboard";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "../src/components/BlogList";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "../src/components/NavBar";
import BlogPage from "./pages/BlogPage";
import { GlobalStyles } from "./styles/GlobalStyles.style";


const App = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/admindashboard" element={<AdminDashBoard />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;
