
import { React, useState} from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";

import RegisterUser from "./RegisterUser";



const App = () => {
  return (
    <>
      <h1>Strangers Things</h1>
      <PostList />
      <RegisterUser />
    </>
  );
}

export default hot(App);
