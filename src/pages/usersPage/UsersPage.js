import React from 'react'
import { useState, useEffect } from 'react'

export default function UsersPage() {
    const [users,setUsers] =useState([])

    useEffect(()=>{
        async function load(){
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const json = await response.json()
            setUsers(json)
        }
        load()
    },[])
  return (
    <>
      <h1 style={{marginBottom: "50px"}} className='title'>Users Page</h1>
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      <div>
        {users.map((user) => (
            <div key={user.id} className='user'>
                <h3>
                  {console.log(user)}
                  Name: {user.name} 
                  <br/>
                  Username: {user.username}
                </h3>
                <hr/>
                <p>
                  Phone : {user.phone}
                  <br/>
                  Email : {user.email}
                  <br/>
                  Website : {user.website}
                  <br/>
                  City : {user.address.city}
                  <br/>
                  Company: {user.company.name}
                </p>
            </div>
        ))}
        </div>
    </>
  )
}
