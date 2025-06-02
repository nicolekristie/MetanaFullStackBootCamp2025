import React from 'react';
import { useLogin } from '../Context/LoginContext.jsx';
import { Navigate } from 'react-router-dom';

function Profile() {
    const { isLoggedIn, firstName, user_role } = useLogin();

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Profile Page</h1>
                <div style={styles.content}>
                    <div style={styles.profileInfo}>
                        <h2 style={styles.welcomeMessage}>Welcome, {firstName}!</h2>
                        <div style={styles.infoSection}>
                            <p><strong>Role:</strong> {user_role}</p>
                            <p><strong>Status:</strong> Active</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '30px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    title: {
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center'
    },
    content: {
        marginTop: '20px'
    },
    welcomeMessage: {
        color: '#2c3e50',
        marginBottom: '20px',
        fontSize: '1.8em'
    },
    profileInfo: {
        backgroundColor: '#f8f9fa',
        padding: '25px',
        borderRadius: '8px',
        marginTop: '20px'
    },
    infoSection: {
        marginTop: '20px',
        '& p': {
            margin: '10px 0',
            fontSize: '1.1em',
            color: '#34495e'
        }
    }
};

export default Profile;


  