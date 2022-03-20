import React from 'react';
import { useState } from "react";
import { editPost, handleDelete } from './api';

const EditForm = (props) => {
    const {
        setPosts,
        posts
    } = props

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const postObject = {
            post: {
                title: title, 
                description: description,
                price: price,
                location: location,
                willDeliver: willDeliver
            
            }
        }
       const newPost = await editPost(postObject); console.log(newPost)
       setPosts([...posts, newPost.data.post])
       setTitle('');
       setDescription('');
       setPrice('');
       setLocation('');
       setWillDeliver('');
       handleDelete();
    }
    const handleCheckChange = () => {
        setWillDeliver(!willDeliver);
      };
    return (
    <>
        <form onSubmit={handleSubmit} className='PostCard'>
        <h3>
            Edit Your Post
        </h3>
            <input className='subBox' type="text" placeholder="title" value={title} 
            onChange={(ev) => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="description" value={description} 
            onChange={(ev) => setDescription(ev.target.value)} ></input>
            <input type="text" placeholder="price" value={price} 
            onChange={(ev) => setPrice(ev.target.value)} ></input>
            <input type="text" placeholder="location" value={location} 
            onChange={(ev) => setLocation(ev.target.value)} ></input>
            
            <label >
            <input type="checkbox" id="willDeliver" checked={willDeliver} 
            onChange={handleCheckChange} />
                Will Deliver</label>
            <button className="submitBtn" type="submit" >Submit Post</button>
        </form>
    </>
    );
    
}

export default EditForm;