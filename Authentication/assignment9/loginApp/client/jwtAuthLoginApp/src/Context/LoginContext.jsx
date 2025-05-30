// import { createContext, useState, useEffect, useContext } from "react";
// // import  { format } from 'date-fns';

//create the LoginContext
// export const LoginContext = createContext({});

// // export const useLoginContext = () => useContext(LoginContext);

//   const login = async (user_email, user_password) => {
//     // const onSubmitForm = async (e, user_email, user_password, toast, navigate) => {
//     //     e.preventDefault();
//     //     console.log("submitted from context");
//     try {
//       const body = { user_email, user_password };
//       let firstName = user_email.split("@");
//       let name = firstName[0];

//       const response = await fetch("http://localhost:8015/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       const parseRes = await response.json();
//       if (parseRes.token) {
//         localStorage.setItem("token", parseRes.token);
//         localStorage.setItem("user_role", parseRes.user_role);
//         window.localStorage.setItem("loggedIn", true);
//         // setIsLoggedIn(true);
//         toast.success("Login successful");

//         console.log(`user is ${parseRes.user}`);
//         console.log(`token val: ${parseRes.token}`);

//         setUser(parseRes.data.user);
//         setToken(parseRes.data.token);

//         const user_role = window.localStorage.getItem("user_role");
//         if (user_role === "admin") {
//           navigate("/adminDashboard");
//         } else if (user_role === "editor") {
//           navigate("/editor");
//         } else {
//           navigate("/home");
//         }
//       } else {
//         // setIsLoggedIn(false);
//         toast.error(parseRes);
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

// //create a loginProvider component> wrap this LoginProvider around all components that will have access to this global state

import { createContext, useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link , useNavigate, useLocation} from 'react-router-dom';

// create the LoginContext
export const LoginContext = createContext({});


export const LoginProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user_role, setUserRole] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");


  const login = async (user_email, user_password) => {
    console.log("entered context login");
      


    try {
      console.log("we are heree....");
      const body = { user_email, user_password};
      let firstName = user_email.split("@");
      let name = firstName[0];
      console.log(`the name: ${name}`);
      setFirstName(name)

      const response = await fetch("http://localhost:8015/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(`the token is: ${parseRes.token}`);
      console.log(`the role is: ${parseRes.user_role}`);
      const user_role = parseRes.user_role;
      console.log(`email: ${parseRes.user_email}`);
      console.log(`pwd: ${parseRes.user_password}`);
      if (parseRes.token) {
        console.log(`token: ${parseRes.token}`);
        setUserRole(parseRes.user_role);
        setToken(parseRes.tokenn);
        localStorage.setItem("token", parseRes.token);
        localStorage.setItem("user_role", parseRes.user_role);
        window.localStorage.setItem("loggedIn", true);
        setIsLoggedIn(true);
        toast.success("login successfully!");
        const loggedIn = window.localStorage.getItem("loggedIn");
        const user_role = window.localStorage.getItem("user_role");
        console.log(`loggedin val: ${loggedIn}`);
        return true

      } else {
        setIsLoggedIn(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <LoginContext.Provider
      value={{ user_role, setUserRole, token, setToken, login, isLoggedIn, setIsLoggedIn, firstName, setFirstName }}
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
