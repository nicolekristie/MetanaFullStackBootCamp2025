import { Link } from 'react-router-dom';
import Layout from './Layout';


function AdmindDashboard() {
  return (
    <>
    <Layout/>
    <h1>Admin Dashboard Page </h1>
    <Link to="/home">Home</Link>
    <br />
     <Link to="/users">Users</Link>
    </>

  )
}

export default AdmindDashboard