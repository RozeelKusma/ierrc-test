import React from 'react'
import './nav.css'
import logo from './../../assets/image/ierrc-logo.png'
import { Link } from 'react-scroll'

const Nav = () => {
    
  return (
    <div className='main-nav'>
        <div className="logo">
            <img src={logo} alt='Logo' className='navlogo'/>
        </div>
        <div className="nav_right">
            <button className='nav_btn'>HOME</button>
            <button className='nav_btn'>ABOUT</button>
           <Link to="contact" spy={true} smooth={true}>
            <button className='nav_btn'>CONTACT</button>
           </Link>
        </div>
    </div>
  )
}

export default Nav