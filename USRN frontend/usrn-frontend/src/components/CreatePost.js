import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'draft-js/dist/Draft.css'
import { EditorState} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import {Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./CreatePost.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from './auth/Login'

export default function CreatePost() {

    const [post, setPost] = useState({
        title:'',
        body:''
    });

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const [user, setUser] = useState("");

    useEffect(() => {
        let currUser = localStorage.getItem("user"); 

        if(currUser) {
            setUser(currUser);
        }
    },[])

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(!user)
        if(!user) {
            <Popup open={!user}>
                <div>Sign in</div>
                <button>Sign in</button>
            </Popup> 
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
                console.log(post.body);
                window.location.href = "/"
            })
            .catch(err => {
                console.log(err);
                console.log("Post failed", err)
            })
    }
    
    const hanldeEditorChange = (newEditorState) => {
        setEditorState(newEditorState);
        setPost(prevPost => ({
            ...prevPost, 
            body: stateToHTML(editorState.getCurrentContent())
        }))
    };

    return (
        <div className='main-container'>
            <h2 className='title-blog'>Write a blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type= "text" name = "title" value= {post.title} onChange={handleChange} placeholder='Title'/>
                </label>
                <br />
                <div className='editor'>
                     <Editor
                      editorState = {editorState} onEditorStateChange={hanldeEditorChange}
                        placeholder='Blog Main Body' value = {post.body}
                     />
                </div>
                <br/>
                <button type='submit'>Request for verification</button>
            </form>
            <Popup open={!user}>
                <div className='login__popup'>
                    <Login />
                </div>
            </Popup>
           
        </div>
    );
}