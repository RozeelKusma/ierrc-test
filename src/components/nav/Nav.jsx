import React from 'react'
import './nav.css'
import logo from './../../assets/image/ierrc-logo.png'
import {Link as Link1} from 'react-scroll'
import { Link as Link2} from 'react-router-dom'

const Nav = () => {
    
  return (
    <div className='main-nav'>
        <div className="logo">
            <img src={logo} alt='Logo' className='navlogo'/>
        </div>
        <div className="nav_right">
            <Link2 to='/' >
            <button className='nav_btn'>
              HOME
              </button>
            </Link2>
            <button className='nav_btn'>ABOUT</button>
           <Link1 to="contact" spy={true} smooth={true}>
            <button className='nav_btn'>CONTACT</button>
           </Link1>
        </div>
    </div>
  )
}

export default Nav