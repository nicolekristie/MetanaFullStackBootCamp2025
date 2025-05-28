import { createContext, useState, useEffect } from 'react'
// import  { format } from 'date-fns';

export const LoginContext = createContext({});


//create a provider> wrap this LoginProvider around all components that will have access to this global state



export const LoginProvider = ( {children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const onSubmitForm = async (e, user_email, user_password, toast, navigate) => {
        e.preventDefault();
        console.log("submitted from context");
        try {
            const body = {user_email, user_password};
            let firstName = user_email.split('@');
            let name = firstName[0];


            const response = await fetch("http://localhost:8015/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                localStorage.setItem("user_role", parseRes.user_role);
                window.localStorage.setItem("loggedIn", true);
                setIsLoggedIn(true);
                toast.success("Login successful");

                const user_role = window.localStorage.getItem("user_role");
                if (user_role === "admin") {
                    navigate('/adminDashboard');
                } else if (user_role === "editor") {
                    navigate('/editor');
                } else {
                    navigate('/home');
                }
            } else {
                setIsLoggedIn(false);
                toast.error(parseRes);
            }

        } catch (err) {
            console.error(err.message);
        }
    

    }

// }











// export const LoginProvider = ({children}) => {

//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [authUser, setAuthUser] = useState(null);

//     useEffect(()=> {
//         setIsLoggedIn(localStorage.getItem("loggedIn"))
//     }, [isLoggedIn]);


// const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const onSubmitForm = async () => {
//       console.log("Submitted from context!");
//       e.preventDefault();
//           try {
//             console.log("we are heree....")
//               const body = { user_email, user_password};
//                   let firstName = user_email.split('@');
//                   let name = firstName[0];
//                   console.log(`the name: ${name}`)
  
//               const response = await fetch("http://localhost:8015/auth/login", {
//                   method: "POST",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify(body)
//               });
  
//                   const parseRes = await response.json();
//                   console.log(`the token is: ${parseRes.token}`)
//                   console.log(`the role is: ${parseRes.user_role}`)
//                   const user_role = parseRes.user_role;
//                   console.log(`email: ${parseRes.user_email}`)
//                   console.log(`pwd: ${parseRes.user_password}`)
//                   if (parseRes.token) {
//                       console.log(`token: ${parseRes.token}`)
//                       localStorage.setItem("token", parseRes.token);
//                       localStorage.setItem("user_role", parseRes.user_role);
//                       window.localStorage.setItem("loggedIn", true);
//                       setIsLoggedIn(true);
//                       toast.success("login successfully!");
//                       const loggedIn = window.localStorage.getItem("loggedIn");
//                       const user_role = window.localStorage.getItem("user_role");
//                       console.log(`loggedin val: ${loggedIn}`);
//                       navigate('/home');
//                       if (user_role === 'admin') {
//                       console.log("user is an admin")
//                       navigate('/adminDashboard');
//                       } else if (user_role === 'editor') {
//                       console.log("user is an editor")
//                       navigate('/editor');
//                   } else {
//                   navigate('/home');
//                   }
//           } else {
//                   setIsLoggedIn(false);
//                   toast.error(parseRes);
//                   }
//               } catch (err) {
//                   console.error(err.message);
//               }  
    // }   
       

    return (  
        <LoginContext.Provider value = {{isLoggedIn, setIsLoggedIn,onSubmitForm}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContext

// LoginContext.jsx
// import React, { createContext, useState } from "react";
// import { toast } from "react-toastify";

// export const LoginContext = createContext();

// export const LoginProvider = ({ children }) => {
//   // Initialize isLoggedIn from localStorage or false
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return localStorage.getItem("loggedIn") === "true";
//   });

//   // Login submission handler
//   const onSubmitForm = async (e, user_email, user_password, navigate) => {
//     e.preventDefault();

//     try {
//       const body = { user_email, user_password };

//       const response = await fetch("http://localhost:8015/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       const parseRes = await response.json();

//       if (parseRes.token) {
//         // Save token and role to localStorage
//         localStorage.setItem("token", parseRes.token);
//         localStorage.setItem("user_role", parseRes.user_role);
//         localStorage.setItem("loggedIn", "true");

//         setIsLoggedIn(true);
//         toast.success("Login successful!");

//         // Redirect based on user role
//         const user_role = parseRes.user_role;
//         if (user_role === "admin") {
//           navigate("/adminDashboard");
//         } else if (user_role === "editor") {
//           navigate("/editor");
//         } else {
//           navigate("/home");
//         }
//       } else {
//         setIsLoggedIn(false);
//         toast.error(parseRes.message || "Login failed");
//       }
//     } catch (err) {
//       console.error("Login error:", err.message);
//       toast.error("Something went wrong during login.");
//     }
//   };

//   return (
//     <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, onSubmitForm }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };
