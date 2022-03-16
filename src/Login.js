import React, { useState } from 'react';
import { loginUser } from "./api"

const Login = () => {
    return (
        <div id="login">
            <form>
                <label>Username</label>
                <input type="text" value={user} placeholder="Enter Username"
                ></input>

                <label>Password</label>
                <input type ="password" value={password} placeholder="Enter Password" 
                ></input> 
                <button type="submit">Login</button>     
            </form>
        </div>
    );
};

export default Login;