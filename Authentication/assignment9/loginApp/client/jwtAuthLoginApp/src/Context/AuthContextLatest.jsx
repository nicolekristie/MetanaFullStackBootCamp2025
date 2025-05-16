import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create Context
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

// 2. AuthProvider component to wrap the rest of our application and provides the authentication context to all of its children

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // useEffect(()=> {
    //     //when working with an authentication provider subscribe to auth service 
    //     const subscribe = AuthService.subscribe((user) => {
    //         if(user){
    //             setIsLoggedIn(true);
    //             setAuthUser(user);
    //         }
    //         else{
    //             setIsLoggedIn(false);
    //             setAuthUser(null);
    //         }
    //     })

    //     return subscribe

    // })


    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
          {props.children}
        </AuthContext.Provider>
      );
};



// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // null = not logged in

//   // Simulated login (normally you'd verify credentials)
//   const login = (userData) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     setUser(null);
//   };

