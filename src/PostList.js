import React, { useEffect } from 'react';
import { getPosts, handleDeletePost } from './api';


const PostList = (props) => {
    const{posts, setPosts, isEditOpen, setIsEditOpen } = props;

    // function handleEdit(id) {
    //     isEditOpen(id, { title: "New Post = Update"})
    // }
    async function handleDelete(id) {
        handleDeletePost(id);
            const newPost = posts.filter(post => post.id !== id);
            setPosts(newPost);
    }

    useEffect(async () => {
        const { data: {posts}, } = await getPosts({
            baseURL: "/posts"
        });

        console.log(posts);
        setPosts(posts);
    }, []);

    const handleEdit = (e) => {
        e.preventDefault() 
        setIsEditOpen(!isEditOpen)
    }

    return (
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Location: {post.location}</p>
                    <p>Price: {post.price}</p>
                    <p>User: {post.author.username}</p>
                    <button type='button' className='editBtn' onClick={handleEdit} >Edit</button>
                    <button type='button' className='deleteBtn' onClick={() => handleDelete(post.id)} >Delete</button>
                </div>
            )}
        </div>
    );
};


export default PostList;