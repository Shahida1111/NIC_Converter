import React, { Component } from 'react';
import axios from 'axios'; // Assuming you're using Axios for backend calls
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        password: '',
      },
      errorMessage: '',
      isSubmitting: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isSubmitting: true, errorMessage: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/users', this.state.formData, {
        // Add any additional configuration options for Axios, if needed
      });

      if (response.data.success) {
        console.log('Signup successful:', response.data);
        alert('Signup successful! Redirecting to home page...');
      } else {
        this.setState({
          errorMessage: response.data.message || 'Signup failed. Please check the data entered.',
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response) {
        const { status, data } = error.response;
        this.setState({
          errorMessage: `Signup failed. Error code: ${status}, Message: ${data.message || 'Unknown error.'}`,
        });
      } else if (error.request) {
        this.setState({
          errorMessage: 'Server connection failed. Please check your internet connection.',
        });
      } else {
        this.setState({
          errorMessage: 'An error occurred during signup. Please try again.',
        });
      }
    } finally {
      this.setState({ isSubmitting: false });
    }
  };

  render() {
    const { formData, errorMessage, isSubmitting } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <h1 className="page-name">Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label htmlFor="name"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name="name" id="name" required value={formData.name}
              onChange={this.handleChange} />

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required value={formData.email}
              onChange={this.handleChange} />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="password" required value={formData.password}
              onChange={this.handleChange} />

            <hr />

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="registerbtn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>

            <div className="container-signin">
              <p>
                Already have an account? <Link to="/">Sign in</Link>.
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;