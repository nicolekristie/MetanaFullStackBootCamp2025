import { createContext , useState, useEffect} from "react";



export const AuthContext = createContext();

//create provider

export const AuthProvider = ({ children }) => {
    //create states  
    const [user, setUser ] = useState(null);
    const [user_email, setUserEmail ] = useState('');
    const [user_password, setUserPassword] = useState('');
   
   

    const login = () => {
        setUser(user_email);
    };

    const isAuthenticated = () => {
        if(user!=null) return true;   //is user logged in
        else return false;
    }


    const logout = () => {
        setUser(null);
        setUserEmail("");
        setUserPassword("");
    }

    //pass these values to our provider so we can use in our components
    return (
    <AuthContext.Provider
        value={{ user_email, setUserEmail, user_password,  setUserPassword, user, setUser, login, logout}}
    > {children} </AuthContext.Provider>
    );
};


