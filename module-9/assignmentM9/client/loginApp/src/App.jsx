import React, {useEffect, useState}  from 'react';
import { Route, Routes , Navigate} from "react-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import { Link } from 'react-dom';
import * as auth from '/Users/nicole/MetanaFullstackBootCamp/MetanaFullStackBootCamp2025/module-9/assignmentM9/server/controllers/auth.js'
import express, { response } from 'express';
const router = express.Router(); 
const app = express();



function App() {

  
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/create-account">Registration</Link>
          </li>
        </ul>
      </nav>
 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Registration />} />
        </Routes>
    </>


  )
}

export default App