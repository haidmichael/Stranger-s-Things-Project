
import  React from "react";
import { hot } from 'react-hot-loader/root';
import { testAuthentication } from "./api";
import PostList from "./PostList";
import RegisterUser from "./RegisterUser";



const App = () => {
  return (
    <>
      <h1>Strangers Things</h1>
      <button onClick={ testAuthentication }>Test Auth</button>
      <RegisterUser />
      <PostList />
    </>
  );
}

export default hot(App);
