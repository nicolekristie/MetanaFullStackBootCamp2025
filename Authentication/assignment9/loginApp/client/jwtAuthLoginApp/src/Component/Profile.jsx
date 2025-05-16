import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext.jsx';
import { UserConsumer } from '../Context/userContext.jsx';
import Logout from './Logout.jsx';

function Profile() {

  const { user, setUser, logout } = useContext(AuthContext);

  return (
    <>
    <h1>Profile Page - Hello {user} </h1>
    <h2>You have successfully logged in!</h2>
    <Link to="/dashboard">Dashboard</Link>
    <br />
    <Link to="/home">Home</Link>
    <Logout/>
    </>

  )
}

export default Profile


  