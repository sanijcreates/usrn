import React, { useEffect, useState } from 'react'
import {useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import "./Post.css"
import { Link } from "react-router-dom";


export default function Post() {

    const {postId} = useParams();
    let location = useLocation()

    console.log(location)

    const [post, setPost] = useState({
        title: '',
        createdAt: '',
        account: {
            firstName: '',
            lastName: '',
        },    
        
        body: ''
    })

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(`http://localhost:8080/posts/${postId}`);
                setPost(res.data);
                console.log({postId});
                console.log(post);
                console.log(res.data);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();           
    },[]);

    const crumb = () => {
        return (
            <div>
                <Link to={"/"} >Home</Link>
            </div>
        )
    }

    const date = new Date(post.createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <div className='main-container'>
            <div className='breadcrumb'>
                <Link to={"/"} className='location'>Home </Link>
                >
                <Link to ={location} className='location'> {post.title}</Link>
            </div>
            <h1 className='title'>{post.title}</h1>
            
            <div className = "credits">
                    <span>{post.account.firstName + post.account.lastName}</span>
                    <div className='vl'></div>
                    <span>{formattedDate}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
    )
}