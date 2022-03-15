const { useEffect } = require("react");

import React { useState } from 'react';

const accessForm = () => {
    const { login, logout } = useState([]);

const register = () => {
    
    
    useEffect(async () => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/register`);
    }[])  
    return(
    <div>
        <form>
            <div>
                <h2>Sign In</h2>
            </div>
            <div>
                <label>Username</label>
                <input type="text" name="Username" /> 
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="Password" />
            </div>
            <div>
                <input type="button" name="Submit" />
            </div>
        </form>
    </div>
)
}


}

// export default Register; 