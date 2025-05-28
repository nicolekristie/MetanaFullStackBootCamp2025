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
import Layout from "./Component/Layout.jsx";
import Unauthorized from "./Component/Unauthorized.jsx";
import Logout from "./Component/Logout.jsx";
// import RequireAuth from "./Component/RequireAuth.jsx";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./Context/Authcontext.jsx";

import { useAuth } from "./Context/Authcontext.jsx";

// import ProtectedRoute from './Component/ProtectedRoute.jsx';

import { LoginProvider } from "./Context/LoginContext.jsx";




const Roles = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("/auth/is-verify", {
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


  // const storedToken = localStorage.getItem('token');
 
 
  // const setLoggedIn = window.localStorage.getItem("loggedIn")
  // const storedRole = window.localStorage.getItem('user_role');

   const storedRole = "Admin"

  // console.log(`Is the user logged in ${isLoggedIn}`)

  // const [ loggedIn, setLoggedIn ] =  useState(false);

  return (
    <>
    <LoginProvider>
      <Routes>
            {/* Public Routes */}
            {/* {!isLoggedIn && ( */}
              <>
                {/* <Route path="/" element={isLoggedIn == "true" ? <Profile /> : <Login />} /> */}
                 <Route path="/" component={Home}/>
                <Route path="/home" component={Home} />
                {/* <Route path="/login" element={<Login />} /> */}

                    <Route path="/login" component={Login} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" component={Login} />
                {/* <Route path="/layout" element={<Layout />} /> */}
                {/* <Route path="/adminDashboard" element={<Unauthorized />} /> */}
              </>
            {/* )} */}
   
              <Route path="/unauthorized" element={<Unauthorized />} />
                        
              {/* <Route element={<ProtectedRoute />}> */}
             
                  <Route path="/login" element={ <Navigate to="/" />} />
                  <Route path="/register" element={<Navigate to="/" />} />
                  {/* <Route path="/dashboard" element={<DashBoard />} /> */}
                  <Route path="/profile" element={<Profile />} />

                  {/* Private route */}
                  {/* {storedRole = "admin" ? 
                    <Route path="/adminDashboard" element={<Navigate to="/" />} />
            
                  :  <Route path="/adminDashboard" element={<AdminDashBoard />} />
                  } */}
             
              {/* </Route> */}

                {/* Private routes> Role-based Routes */}  
                <Route element={<ProtectedRoute allowedRoles={[Roles.Admin]} />}>
                  <Route path="/adminDashboard" element={<AdminDashBoard />} />
                </Route>

                <Route element={<ProtectedRoute allowedRoles={[Roles.Editor]} />}>
                  <Route path="/editor" element={<Editor />} />
                </Route>
        </Routes>
    </LoginProvider>
  </>
     
    

)
 
  
}

export default App;