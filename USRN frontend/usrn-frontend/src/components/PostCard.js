import React from 'react';
import "./PostCard.css"

export default function PostCard(props) {

    const name = "Credits to " + props.authorFirstName + " " + props.authorLastName;

    const date = new Date(props.createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <div className='main-container-card'>
            <h3 className='blog-title'>{props.title}</h3>
            <div className ="blog-container">
                <div className = "credits">
                    <span>{props.authorFirstName + props.authorLastName}</span>
                    <div className='vl'></div>
                    <span>{formattedDate}</span>
                </div>
                <div className='content'>
                    <div dangerouslySetInnerHTML={{ __html: props.metaBody}}/>
                </div>
            </div>  
        </div>
    )
}