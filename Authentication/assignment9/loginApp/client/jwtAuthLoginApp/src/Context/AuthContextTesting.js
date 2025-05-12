import React, {useState, useEffect, useContext} from 'react';



const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

//create a new context object with default value of null. >next we need to create an authentication provider that wraps the rest of our app and 
// provides the authentication context to all of it's children

export function AuthProvider(props){
    const [authUser, setAuthUser] = useState(null)   //state property
    const [isLoggedIn, setIsLoggedIn] = useState(false);

 //when working with an authentication provider we do this> UseEffect to subscribe to the auth service
    useEffect(()=> {
        //subscribe to auth service
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
        return subscribe
    })



    //value of the authprovider
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        //return provider>children will be have access to the properties in value
        <AuthContext.Provider value={value}> {props.childen}</AuthContext.Provider>
    )


}
