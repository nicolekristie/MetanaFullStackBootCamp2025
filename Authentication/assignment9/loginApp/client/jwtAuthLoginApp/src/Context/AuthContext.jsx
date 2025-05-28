import React, {useState, useEffect, useContext} from 'react';



export const AuthContext = React.createContext();

//create a useAuth hook
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    //auth provider we use useeffect to subscribe to the authentication providers changing events (subscribe to auth service>)
    
    useEffect(()=>{
        const subscribe = AuthService.subscribe((user) => {
            if(user){
                setIsLoggedIn(true)
                setAuthUser(user)
            }
            else{
                setIsLoggedIn(false)
                setAuthUser(null)
            }
        })
        //to unsubscribe
        return subscribe
    })


    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return(
        // <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    // )
        <AuthContext.Provider value = {{isLoggedIn, setIsLoggedIn, authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )

}