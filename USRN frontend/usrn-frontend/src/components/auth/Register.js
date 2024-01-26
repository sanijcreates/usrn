import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <label>
          First Name:
          <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
        </label>
        <label>
          Email:
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
    </div>
  );
};

export default Register;