import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ChatHub</span>
      <div className="menu">
        <button className="hamburger">&#9776;</button>
        <button className="search">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
