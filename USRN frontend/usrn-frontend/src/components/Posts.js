import React, {useState, useEffect} from "react";
import axios from "axios";
import PostCard from "./PostCard";
import blogPic from "../images/blogPic.jpg"
import { Link } from "react-router-dom";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/posts') 
            .then(res => {
                setPosts(res.data);
                console.log(posts);
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            {posts.map(post => (
                post.verified &&
                <Link to = {`/post/${post.id}`}><PostCard key = {post.id} id = {post.id} title = {post.title} metaBody = {post.body} imgSrc = {blogPic} authorFirstName = {post.account.firstName} authorLastName = {post.account.lastName}/>      </Link>             
            ))}
        </div>
    )

} 