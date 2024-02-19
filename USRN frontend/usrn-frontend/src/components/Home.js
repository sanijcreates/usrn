import React, {useState, useEffect} from "react";
import Posts from "./Posts";
import Login from "./auth/Login"
import "./Home.css"
import Register from "./auth/Register";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {

    const [user, setUser] = useState("");

    useEffect(() => {
        const currUser = localStorage.getItem("user")

        if(currUser) {
            setUser(currUser);
        }
    }, [])

    function Logout() {
        localStorage.removeItem("user")
        setUser("");
        window.location.reload();
    }

    return (
        <div className="home-container">
            <Navbar />
            <Posts />
        </div>
    )

}