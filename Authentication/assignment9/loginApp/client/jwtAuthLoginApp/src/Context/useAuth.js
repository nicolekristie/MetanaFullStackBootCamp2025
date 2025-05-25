import { useContext, useEffect, useState } from "react";
import { Link , useNavigate, useLocation} from 'react-router-dom';


//define hook
const useAuth = () => {
    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    const login = ( user_email, user_password) => {
        if (user_email && user_password ) {
            const userData = {user_email, user_password};
            setUser(userData);
            localStorage.setItem('user' , JSON.stringify(userData));
            return true;
        } else {
            return false;
        }

    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/home")
    }

    //get item from localStorage when the component mounts
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }

        setLoading(false);

  
    }, [])

    return {user, login, logout, isAuthenticated: !user, loading}

}

export default useAuth;

