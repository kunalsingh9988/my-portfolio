import React from "react";
import Footer from "../components/Footer";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = () => {
  const email ={
    isTrue: false,
    emailLink: <Link to="/contact">email<FiArrowUpRight/></Link>
  }
  return (
    <div className="contact">
      <div className="upper-text">

      <span>Contact/Whatsapp no. : +916266750520</span>
      <span>email : kusing51@gmail.com</span>
      <span>Location : Bhilai, Chhattisgarh</span>
      <b style={{color:"red"}}> Ready to relocate !</b>
      </div>
      <h1>Send me an email!</h1>
      <form action="https://formspree.io/f/myyqyjjj" method="POST">
        <ul className="form-style-1">
          <li>
            <label>
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field1"
              className="field-divided"
              placeholder="full Name"
              reaquired="true"
            />{" "}
         
          </li>
          <li>
            <label>
              Email <span className="required">*</span>
            </label>
            <input type="email" name="field3" className="field-long" placeholder="email"  reaquired="true"/>
          </li>
        
          <li>
            <label>
              Your Message <span className="required">*</span>
            </label>
            <textarea
              name="field5"
              id="field5"
              className="field-long field-textarea"
            ></textarea>
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
      <Footer email={email}/>
   
    </div>
  );
};

export default Contact;
