import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navbar = ({ token }) => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      useEffect(() => {
        if (localStorage.getItem("token")) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      }, [token]);
  return (
    <nav>
      <div className="container">
        {isLoggedIn ?(
          <div id="navLinks">
            <Link to="/">Home</Link>
            <Link to="/Post">Post</Link>
          </div>
        ) : (
          <div id="navLinks">
            <Link to="/">Home</Link>
            <Link to="/Post">Post</Link>
            <Link to="/Register">Register</Link>
          </div>     
        )}
      </div>
    </nav>
  );
};

export default navbar;