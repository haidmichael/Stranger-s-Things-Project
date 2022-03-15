
import  React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterUser from "./RegisterUser";



const App = () => {
  return (
    <>
      <h1>Strangers Things</h1>
      <RegisterUser />
      <PostList />
    </>
  );
}

export default hot(App);
