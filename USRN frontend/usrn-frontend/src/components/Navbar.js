import React, {useState, useEffect} from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

export default function Navbar() {

    const [user, setUser] = useState("");

    useEffect(() => {
        const currUser = localStorage.getItem("user"); 

        if(currUser) {
            setUser(currUser);
        }
    }, [])

    function handleClick() {
        window.location.href = "/createPost"
    }

    function goToLogin() {
        window.location.href = "/login"
    }

    function handleLogout() {

        setUser("")
        window.localStorage.removeItem('user')
        window.location.reload()
    }
    return (
        <div className='navbar'>
             <img src = {logo} className ="logo"/>  
            <div className='icon'>
            <button><Link onClick={handleClick}>Write a blog!</Link></button>
            </div>
        </div>
    )
}