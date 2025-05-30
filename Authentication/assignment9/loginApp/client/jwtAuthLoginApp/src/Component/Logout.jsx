import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
// import {LoginContext}  from '../Context/LoginContext.jsx';


const Logout = () => {
  const navigate = useNavigate();


  // const {isLoggedIn, setIsLoggedIn} =useContext(LoginContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_name');
    localStorage.setItem("loggedIn", false);
    navigate('/login');
  };

  return (
    <>
      <button className='log-out-btn' onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;