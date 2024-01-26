import React from 'react';
import "./PostCard.css"

export default function PostCard(props) {

    const name = "Credits to " + props.authorFirstName + " " + props.authorLastName;

    return (
        <div className='main-container'>
            <h3 className='blog-title'>{props.title}</h3>
            <div className ="blog-container">
                <div className='picture-left'>   
                    <figure>
                        <img className = 'blog-image' src = {props.imgSrc}/>
                        <figcaption>{name}</figcaption>
                    </figure>
                </div>
                <div className='content'>
                    <p className='blog-meta-body'>{props.metaBody}</p>
                </div>
            </div>  
        </div>
    )
}