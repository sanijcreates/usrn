import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";
import { AiFillEyeInvisible } from "react-icons/ai";

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
      <div className="form login">
        <header className='login__header'>Login</header>
        <div className="input-Field">
          <form onSubmit={handleSubmit}>
            <div className='field input-field'>
              <input type="text" name="email" placeholder="Enter your email" value={user.email} onChange={handleChange} />
            </div>
            <div className='field input-field'>
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
              <AiFillEyeInvisible />
            </div>
            <div class="form-link">
                      <a href="#" class="forgot-pass">Forgot password?</a>
                  </div>
                  <div class="field button-field">
                      <button>Login</button>
                  </div>
      
                  <div class="form-link">
                  <span>Don't have an account? <a href="#" class="link signup-link">Signup</a></span>
              </div>
            <br/>
          </form>
        </div>
      </div>
    
  );
};

export default Login;
