import { Link } from 'react-router-dom';
import Layout from './Layout';


function AdmindDashboard() {
  return (
    <>
    <Layout/>
    <h1>Admin Dashboard Page </h1>
    <Link to="/home">Home</Link>
    </>

  )
}

export default AdmindDashboard