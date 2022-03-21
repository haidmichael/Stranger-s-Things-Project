
import  React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterUser from "./RegisterUser";
import PostForm from "./PostForm"
import Login from "./Login"
import EditForm from "./EditForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"



const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const[postId, setPostId] = useState(null);
  const[isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
    <Router>
    {isLoggedIn ?(
          <div id="navLinks" className="loggedInNav">
            <Link to="/Home">Home</Link>
            <Link to="/PostForm">Post</Link>
            <Link to="/Login">Login</Link>
            <Link to="/PostList">Posts</Link>
          </div>
        ) : (
          <div id="navLinks" className="loggedinNav">
            <Link to="/Home">Home</Link>
            <Link to="/PostForm">Post</Link>
            <Link to="/RegisterUser">Register</Link>
            <Link to="/Login">Login</Link>
          </div>     
        )}
      <h1>Strangers Things</h1>
      
      <Route path="/Home">
        <Home />
      </Route>    
      <Route path="/RegisterUser"> 
        <RegisterUser />
      </Route>
      <Route path="/Login">   
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Route>
      <Route path="/PostList">
        <PostList isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
        posts={posts} setPosts={setPosts} />
      </Route>
      <Route path="/PostForm">
          <PostForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Route>
    </Router>  

      {
        isEditOpen
       ? <EditForm posts={posts} setPosts={setPosts} 
        postId={postId} setPostId={setPostId} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} /> :
      <PostForm posts={posts} 
      setPosts={setPosts} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen}/>
      }

      <RegisterUser />
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <PostList posts={posts} setPosts={setPosts} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen}/>}
      
    </>
  );
}

export default hot(App);
