import React, { useState, useEffect } from 'react';
import { loginUser } from "./api"
import PostList from "./PostList"
const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword]= useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        event.preventDefault();

        console.log("Logging in...");
        const registerInfo = {
            user: user,
            password: password
        };

        loginUser(registerInfo);

        setUser("");
        setPassword("");
    };

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogOut = () => {
        localStorage.removeItem("stranger_things_JWT");
        setIsLoggedIn(false);
    }
    

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("stranger_things_JWT"))
    }, []);

    console.log("Is Logged In: ", isLoggedIn);

    return (
      <>
        <div id="login">
            <form>
                <label>Username</label>
                <input type="text" value={user} placeholder="Enter Username"
                onChange={handleUserChange}
                ></input>

                <label>Password</label>
                <input type ="password" value={password} placeholder="Enter Password"
                onChange={handlePasswordChange} 
                ></input> 
                <button type="submit" onClick={handleLogin}>Login</button>
                <button type="submit" onClick={handleLogOut}>Log Out</button>     
            </form>
        </div>
        {isLoggedIn && <PostList />}
      </>  
    );
};

export default Login;
