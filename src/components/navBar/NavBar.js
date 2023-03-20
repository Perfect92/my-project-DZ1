



import { Link , NavLink } from 'react-router-dom'
import React from 'react'

export default function NavBar() {
  return (
    <div className='navBar'>
      <ul style={{
        display: "flex",
        listStyle : "none"
      }}>
        <li >
            <NavLink className='link' to='/' >Main Page</NavLink>
        </li>
        <li>
            <NavLink className='link' to='/about' >About Page</NavLink>
        </li>
        <li>
            <NavLink className='link' to='/blogs' >Blogs Page</NavLink>
        </li>
        <li>
            <NavLink className='link' to='/login' >Login Page</NavLink>
        </li>
        <li>
            <NavLink className='link' to='/users' >Users Page</NavLink>
        </li>
      </ul>
      </div>
  )
}
