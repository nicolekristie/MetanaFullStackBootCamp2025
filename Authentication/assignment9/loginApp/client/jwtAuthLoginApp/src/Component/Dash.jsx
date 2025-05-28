import React from 'react'
import { useAuth } from '../Contexts/AuthContext'


const Dash = () => {

   const { authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn} = useAuth();


//functions to handle the login and logout
const logIn = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
    setAuthUser({
        Name: 'John Doe'
    })
}



const logOut = (e) => {
    e.preventDefault()
    setIsLoggedIn(false);
    setAuthUser(null);
}



  return (
    <>
       <span> User is currently: {isLoggedIn ? 'Logged-In' : 'Logged Out'}.</span>
       {isLoggedIn ? (<span>User name: {authUser.Name} </span>) : null}
       <br />
       { isLoggedIn ? 
        <button onClick={(e) => {logOut(e)}}>Log Out</button> :
        <button onClick={(e) => {logIn}}>Log In</button> }       
    </>
  )
}

export default Dash