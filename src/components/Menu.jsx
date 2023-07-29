import React from "react";
import { BsArrowDown } from "react-icons/bs";
const Menu = () => {
  return (
    <div className="menu-section">
      <div className="main-heading">
        <h2>Hello, I'm Kunal Singh.</h2>
        <h3> Front-End Developer</h3>
      </div>
      <div className="main-desc">
   
          Passionate front-end developer creating seamless web experiences with
          React. Bringing designs to life with a focus on user-centric
          interfaces.
    
      </div>
       <BsArrowDown className="down-arrow"  />
    </div>
  );
};

export default Menu;
