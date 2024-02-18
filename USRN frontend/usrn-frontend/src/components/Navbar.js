import React, {useState, useEffect} from 'react';
import "./Navbar.css"
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 816073e (first commit)

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

    return (
        <nav className='navbar'>
<<<<<<< HEAD
            <div className='logo'>USRN</div>
            {user? <button onClick={handleClick}>Write a blog!</button> : <button>Be an Author!</button>}            
=======
            <div className='logo'>
             <a href='/'>USRN</a>   
            </div>
            <ul>
                <a href=''><li>About</li></a>
                <a href=''><li>Vision</li></a>
                <a href=''><li>Recent</li></a>
                <a href=''><li>Post</li></a>
                <div className='icon'>
                <button><a href=''><li>Be an author! </li></a></button>
                <button>{!user && <a href="/Login">Login</a>}</button>
                </div>
            </ul>
>>>>>>> 816073e (first commit)
        </nav>
    )
}