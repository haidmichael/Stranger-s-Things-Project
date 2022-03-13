
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
// import Register from "./api/Register";

const App = (props) => {
  const { name } = props;
  return (
    <>
      <h1>Welcome, {name}</h1>
      <PostList />
    </>
  );
}

export default hot(App);
