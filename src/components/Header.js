import React from "react";
import { Link  } from "react-router-dom";
import "../App.css";

function Header() {
    return (
        <header>
            <nav className="nav-container">
                 <h1>Fitness from home App</h1>
               <Link to='/'>Home</Link>
               <Link to='/blog'>Blog</Link>
               <Link to='/about'>About</Link>
               <div className="right-links">
               <Link to='/signup'>SignUp</Link>
               <Link to='/login'>Login</Link>
                   
               </div>
               
            </nav>
        </header>
    );
}

export default Header;