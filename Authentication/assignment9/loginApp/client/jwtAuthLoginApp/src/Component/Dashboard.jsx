import React from 'react'
import  { useAuth } from '../Context/AuthContextLatest.jsx'
import Layout from './Layout.jsx'
import { Link, Outlet } from 'react-router-dom';
import Logout from './Logout';
import Login from './Login';




const Dashboard = () => {
  
    const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth()

    let userName = localStorage.getItem("user_name");
    console.log(`the name: ${userName}`)

    const logIn = (e) => {
        e.preventDefault()
        setIsLoggedIn(true);
        setAuthUser({
            Name: userName
        })
     }
  
     const logOut = (e) => {
        e.preventDefault()
        setIsLoggedIn(false);
        setAuthUser(null)
     }


   

  
    return (
     <>
        <div>
            <nav className="topnav-centered" style={styles.navbar}>
            <Link to="/login" style={styles.link}>Login</Link>
            {/* {user && <Link to="/profile" >Profile</Link>}
            {!user && <Link to='/login'>Login</Link>} */}
        
            <Link to="/register" style={styles.link}>Register</Link>
            <Link to="/profile" style={styles.link}>Profile</Link>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/editor" style={styles.link}>Editor</Link>
            <Link to="/adminDashboard" style={styles.link}>AdminDashboard</Link>
            </nav>
    
            <main style={styles.main}>
            <Outlet /> {/* This will render the matched route's component */}
            </main>
        </div>


        <span>User is currently: {isLoggedIn ? 'Logged-In' : 'Logged Out'}.</span>
        <br />
        { isLoggedIn ? (<span> User name: {authUser.Name}</span>) : null}
        <br />
        {isLoggedIn ? <button onClick={(e) => { logOut(e)} }>Log Out</button> : <button onClick={(e) => {logIn(e)}}>Log In</button>}  
     </>

);
};

    const styles = {
        navbar: {
          display: 'flex', 
          gap: '1rem',
          backgroundColor: 'green',
          padding: '1rem',
          position: 'fixed',
          top: 0, 
          width: 800,
        },
        link: {
          color: 'white',
          textDecoration: 'none',
        },
        main: {
          padding: '2rem',
        },
      };


export default Dashboard
