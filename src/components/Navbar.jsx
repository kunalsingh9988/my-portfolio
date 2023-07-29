import React, { useState } from "react";
import { Link } from "react-router-dom";
import {HiMenu} from 'react-icons/hi';
import {GrFormClose} from 'react-icons/gr'
const Navbar = () => {
  const[navDown,setNavDown] = useState(true)

  return (
    <div className="navbar">
      <button className="menu-icon" onClick={()=>setNavDown(!navDown)}>
        {
          navDown ?  <HiMenu className="menu-btn"  /> : <GrFormClose className="menu-btn" />
        }
        
       </button>
      <nav>
        <div className="brand-name">
         <Link to="/">    
         <h1 className="heading">KUNAL.</h1>
         </Link> 
        </div>
        <div className={`${navDown ? "icon-links active" : "icon-links"}`}>
          <ul className="link-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Hire Me</Link>
            </li>
          </ul>
        </div>
      </nav>
       
    </div>
  );
};

export default Navbar;
