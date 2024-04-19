import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import './Navbar.css';

export default function Navbar() {
    const [user, setUser] = useState("");

    useEffect(() => {
        const currUser = localStorage.getItem("user");

        if (currUser) {
            setUser(currUser);
        }
    }, [])

    function goToLogin() {
        window.location.href = "/login";
    }

    function handleLogout() {
        setUser("");
        window.localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <div className='navbar'>
            <img src={logo} className="logo" />
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/alumni">Alumni</Link></li>
            </ul>
            <div className='icon'>
                {/* {user ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <button onClick={goToLogin}>Login</button>
                )} */}
                <button onClick={goToLogin}>Write a blog!</button>
                
            </div>
        </div>
    )
}
