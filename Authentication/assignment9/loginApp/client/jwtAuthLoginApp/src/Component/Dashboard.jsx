import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Dashboard = ({setAuth}) => {

  const[name, setName] =useState("");

  async function getName() {
  //   const response = await fetch("http://localhost:5173/dashboard");


  //   try{
  //     const response = await fetch("http://localhost:5173/dashboard", {
  //       method: "GET",
  //       headers: { token: localStorage.token }
  //     });
  //     const parseRes = await response.json();
  //     setName(parseRes.user_name)
  //     console.log(`name: ${parseRes.user_name}`)

  //   } catch(err){
  //     const parseRes = await response.json();
  //     console.log(`name: ${parseRes.user_name}`);
  //     console.error(err.message)
  //   }
  // }
    //testing

    try {
      const response = await fetch("http://localhost:8015/dashboard",{
        method: "GET",
        headers: { token: localStorage.token }
    });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data.user_name);
      setName(data.user_name);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token");
    setAuth(false);
    // navigate("/home");
    toast.success("Logged out successfully");
  };

  useEffect(() => {
    getName()
  },[])


  return (
    <>
    <div className='dash-container'>
      <h1 className='dash-text'>Dashboard {name} </h1>
      <button className='btn btn-primary' onClick={e => logout(e)}>Logout</button>
      <Link to="/profile">Profile</Link>
    </div>
    </>
  )
 
}

export default Dashboard