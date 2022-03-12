import React, { useState, useEffect } from 'react';
import { getPosts } from './api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const { data: {posts}, } = await getPosts({
            baseURL: "/posts"
        });
        console.log(posts);
        setPosts(posts);
    }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.username}</p>
                    <p>{post.description}</p>
                    <p>{post.location}</p>
                </div>
            )}
        </div>
    );
};

export default PostList;