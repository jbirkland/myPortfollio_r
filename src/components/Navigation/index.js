import React from 'react'
import './reset.css';
import './style.css';

function Navigation() {
  return (
    <div>
      <nav>
          <ul className="navbar"> 
            <li> 
                <a href="#aboutme">About Me</a> 
            </li>
            <li>
                <a href="#mywork">My Work</a>
            </li>
            <li>
                <a href="#contactme">Contact Me</a>
            </li>
            
          </ul>
        </nav>
    </div>
  )
}

export default Navigation
