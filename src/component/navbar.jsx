import "./navbar.css";
import React from "react";
import logo from './logo.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/'>
        <span className="logo"><img src={logo} alt="SVP-Sports"/></span>
        </Link>
        </div>
        <div className="navItems">        
          <span className="header"><header>SVP Sports - Distribution Center</header></span>
        </div>

       
      
    </div>
  )
}

export default Navbar