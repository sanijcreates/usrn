import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';


export default function Post() {

    const {postId} = useParams();

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
    },);

    return (
        <div>
            <h1>{post.title}</h1>
            <img src = {postId} alt="blog"/>
            <div>
                <h4>Written by: {post.account.firstName}</h4>
                <h4>Created at: {post.createdAt}</h4>
            </div>
            <p>{post.body}</p>
        </div>
    )
}