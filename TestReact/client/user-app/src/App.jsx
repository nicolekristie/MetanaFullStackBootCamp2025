import { useState, useEffect } from 'react'
import './App.css'

function App() {


  // use in the frontend 
  const getUser = () => {
    fetch('/api/user', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then (res => res.json())
    .then(data => console.log(data))
  }

  // const getUser = () => {

  //   fetch('/api/user', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json(); // Parse JSON from response
  //   })
  //   .then(data => {
  //     console.log('User data:', data); // Handle the parsed JSON
  //   })
  //   .catch(error => {
  //     console.error('There was a problem with the fetch operation:', error);
  //   });




  

  //call function in the useEffect hook

  useEffect(()=> {
    getUser()
  }, [])


  return (
    <>
      <div>
        App
      </div>
    </>
  )
}

export default App
