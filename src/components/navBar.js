// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/showcase">Showcase</Link>
      </div>
    </nav>
  );
};

export default NavBar;
