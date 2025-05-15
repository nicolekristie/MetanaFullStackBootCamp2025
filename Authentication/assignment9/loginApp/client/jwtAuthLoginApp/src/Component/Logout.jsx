import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_role');
    // Redirect to layout page after logout
    navigate('/');
  };

  return (
    <button className='log-out-btn' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;