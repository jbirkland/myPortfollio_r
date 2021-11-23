import React from 'react'
import './reset.css';
import './style.css';
import Resume from "../../images/resume1.pdf"
import Profilepic from '../../images/profile_pic.b.jpg'
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

function Project() {
  return (
    
    <main>
      <section class="about-me-container">   
          
             <h2 id="aboutme">About Me</h2> 
             <div class= "apple">
               <p>	I currently work as a Logistics Coordinator for a lumber company out of Minneapolis servicing commercial and high-end contractors. I direct a group of drivers and yard staff to complete daily tasks at hand and ensure efficient accurate deliveries.</p>

               <p> Previous to this I was an Operations Supervisor for an oxygen therapy company out of St. Paul. I oversaw a fleet of 25+ drivers and worked with our customer base in depth on a daily basis. This included residential customers along with nursing homes and hospitals. A few of the skills I inherited while working there include analyzing data, problem solving in a high stress environment, managing multiple tasks, and gain understanding of basic business concepts.	</p>

               <p>I have 10+ years of being in the customer service industry. Coming from this background I know that not all customers are the same. They all have different wants and needs and thoughts of how a job or service should be done. One of the main focus points to offering exceptional customer service is listening to your customers needs and finding a way to solve them. This is also true with management and colleagues in the fact that the thought process of how to get something done may be different. With different point of views, the end goal must be the same. Ensure the customer is happy. </p>

               <p>These aspects show to be true in the web development world as well. As there are many different combinations to complete an assignment/ project the question is, is it what the customer envisioned/wanted or better. I feel with my new passion for the web development world and the understanding of team work and customer needs I can become of value and make positive contributions to my team at hand.
               
              </p>
              <a id="resume" href={Resume}>My Resume</a> 
            </div>
            <img src= {Profilepic} alt="Picture of Justin Birkland" id="profilepic"/>

      </section>

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
       
      <section>




          </section>


  </main>
    
  )
}

export default Project
