import { createContext, useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// create the LoginContext
export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [user_role, setUserRole] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");


  // Check localStorage when the app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserRole = localStorage.getItem("user_role");
    const storedLoggedIn = localStorage.getItem("loggedIn");
    
    if (token && storedLoggedIn === "true") {
      setIsLoggedIn(true);
      setUserRole(storedUserRole);
      setToken(token);
      
      // Get firstName from stored email if available
      const storedEmail = localStorage.getItem("user_email");
      if (storedEmail) {
        const name = storedEmail.split("@")[0];
        setFirstName(name);
      }
    }
  }, []);

  const login = async (user_email, user_password) => {
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const body = { user_email, user_password };
      let firstName = user_email.split("@");
      let name = firstName[0];
      setFirstName(name);

      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      
      if (parseRes.token) {
        setUserRole(parseRes.user_role);
        setToken(parseRes.token);
        localStorage.setItem("token", parseRes.token);
        localStorage.setItem("user_role", parseRes.user_role);
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("user_email", user_email); // Store email for firstName
        setIsLoggedIn(true);
        toast.success("Login successful!");
        return true;
      } else {
        setIsLoggedIn(false);
        toast.error(parseRes);
        return false;
      }
    } catch (err) {
      console.error(err.message);
      toast.error("An error occurred during login");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user_email");
    setIsLoggedIn(false);
    setUserRole(null);
    setToken(null);
    setFirstName("");
  };

  return (
    <LoginContext.Provider
      value={{
        user_role,
        setUserRole,
        token,
        setToken,
        login,
        logout,
        isLoggedIn,
        setIsLoggedIn,
        firstName,
        setFirstName
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used inside a LoginProvider");
  return context;
};
