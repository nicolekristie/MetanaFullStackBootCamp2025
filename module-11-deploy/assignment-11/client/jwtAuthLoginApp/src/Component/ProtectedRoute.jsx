import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  console.log("this is the protected route");
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const isAdmin = window.localStorage.getItem("user_role");
  console.log(`the logged in status: ${isLoggedIn}`);
  console.log(`role status ${isAdmin}`);
  return isLoggedIn === "true" && isAdmin === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="login" />
  );
};

export default ProtectedRoute;
