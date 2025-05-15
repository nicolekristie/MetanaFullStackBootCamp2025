import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import AdminDashBoard from "./Component/AdminDashboard.jsx";
import Editor from "./Component/Editor.jsx";
import Layout from "./Component/Layout.jsx";
import Unauthorized from "./Component/Unauthorized.jsx";
import RequireAuth from "./Component/RequireAuth.jsx";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
// import { AuthContext } from "./Context/Authcontext";
// import { UserProvider } from "./Context/userContext";
// import { AuthProvider } from "./Context/AuthProvider";


const Roles = {
  'User' : 2001,
  'Editor': 1984,
  'Admin': 5150
}



toast.configure;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const [isAuthorized, setIsAuthorized] = useState(false);

//   const [role, setRole] = useState(null);

//  const [auth, setAuth] = useState(false);

  // const authenticated = () => {
  //   setIsAuthenticated(!isAuthenticated);  //true
  // };

  // const setAuth= (boolean) => {
  //   setIsAuthorized(boolean)
  // }

  // async function setAuthen() {
  //   try {
  //     const response = await fetch("http://localhost:8015/is-authorized", {
  //       method: "GET",
  //       headers: { "token": localStorage.token },
  //     });

  //     const parseRes = await response.json();
  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }


  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  //validate JWT check if token is valid>go to dashboard if you are authenticated  (refresh will reset our state)>set is authenticated to true
  //function will be refreshed

  //check if JWT is valid>continue to bring you to the dashboard if you are authenticate>refresh app>resets our state>
  // by default it is false>refresh check if token is valid and set isAuthenticate to true

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5173/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

    

      const token = localStorage.getItem('token'); // Example: get token from storage
      console.log(`token value: ${token}`)

// const result = token ? setIsAuthenticated(true) : setIsAuthenticated(false);;
let result = localStorage.getItem('token') ? true : false

console.log(`result + ${result}`);

    result = true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    console.log(`authVal: ${isAuthenticated}`)


      // console.log(`token : ${localStorage.token}`);
      // const tokenFound = localStorage.token;
      // console.log(`found: ${tokenFound}`)
      // const parseRes = await response.json();
    
      // console.log(`parse val: ${parseRes}`)
      // parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);


      // tokenFound == true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      // console.log(`isAuth: ${isAuthenticated}`)
    
    } catch (err) {
      console.log("error .....")
      console.error(err);
    }
  }

  useEffect(() => {
    isAuth();
  });


  // const { isAuthenticated } = useContext(AuthContext);
  // const { isAuth } = useContext(AuthContext);
 const storedRole = localStorage.getItem('user_role');
 console.log(`The stored role in local storage: ${storedRole}`);


  return (
    //wrap our main component with the provider
      // <AuthProvider> 
  
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/home" element={<Home />} /> 
          <Route
            exact
            path="/login"
            element={<Login setAuth={setAuth} />}/>    
          <Route
              exact
              path="/register"
              element={<Register setAuth={setAuth} />}
            />
          <Route
              exact
              path="/dashboard"
              element={<Dashboard setAuth={setAuth} />}/>

            {/* <Route
              exact
              path="/profile"
              element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} /> */}
              <Route
              exact
              path="/profile"
              element={<Profile setAuth={setAuth} />}/>

           <Route
              exact
              path="/unauthorized"
              element={<Unauthorized/>}/>             
            {/* Protected Routes */}
          


          <Route element={<RequireAuth allowedRoles={[Roles.Admin]}/>}>  { /*pass in RequireAuth component to protect these routes */}
            <Route path="/adminDashboard" element = {<AdminDashBoard />} />
          </Route>

        
           <Route element={<RequireAuth allowedRoles={[Roles.Editor]}/>}> 
              <Route path="/editor" element = {<Editor />} /> 
            </Route>

              {/* 404 Page  */}
          {/* <Route path="*" element = {<Error />} /> */}
        </Routes>
    
  // </AuthProvider> 
  
  );
}

export default App;
