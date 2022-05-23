import React from 'react'
import './nav.css'
import logo from './../../assets/image/ierrc-logo.jpeg'

const Nav = () => {
    
  return (
    <div className='main-nav'>
        <div className="logo">
            <img src={logo} alt='Logo' className='navlogo'/>
        </div>
        <div className="nav_right">
            <button className='nav_btn'>Home</button>
            <button className='nav_btn'>About</button>
            <button className='nav_btn'>Contact</button>
        </div>
    </div>
  )
}

export default Nav