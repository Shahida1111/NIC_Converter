import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
      <form action='' method=''>
        <div class="container">
            <h1 class="page-name">Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr></hr>

          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Enter Name" name="name" id="name" required></input>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          < input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
          <hr></hr>

          <button type="submit" class="registerbtn">Register</button>
          <div class="container-signin">
            <p>Already have an account? <Link to="/"><a href="#">Sign in</a></Link>.</p>
          </div>
        </div>
      </form>


    </div>
  )
}
