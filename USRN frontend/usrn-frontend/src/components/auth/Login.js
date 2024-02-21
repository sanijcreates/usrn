import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

const Login = () => {
  // State to manage user input for email and password
  const [user, setUser] = useState({ email: '', password: '' });

  // Function to handle changes in input fields
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', user)
      .then(response => {
        // If login is successful, store user data in localStorage and redirect to home page
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/";
      })
      .catch(error => {
        // If login fails, log the error
        console.error('Login failed:', error);
      });
  };

  function handleCreateAcc() {
    window.location.href = "/register"
  }

  return (
    <div className="container">
      <div className="form-box">
        {/* Title */}
        <div className='head'>
          <h1>Login or Register</h1>
          <h3>EMAIL</h3>
        </div>
        {/* Input fields and form */}
        <div className="input-Field">
          <form onSubmit={handleSubmit}>
            {/* Email input */}
            <label>
              <input type="text" name="email" placeholder="Enter your email" value={user.email} onChange={handleChange} />
            </label>
            <br />
            {/* Password input */}
            <label>
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
            </label>
            <br />
            {/* Forgot password link */}
            <a href="https://www.youtube.com/watch?v=LTPGyaEyTI4">Forgot password? </a>
            <br />
            {/* Submit button */}
            <button type="submit">Login</button>
            <br />
            {/* Line */}
            <p>Or</p>
            {/* Register link */}
            <div className='register'>
              {/* Show register link if user is not logged in */}
              <Link to="/Register"><button>Register</button></Link>
            </div>
            <br/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
