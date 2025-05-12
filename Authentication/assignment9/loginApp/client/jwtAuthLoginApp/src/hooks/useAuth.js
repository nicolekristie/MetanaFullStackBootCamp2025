import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";


//define hook
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;

