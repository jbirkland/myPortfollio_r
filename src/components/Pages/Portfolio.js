import React from 'react'
import './reset.css';
import './style.css';

import weatherSS from '../../images/WeathScrShot.png'
import uLibrary from '../../images/u.Library.PNG'
import unicorn1 from '../../images/1unicorn.PNG'
import IconWa from '../../images/icon_WA.PNG'
import movieScSh from '../../images/scrShotMovie.JPG'
import IconMa from '../../images/Icon_MA.PNG'
import Fitness from '../../images/fitnes.png'
import Fitss from '../../images/fitss.png'
import empTkr from '../../images/empTkr.PNG'
import empTRss from '../../images/empTRss.PNG'
import teamprof from '../../images/teamprof.PNG'
import profGenSS from '../../images/profGenSS.PNG'


export default function Blog() {
  return (
  <main>

    <section class="about-me-container"/>
    
    <ul class= "jjb07">
      <h2 id="mywork">My Work</h2>
        <li class= "dropdown"> 
            <img class="prework dropbtn" alt="prework img" src={IconMa}
              width="450px" height="250px"/>
              <div class= "dropdown-content">
                <a href="https://jbirkland.github.io/movies_api/">Website</a>
                <a href="https://github.com/jbirkland/movies_api">Repo</a>
                <a href={movieScSh}>Screenshot</a>
              </div>
        </li>

         <li class= "dropdown"> 
            <img class="prework dropbtn" alt="prework img" src={IconWa}
              width="450" height="250"/>
              <div class= "dropdown-content">
                <a href="https://jbirkland.github.io/weather_connect/">Website</a>
                <a href="https://github.com/jbirkland/weather_connect">Repo</a>
                <a href={weatherSS}>Screenshot</a>
              </div>
         </li>

         <li class= "dropdown"> 
          <img class="prework dropbtn" alt="prework img" src={unicorn1}
            width="450" height="250"/>
            <div class= "dropdown-content">
              <a href="https://jbirkland.github.io/UnicornBooks/">Website</a>
              <a href="https://github.com/jbirkland/UnicornBooks">Repo</a>
              <a href={uLibrary}>Screenshot</a>
            </div>
       </li>

       <li class= "dropdown"> 
          <img class="prework dropbtn" alt="prework img" src={Fitness}
            width="450" height="250"/>
            <div class= "dropdown-content">
              <a href="https://glacial-gorge-00968.herokuapp.com/?id=61947b8137f3270016b1511c">Website</a>
              <a href="https://github.com/jbirkland/fitnessTracker">Repo</a>
              <a href={Fitss}>Screenshot</a>
            </div>
       </li>

       <li class= "dropdown"> 
          <img class="prework dropbtn" alt="prework img" src={empTkr}
            width="450" height="250"/>
            <div class= "dropdown-content">
              <a href="https://watch.screencastify.com/v/fTUMBop5DEPWt0PpP3UF">Demo</a>
              <a href="https://github.com/jbirkland/emp_tracker">Repo</a>
              <a href={empTRss}>Screenshot</a>
            </div>
       </li>

       <li class= "dropdown"> 
          <img class="prework dropbtn" alt="prework img" src={teamprof}
            width="450" height="250"/>
            <div class= "dropdown-content">
              <a href="https://watch.screencastify.com/v/Dnr0PpK1o0uFVXAs8UM4">Demo</a>
              <a href="https://github.com/jbirkland/engTeam_empInfo">Repo</a>
              <a href={profGenSS}>Screenshot</a>
            </div>
       </li>

    </ul>
</main>
  );
}