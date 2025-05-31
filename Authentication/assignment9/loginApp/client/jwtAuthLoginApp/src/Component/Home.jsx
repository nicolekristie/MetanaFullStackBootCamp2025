import React from 'react';
import Layout from './Layout';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome Home</h1>
      <div style={styles.content}>
        <p>Welcome to our application! You are now logged in.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  },
  title: {
    color: '#333',
    marginBottom: '20px'
  },
  content: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

export default Home;