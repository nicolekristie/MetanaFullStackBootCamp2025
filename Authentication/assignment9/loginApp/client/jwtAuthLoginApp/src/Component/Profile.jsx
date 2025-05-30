import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Logout from './Logout.jsx';
import {LoginContext } from '../Context/LoginContext.jsx';
// import { useLogin}  from '../Context/LoginContext.jsx';


function Profile() {

    const { isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
  

  return (
    <>
       <div>
            {{isLoggedIn} ? <h2> You are logged in</h2> : <h2> you are NOT logged in</h2>}
            {console.log(`check isLoggedIn: ${isLoggedIn}`)}
       </div> 

      <h1>Profile Page - Hello</h1>
      <h2>You have successfully logged in! {isLoggedIn}</h2>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/home">Home</Link>
      <Logout/>

    </>

  )
}

export default Profile


  