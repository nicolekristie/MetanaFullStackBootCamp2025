import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmpListing from './Components/EmpListing';
import EmpCreate from './Components/EmpCreate';
import EmpEdit from './Components/EmpEdit';
import EmpDetail from './Components/EmpDetail';
// import { jest } from '@jest/globals';



// import express from 'express'
// const app = express();

function App() {
  const [count, setCount] = useState(0)


  // app.post('/employee', (req, res) => {
  //   res.sendStatus("200")
  // })

  return (
    <>
      <div>
        <h1>React JS CRUB Operations</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/'  element={<EmpListing/>}></Route>
            <Route path='/employee/create'  element={<EmpCreate/>}></Route>
            <Route path='/employee/detail/:empid'  element={<EmpDetail/>}></Route>
            <Route path='/employee/edit/:empid'  element={<EmpEdit/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
  

}

export default App
