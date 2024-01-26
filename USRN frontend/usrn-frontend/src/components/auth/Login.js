import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

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
        window.location.href = "/"
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
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
    </div>
  );
};

export default Login;