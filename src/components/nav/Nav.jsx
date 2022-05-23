import React from 'react'
import './nav.css'
import logo from './../../assets/image/ierrc-logo.png'

const Nav = () => {
    
  return (
    <div className='main-nav'>
        <div className="logo">
            <img src={logo} alt='Logo' className='navlogo'/>
        </div>
        <div className="nav_right">
            <button className='nav_btn'>HOME</button>
            <button className='nav_btn'>ABOUT</button>
            <button className='nav_btn'>CONTACT</button>
        </div>
    </div>
  )
}

export default Nav