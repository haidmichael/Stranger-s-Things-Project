
import  React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import { testAuthentication } from "./api";
import PostList from "./PostList";
import RegisterUser from "./RegisterUser";
import Login from "./Login"




const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>Strangers Things</h1>
      <button onClick={ testAuthentication }>Test Auth</button>
      <RegisterUser />
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <PostList />}
    </>
  );
}

export default hot(App);
