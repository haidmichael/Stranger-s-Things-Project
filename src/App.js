
import  React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import { testAuthentication } from "./api";
import PostList from "./PostList";
import RegisterUser from "./RegisterUser";
import PostForm from "./PostForm"
import Login from "./Login"
// import Navbar from "./Navbar"
// import { BrowserRouter as Router, Routes } from "react-router-dom";



const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <>
      <h1>Strangers Things</h1>
      <PostForm posts={posts} setPosts={setPosts}/>
      {/* <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Router>
        
      </Router> */}
      <button onClick={ testAuthentication }>Test Auth</button>
      <RegisterUser />
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <PostList posts={posts} setPosts={setPosts}/>}
    </>
  );
}

export default hot(App);
