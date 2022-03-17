
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterUser from "./RegisterUser";
import PostForm from "./PostForm"


const App = () => {
  return (
    <>
      <h1>Strangers Things</h1>
      <PostForm />
      <PostList />
      <RegisterUser />
    </>
  );
}

export default hot(App);
