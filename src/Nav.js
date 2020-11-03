import React from 'react';
import'./App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
          <h3>Logo</h3>
          <ul className="Nav">
              <Link to="/about"> 
              <li>About</li>
              </Link>
              <Link to="/home">
              <li>Home</li>
              </Link>
          </ul>
      </nav>
    )
}

export default Nav;