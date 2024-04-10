// import React from 'react'
// import "./Login.css"
// import { Link } from 'react-router-dom'


// export default function Login() {
//   return (
//     <div>
//       <form action="" method="">
//         <div className="container">
//           <h1 class="page-name">Login</h1>
//           <p>Please fill the email and password for login to your acount.</p>
//           <hr></hr>

//           <label for="email"><b>Email</b></label>
//           <input type="text" placeholder="Enter email" name="email" required></input>

//           <label for="psw"><b>Password</b></label>
//           <input type="password" placeholder="Enter Password" name="psw" required></input>

//           <Link to="/NicConversion"><button type="submit">Login</button></Link>

//           <Link to="/signup"><button type="submit">Create Account</button></Link>
//         </div>

//       </form>
//     </div>
//   )
// }


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Login.css"

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      if (response.data.success) {
        console.log('Login successful:', response.data);
        alert('Login successful! Redirecting to home page...');
        // Redirect logic here
      } else {
        setErrorMessage(response.data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        const { status, data } = error.response;
        setErrorMessage(`Login failed. Error code: ${status}, Message: ${data.message || 'Unknown error.'}`);
      } else if (error.request) {
        setErrorMessage('Server connection failed. Please check your internet connection.');
      } else {
        setErrorMessage('An error occurred during login. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1 className="page-name">Login</h1>
          <p>Please fill in your email and password to login to your account.</p>
          <hr />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter email" name="email" required value={formData.email}
            onChange={handleChange} />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required value={formData.password}
            onChange={handleChange} />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* <button type="submit" className="loginbtn" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button> */}

          <Link to="/NicConversion"><button type="submit">Login</button></Link>

          <Link to="/signup"><button type="submit">Create Account</button></Link>
        </div>
      </form>
    </div>
  );
}



