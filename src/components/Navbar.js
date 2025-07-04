import React from 'react'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div>
        <img src={logo} className={{}} alt=""/>
        <ul>
          <li>Home</li>
           <li>Product</li>
            <li>About</li>
             <li>Contact</li>


        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar