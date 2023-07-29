import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi";

const Footer = ({email}) => {
  
  return (
    <div className="footer">
      <div className='footer-left'>
          <h3>Kunal Singh - 2023</h3>
      </div>
      <div className="footer-right">
          <Link to="https://www.linkedin.com/in/kunal-singh-2724571b2/" target="_blank">Linkedin <FiArrowUpRight/>  </Link>
          <Link to="https://github.com/kunalsingh9988/kunal-ecommerce" target="_blank">Github<FiArrowUpRight/></Link>
          {email.isTrue ?  email.emailLink: null}
      </div>
    </div>
  )
}

export default Footer