import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate()
    
    const login = (e)=>{
        e.preventDefault()
        setTimeout(()=>{
            navigate('/')
        },2000)
    }
  return (
    <form onSubmit={login} >
      <h1 style={{marginLeft:'20px'}}>Login</h1>
      <input style={{padding : "2px 9px", margin : "0 10px"}} type="text" placeholder='login'/>
      <br/>
      <input style={{padding : "2px 9px", margin : "15px 10px"}} type="password" placeholder='password'/>
      <br/>
      <button style={{padding : "2px 35px", margin : "0 10px"}} type='sumbit'>Login</button>
    </form>
  )
}
