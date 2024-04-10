import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <form action="" method="">
        <div className="container">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter email" name="email" required></input>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>

        <Link to="/NicConversion"><button type="submit">Login</button></Link>

        <Link to="/signup"><button type="submit">Create Account</button></Link>
        </div>
        
        </form>
    </div>
  )
}
