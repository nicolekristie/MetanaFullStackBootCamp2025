import { useAuth } from './AuthContextLatest';

import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';


export const ProtectedRoute = ({ roles }) => {
    const {isAuthenticated, role } = useAuth();
    console.log(`The user is authenticated? ${isAuthenticated} , ${role}`)
    if (!isAuthenticated) return <Navigate to="/login"/>;
    if (roles && !roles.includes(role)) return <Navigate to="/error"/>;
   
    return <Outlet />


}






// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('authToken'); // Example check
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };
