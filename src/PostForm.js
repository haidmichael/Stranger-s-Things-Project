import React from 'react';
import { useState } from "react";
import { createNewPost } from './api';



const PostFrom = () => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [location, setLocation] = useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        createNewPost();
    }

    return (
    <>
        <h3>
            Add New Post
        </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} 
            onChange={(ev) => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="description" value={description} 
            onChange={(ev) => setDescription(ev.target.value)} ></input>
            <input type="text" placeholder="price" value={price} 
            onChange={(ev) => setPrice(ev.target.value)} ></input>
            <input type="text" placeholder="location" value={location} 
            onChange={(ev) => setLocation(ev.target.value)} ></input>
            <button type="submit">Submit</button>
        </form>
    </>
    );
}

export default PostFrom;
//call <PostForm /> with in the App.js under the <h1>Post</h1>