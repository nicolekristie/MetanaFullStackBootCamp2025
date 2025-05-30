import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";



const  App = () => {


  return (
    <>
    <LoginProvider>
      <Routes>
              <>
                
                 <Route path="/" component={Home}/>
                 <Route path="/home" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" component={Login} />           
              </>
                <Route
                    path="/users"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
               />
      

           
                <Route path="/editor" element={<Editor />} />
             
           
        </Routes>
    </LoginProvider>
  </>
     
    

)
 
  
}

export default App;