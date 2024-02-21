import React from 'react';
import "./PostCard.css"

export default function PostCard(props) {

    const name = "Credits to " + props.authorFirstName + " " + props.authorLastName;

    const date = new Date(props.createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <div className='main-container'>
            <h3 className='blog-title'>{props.title}</h3>
            <div className ="blog-container">
                <div className = "credits">
                    <span>{props.authorFirstName + props.authorLastName}</span>
                    <div className='vl'></div>
                    <span>{formattedDate}</span>
                </div>
                <div className='content'>
                    <p className='blog-meta-body'>{props.metaBody}</p>
                </div>
            </div>  
        </div>
    )
}