import ReactDOM from 'react-dom';
import React, { StrickMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Editor from "./Component/Editor";
import AdminDashboard from "./Component/AdminDashboard"
import { LoginProvider } from "./Context/LoginContext.jsx";


// import { LoginContext } from '../Context/LoginContext.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";




const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  
        <BrowserRouter>
        {/* wrap our main component with the provider */}
  
            {/* <App /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/adminDashboard" element={<AdminDashboard />} />
              {/* <Route path="/*" element={<App />} />  */}
            </Routes>
        </BrowserRouter>

  </React.StrictMode>
);