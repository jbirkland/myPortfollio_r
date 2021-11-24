import React from 'react'
import Navigation from '../Navigation';
import './reset.css';
import './style.css';

function Header(props) {
  console.log(props)
  return (
    <div>
      <header className="topps"> 
        <h1>Justin Birkland Portfolio</h1> 
        <Navigation setCurrentPage = {props.setCurrentPage}/>
    </header>
    </div>
  )
}

export default Header

// Get setCurrentPage past into navigation
// then fix handleClick as to grab proper value
