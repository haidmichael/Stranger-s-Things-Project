import React, { useState, useEffect } from 'react';
//import { getPosts } from './api';
import ReactDOM from 'react-dom';

const cohortName = '2112-FTB-ET-WEB-PT'

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts`);
            const posts = await resp.json();
            setPosts(posts);
        }
        fetchPosts();
        // const posts = await getPosts();
        // setPosts(posts);
    }, []);

    return (
        <div>
            {
            posts.map(post => 
            <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

ReactDOM.render(
    <PostList />,
    document.getElementById('app')
)

export default PostList;