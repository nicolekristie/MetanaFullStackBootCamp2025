import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useLogin } from '../Context/LoginContext';

const Unauthorized = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user_role } = useLogin();
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/');

    // Get the attempted path
    const attemptedPath = location.state?.from || location.pathname;

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Access Denied</h1>
                <div style={styles.icon}>🚫</div>
                <p style={styles.message}>
                    You do not have permission to access{' '}
                    <span style={styles.path}>{attemptedPath}</span>
                </p>
                <p style={styles.detail}>
                    This page requires admin privileges.
                    {user_role && (
                        <span> Your current role is: <strong>{user_role}</strong></span>
                    )}
                </p>
                <div style={styles.buttonContainer}>
                    <button onClick={goBack} style={styles.button}>
                        Go Back
                    </button>
                    <button onClick={goHome} style={{...styles.button, backgroundColor: '#4CAF50'}}>
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '40px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
    },
    title: {
        color: '#d32f2f',
        marginBottom: '20px',
        fontSize: '2em'
    },
    icon: {
        fontSize: '64px',
        marginBottom: '20px'
    },
    message: {
        fontSize: '1.2em',
        marginBottom: '20px',
        color: '#333'
    },
    path: {
        fontWeight: 'bold',
        color: '#d32f2f'
    },
    detail: {
        color: '#666',
        marginBottom: '30px'
    },
    buttonContainer: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center'
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#666',
        color: 'white',
        cursor: 'pointer',
        fontSize: '1em',
        transition: 'background-color 0.2s',
        ':hover': {
            opacity: 0.9
        }
    }
};

export default Unauthorized;