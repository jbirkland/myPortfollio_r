import React from 'react'
import Resumepdf from '../../images/resume1.pdf'
import {BsFileEarmarkPdf} from "react-icons/bs"

function Resume() {
  return (
    <div>
      <h2>Resume
        <a href= {Resumepdf}><BsFileEarmarkPdf /></a> 
      </h2>
      <h2>Front End Proficiencies</h2>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Bootstrap</li>

      </ul>
      <h2>Back End Proficiencies</h2>
      <ul>
          <li>API's</li>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>Seqelize</li>
          <li>Mongo</li>
          <li>Mongoose</li>
          <li>Axios</li>
      </ul>
    </div>
  )
}

export default Resume