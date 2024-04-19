import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./Register.css"

const Register = () => {
  const [user, setUser] = useState({ 
    firstName: '',
    lastName: '',
    email: '',
    password: '' 
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register', user)
      .then(response => {
        console.log(response.data); 
        if(response.status === 200) {
          window.location.assign("http://localhost:3001/");
        } else if(response.status == 409) {
          console.log("Email is already registered, from React.");
        }
        // Add any further actions after successful registration
      })
      .catch(error => {
        console.error('Registration failed:', error);
      });
  };

  return (
    <div className='container'>
      <div className="form-box">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" placeholder="First Name" value={user.firstName} onChange={handleChange} name="firstName" />
          </label>
          <label>
            <input type="text" placeholder="Last Name" value={user.lastName} onChange={handleChange} name="lastName" />
          </label>
          <label>
            <input type="text" placeholder="Email" value={user.email} onChange={handleChange} name="email" />
          </label>
          <br />
          <label>
            <input type="password" placeholder="Password" value={user.password} onChange={handleChange} name="password" />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="login-link">
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </div>
    </div>
  );
};

export default Register;
