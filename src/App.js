
import  React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import { testAuthentication } from "./api";
import PostList from "./PostList";
import RegisterUser from "./RegisterUser";
import PostForm from "./PostForm"
import Login from "./Login"
import EditForm from "./EditForm";
// import Navbar from "./Navbar"
// import { BrowserRouter as Router, Routes } from "react-router-dom";




const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const[postId, setPostId] = useState(null);
  const[isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <h1>Strangers Things</h1>

      {
        isEditOpen
       ? <EditForm posts={posts} setPosts={setPosts} 
        postId={postId} setPostId={setPostId} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} /> :
      <PostForm posts={posts} 
      setPosts={setPosts} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen}/>
      }
      {/* <PostForm posts={posts} setPosts={setPosts}/> */}

      {/* <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Router>
        
      </Router> */}
      <button onClick={ testAuthentication }>Test Auth</button>
      <RegisterUser />
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <PostList posts={posts} setPosts={setPosts} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen}/>}
      
    </>
  );
}

export default hot(App);
