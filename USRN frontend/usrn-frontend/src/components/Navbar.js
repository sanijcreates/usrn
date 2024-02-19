import React, {useState, useEffect} from 'react';
import "./Navbar.css"
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
        <nav className='navbar'>
            <img src={logo} className="logo" alt = "logo"></img>
            
            <div>
                {user? <button onClick={handleClick}>Write a blog!</button> : <button className='button' onClick={goToLogin}>Be an Author!</button>}
                {user && <button onClick={handleLogout} className='logout'>Logout</button>}   
            </div>
                    
        </nav>
    )
}