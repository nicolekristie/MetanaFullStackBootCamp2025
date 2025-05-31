import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../Context/LoginContext.jsx';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useLogin();

  const handleLogout = () => {
    logout(); // This will clear all state and localStorage
    navigate('/login');
  };

  return (
    <button 
      style={styles.button}
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

const styles = {
  button: {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#c82333'
    }
  }
};

export default Logout;