import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Layout from './Layout';
import Logout from './Logout';
import LoginContext  from '../Context/LoginContext.jsx';


//  const Profile = ({setAuthorized}) => {  //pass in the props

//   const [role, setRole] = useState("null");
//    const { isLoggedIn, setIsLoggedIn} = useContext(LoginContext);


//   const handleClick = async (e) => {
//        e.preventDefault();
//       try{

//         const response = await fetch("http://localhost:8015/profile" , {
//           method: "GET",
//           // headers: { "role": "user_role" },
//         });

//         const parseRes = await response.json();
//         localStorage.setItem("user_role", parseRes.user_role);

//        if (parseRes.user_role) {
//         localStorage.setItem("user_role", parseRes.user_role);
//         // setAuthorized(true);
//        } else {
//         // setAuthorized(false);
//        }
//     } catch (err) {
//       console.error(err.message);
//     }   
//   };
// }

function Home() {

  const { isLoggedIn, setIsLoggedIn} = useContext(LoginContext); 

  return (
    <>
       <Layout/>
      <h1 className='home-text'>Home Page</h1>
      <div className='home-container'>      
        <nav className="nav-bar-container">
          <div className='home-nav-link'>
            {/* <Link to='/login' onClick={ ()=>handleClick()}>Log in</Link> |
            <Link to='profile'>Profile</Link>
            <Link to='/register'>Register</Link> |
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/editor'>Editor</Link>

            <Link to='/adminDashboard'>Dashboard</Link> */}
          </div>
          <Logout />
        </nav> 
 
     </div> 
    </>
  )
}

export default Home