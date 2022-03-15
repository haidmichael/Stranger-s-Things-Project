import { React, useState} from 'react';
import { registerNewUser } from './api';

const RegisterUser = () => {
    const [user, setUser] = useState("");
    const [password, setPassword]= useState("");

    const handleRegisterClick = () => {
        const registerInfo = {
            user: user,
            password: password
        };

        registerNewUser(registerInfo);

        setUser("");
        setPassword("");
    };

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    
    return (
      <>
        <div>
            <h1>Register New User</h1>
        </div>

        <form>
            <input type="text" value={user} onChange={handleUserChange} />
            <input type="password" id="password" value={password}
             onChange={handlePasswordChange} />
            <input type="password" id="confirm-password" value={password}
             onChange={handlePasswordChange} />
            <button onClick={handleRegisterClick}>Register!</button>
        </form>
      </>    
    );
};

export default RegisterUser;