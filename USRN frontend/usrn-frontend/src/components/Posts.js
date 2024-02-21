import React, {useState, useEffect} from "react";
import axios from "axios";
import PostCard from "./PostCard";
import blogPic from "../images/blogPic.jpg"
import { Link } from "react-router-dom";
import "./Posts.css"

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

    function metaBody(body) {

        var limit = 800;

        let def = body.substring(0,limit);

        if(body.length < limit) {
            return body;
        }

        var final;
        for(var i = limit; i >= 0; i--) {
            if(def.charAt(i) ===  '.') {
                final = def.substring(0, i+1);
                break;
            }
        }

        return final
    }

    return (
        <div className="posts">
            {posts.map(post => (
                post.verified &&
                <Link to = {`/post/${post.id}`} className="home_posts"><PostCard key = {post.id} id = {post.id} title = {post.title} metaBody = {metaBody(post.body)} imgSrc = {blogPic} authorFirstName = {post.account.firstName} authorLastName = {post.account.lastName} createdAt = {post.createdAt}/>     </Link>             
            ))}
        </div>
    )

} 