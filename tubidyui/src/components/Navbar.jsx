import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            Tubidy
        </div>
        <div className='navbar-links'>
            <a href="#about">About</a>
        </div>
    </nav>
  )
}

export default Navbar
