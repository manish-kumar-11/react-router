import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        {/* <img src={logo} className={{}} alt=""/> */}
        <ul>
          <li><Link to="/home">Home</Link></li>
           <li><Link to="/product">Product</Link></li>
            <li>About</li>
             <li>Contact</li>


        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar