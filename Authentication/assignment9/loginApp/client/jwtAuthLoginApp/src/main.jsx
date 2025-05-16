import ReactDOM from 'react-dom';
import React, { StrickMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//adding from index.js

// import {AuthProvider} from "./Context/AuthProvider.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/Authcontext";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <BrowserRouter>
      {/* wrap our main component with the provider */}
        <AuthProvider> 
           <App />
          <Routes>
            {/* <Route path="/*" element={<App />} />   */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);