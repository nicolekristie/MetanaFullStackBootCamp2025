import React from 'react'
import { Link } from 'react-router-dom';
import { UserConsumer } from '../Context/userContext';

function Profile() {
  return (
    <>
    <h1>Profile</h1><Link to="/dashboard">Dashboard</Link>
    <UserConsumer>
        {
            username=> {
                return <div> Hello {username} </div>
            }
        }

    </UserConsumer>
    </>

  )
}

export default Profile


  