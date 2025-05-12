//create component to help us protect our route

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";



const RequireAuth =({allowedRoles})=> {    //pass in roles>check roles that are stored in state>see if allowed roles includes the role that is passed
    const { auth } = useAuth();
    const location = useLocation();


    // return (
    //     //check if there is a user and that would indicate whether the user is logged in or not
    //             auth?.user
    //             ? <Outlet />          //rep any child components of requireAuth  > only if you have a user you will return the component
    //             : <Navigate to="/login" state={{from: location}} replace />    //user will be sent to the login
    // );

       //check by role >compare value of roles array to allowedRoles array passed into the component and compare the 2
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role)) 
                ? <Outlet />          //rep any child components of requireAuth  > only if you have a user you will return the component
                :auth?.user ? <Navigate to="/unauthorized" state={{from: location}} replace /> 
                : <Navigate to="/login" state={{from: location}} replace />    //user will be sent to the login
    );


      


}

export default RequireAuth;