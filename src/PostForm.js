import React from 'react';
import { useState } from "react";
import { createNewPost } from './api';



const PostForm = (props) => {
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
       const newPost = await createNewPost(postObject); console.log(newPost)
       setPosts([...posts, newPost.data.post])
    }
    const handleCheckChange = () => {
        setWillDeliver(!willDeliver);
      };
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
            
            <label >
            <input type="checkbox" id="willDeliver" checked={willDeliver} 
            onChange={handleCheckChange} />
                Will Deliver</label>
            <button type="submit" >Submit Post</button>
        </form>
    </>
    );
}
// Stuff to work on Saturday: Added label to check box. Figure out how to populate the post 
//once it is completed. It might be because my code is not linked up to the other branch's.
//fix CSS in the webpack.config. Ran it in the terminal and can't get it to work porperly.
//Merge all branch's 
export default PostForm;