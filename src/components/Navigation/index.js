import React, { useState } from 'react'
import Resume from '../Resume'
import './reset.css';
import './style.css';

function Navigation(props) {
  // let [page, setPage] = useState("");
  const handleClick = (e) => {
    console.log(props)
    console.log("is this clicked");
    // props.setCurrentPage("Resume")
  }
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
                <span href="#contactme">Contact Me</span>
            </li>
            <li>
              <span id="resume" value="Resume" onClick = {handleClick}>My Resume</span>
            </li>   
          </ul>
        </nav>
    </div>
  )
}

export default Navigation
// complete same setup with other nav items//
