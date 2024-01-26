import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreatePost() {

    const [post, setPost] = useState({
        title:'',
        body:''
    });

    const [user, setUser] = useState("");

    useEffect(() => {
        let currUser = localStorage.getItem("user"); 

        currUser = currUser.replace(/"/g, '');

        if(currUser) {
            setUser(currUser);
        }
    })

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!user) {
            alert("Please Login to your account first")
            return; 
        }

        axios.post('http://localhost:8080/posts/create', {
            title : post.title,
            body: post.body,
            verified: false,
            email: user
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
    })
            .then(res => {
                console.log(res);
                window.location.href = "/"
            })
            .catch(err => {
                console.log(user);
                console.log("Post failed", err)
            })
    }

    return (
        <div>
            <h2>Write a blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type= "text" name = "title" value= {post.title}onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Blog Body:
                    <input type="text" name = "body" value = {post.body}onChange={handleChange}/>
                </label>
                <br/>
                <button type='submit'>Request for verification</button>
            </form>
        </div>
    );
}