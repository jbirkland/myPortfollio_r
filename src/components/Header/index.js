import React from 'react'
import Navigation from '../Navigation';
import './reset.css';
import './style.css';

function Header() {
  return (
    <div>
      <header className="topps"> 
        <h1>Justin Birkland Portfolio</h1>
        <Navigation/>
    </header>
    </div>
  )
}

export default Header
