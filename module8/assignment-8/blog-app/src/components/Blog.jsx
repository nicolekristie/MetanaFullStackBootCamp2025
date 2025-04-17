import React from 'react'
import { useParams } from 'react-router'
// import axios from 'axios';
// import { response } from 'express';


function Blog() {
    const { id } = useParams()
  return (
    <h1>Blog {id}</h1>
  )
}

export default Blog