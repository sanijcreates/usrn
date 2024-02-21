import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css"

const Register = () => {
  const [user, setUser] = useState({ 
  firstName: '',
  lastName: '',
  email: '',
  password: '' });

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
    <div class='container'>
      <div class="form-box">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label>
          <input type="text" placeholder="First Name" value={user.firstName} onChange={handleChange} />
        </label>
        <label>
          
          <input type="text" placeholder="Last Name" value={user.lastName} onChange={handleChange} />
        </label>
        <label>
          
          <input type="text" placeholder="Email" value={user.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          <input type="password" placeholder="Password" value={user.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Register;