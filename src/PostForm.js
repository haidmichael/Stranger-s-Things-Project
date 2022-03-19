import React from 'react';
import { useState } from "react";
import { createNewPost } from './api';



const PostFrom = () => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [location, setLocation] = useState([]);
    const [willDeliver, setWillDeliver] = useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        createNewPost();
    }

    return (
    <>
        <form onSubmit={handleSubmit} className='PostCard'>
        <h3>
            Create New Post
        </h3>
            <input type="text" placeholder="title" value={title} 
            onChange={(ev) => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="description" value={description} 
            onChange={(ev) => setDescription(ev.target.value)} ></input>
            <input type="text" placeholder="price" value={price} 
            onChange={(ev) => setPrice(ev.target.value)} ></input>
            <input type="text" placeholder="location" value={location} 
            onChange={(ev) => setLocation(ev.target.value)} ></input>
            <input type="checkbox" placeholder="Will Deliver" value={willDeliver} 
            onChange={(ev) => setWillDeliver(ev.target.value)}></input> Will Deliver
            <button type="submit" >Submit Post</button>
        </form>
    </>
    );
}
// Stuff to work on Saturday: Added label to check box. Figure out how to populate the post 
//once it is completed. It might be because my code is not linked up to the other branch's.
//fix CSS in the webpack.config. Ran it in the terminal and can't get it to work porperly.
//Merge all branch's 
export default PostFrom;