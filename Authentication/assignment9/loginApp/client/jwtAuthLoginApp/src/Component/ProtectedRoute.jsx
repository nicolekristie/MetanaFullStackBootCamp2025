import React from "react";
import { Navigate, Outlet} from 'react-router-dom';


const ProtectedRoute = () => {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    console.log(`the logged in status: `)
    return isLoggedIn === "true" ? <Outlet />: <Navigate to="login"/>;
}

export default ProtectedRoute;
