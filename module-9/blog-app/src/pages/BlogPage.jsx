import React from 'react'
import Blog from '../components/Blog'

export default function BlogPage() {
  return (
    <>
     <h1 className='blog-pg-title'>Blog test</h1>
        {/* < Blog/> */}
        <Blog title="test1" blog_content="blogs..." author="Tester"/>

    </>
   
  )
}

