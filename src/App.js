
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";

const App = () => {
  return (
    <>
      <h1>Strangers Things</h1>
      <PostList />
    </>
  );
}

export default hot(App);
