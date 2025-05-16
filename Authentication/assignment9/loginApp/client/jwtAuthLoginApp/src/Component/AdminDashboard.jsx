import React from 'react'
import { Link } from 'react-router-dom';
import { UserConsumer } from '../Context/userContext';
import Dashboard from './Dashboard'

function AdmindDashboard() {
  return (
    <>
    {/* <Dashboard/> */}
    <h1>Admin Dashboard Page </h1>
    <Link to="/home">Home</Link>
    </>

  )
}

export default AdmindDashboard