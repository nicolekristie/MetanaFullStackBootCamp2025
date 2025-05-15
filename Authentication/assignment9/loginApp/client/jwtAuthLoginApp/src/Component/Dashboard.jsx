import React, {useState, useEffect, useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Logout from './Logout';
import { AuthContext } from '../Context/Authcontext.jsx';

const Dashboard = ({setAuth}) => {

  const[name, setName] =useState("");
  const {user} = useContext(AuthContext);

  // async function getName() {
  //     try {
  //       const response = await fetch("http://localhost:8015/dashboard",{
  //         method: "GET",
  //         headers: { token: localStorage.token }
  //     });
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log(data.user_name);
  //       // setName(data.user_name);
  //       setName({user});
  //     } catch (error) {
  //       console.error('Fetch error:', error);
  //     }
  // }

  // useEffect(() => {
  //   getName()
  // },[])


  return (
    <>
    <div className='dash-container'>
      <h1 className='dash-text'>Dashboard {user} </h1>
      <Link to="/profile">Profile</Link>
      <Logout/>
    </div>
    </>
  )
 
}

export default Dashboard