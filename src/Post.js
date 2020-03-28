import React from 'react';
import './post.css';

const Post = ({id, name, email})=> {
    return(
        <div className="main">
            <h2>{name}</h2>
            <p><img alt="Robos Users" src={`https://robohash.org/${id}`}/></p>
            <span>{email}</span>
        </div>
    )
}

export default Post;
