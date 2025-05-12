import React from "react";
// import { useAuth, AuthProvider} from "../Context/AuthContext";
import {useAuth} from '../Context/AuthContext.jsx';

const Dashboard2 = () => {
  const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();



  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthUser({
      Name: "John Doe",
    });
  };

  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser({
      Name: "null",
    });
  };

  return (
    <>
      <span>User is currently: {isLoggedIn ? "Logged-In" : "Logged Out"}</span>
      {isLoggedIn ? <span> User Name: {authUser.Name}</span> : null}
      <br />
      {isLoggedIn ? <button onClick={(e) => {logOut(e)}}>Log Out</button> 
      : <button onClick={(e) => { logIn(e) }} >Log In</button>}
    </>
  );
};

export default Dashboard2;

//create a login and logout button>when user logins in user name will display

//create 2 functions to handle the login and logout//
