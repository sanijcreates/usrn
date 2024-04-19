import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', user)
      .then(response => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/";
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="container">
      <div className="form-box">
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
            <div className="field button-field">
              <button>Login</button>
            </div>
            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>
            <div className="form-link">
              <span>Don't have an account? <Link to="/register" className="link signup-link">Signup</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
