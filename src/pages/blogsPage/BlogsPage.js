import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BlogsPage() {

    const navigate =useNavigate()

    const goToBack = () =>{
        navigate(-1)
    }

  return (
    <>
      <h1 className='title'>Blogs Page</h1>
      <button style={{marginLeft:'20px'}}  onClick={goToBack}>GO to back</button>
    </>
  )
}
