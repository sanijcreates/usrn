import React, { useState } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

=======
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

const Login = () => {
  // State to manage user input for email and password
  const [user, setUser] = useState({ email: '', password: '' });

  // Function to handle changes in input fields
>>>>>>> 816073e (first commit)
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
=======
  // Function to handle form submission
>>>>>>> 816073e (first commit)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', user)
      .then(response => {
<<<<<<< HEAD
        console.log(response); 
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/"
      })
      .catch(error => {
=======
        // If login is successful, store user data in localStorage and redirect to home page
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/";
      })
      .catch(error => {
        // If login fails, log the error
>>>>>>> 816073e (first commit)
        console.error('Login failed:', error);
      });
  };

  return (
<<<<<<< HEAD
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="email" value={user.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
=======
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
>>>>>>> 816073e (first commit)
    </div>
  );
};

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 816073e (first commit)
