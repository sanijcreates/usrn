import React, {useState, useEffect} from 'react';
import "./Navbar.css"

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
            <div className='logo'>USRN</div>
            {user? <button onClick={handleClick}>Write a blog!</button> : <button>Be an Author!</button>}            
        </nav>
    )
}