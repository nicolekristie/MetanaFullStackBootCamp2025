import React from 'react'
import { Link } from 'react-router-dom';
import Layout from './Layout';

function Editor() {
  return (
    <>
    <Layout/>
    <h1>Editor's Page</h1>
    <Link to="/home">Home</Link>
    </>   
  )
}

export default Editor