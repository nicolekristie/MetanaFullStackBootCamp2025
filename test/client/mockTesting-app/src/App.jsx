import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(() => {
    //to hit the real api
    fetch('api/users')
  }, [])

  return (
    <>
    
    </>
  )
}

export default App
