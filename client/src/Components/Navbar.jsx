import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-brand">
          <img src="./images/logo.png" alt="Website Logo" className="logo" />
        </a>
      </div>

      <div className="navbar-right">
        <a href="/about" className="navbar-link">
          About
        </a>
        <a href="/login" className="navbar-link">
          Login
        </a>
        <a href="/register" className="navbar-link">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
