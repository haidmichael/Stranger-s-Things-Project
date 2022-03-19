
import  React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import { testAuthentication } from "./api";
import PostList from "./PostList";
import RegisterUser from "./RegisterUser";
import PostForm from "./PostForm"
import Login from "./Login"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <>
    <Router>
    {isLoggedIn ?(
          <div id="navLinks">
            <Link to="/">Home</Link>
            <Link to="/Post">Post</Link>
          </div>
        ) : (
          <div id="navLinks">
            <Link to="/">Home</Link>
            <Link to="/Post">Post</Link>
            <Link to="/Register">Register</Link>
          </div>     
        )}
      <h1>Strangers Things</h1>
      <PostForm posts={posts} setPosts={setPosts}/>

      <Route path="/Register"> 
        <RegisterUser />
      </Route>   
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <PostList posts={posts} setPosts={setPosts}/>}
    </Router>  
    </>
  );
}

export default hot(App);
