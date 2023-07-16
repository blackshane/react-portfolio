import React from 'react'

function About() {
  return (
    <div className='about-me'>
      <h2> Hi, My Name is Thomas "Shane" Black </h2>
      <p> I am a Full Stack web developer who will graduate from Washington University- St. Louis' Full Stack Web Development course on July 24th 2023. I spent 5 years in pharmaceuticals working in Quality (most recently as an MQA Specialist for Pfizer) and I have a Bachelors of Health Science in Health Science from the University of Missouri- Columbia. 
        I enjoy being outside as much as I enjoy being at my computer and enjoy spending time near rivers for kayaking, camping, cold water emersion, etc. I also enjoy martial arts and look forward to continuing my continuation of my jiu-jitsu training at the conclusion of the web development course. Potential employers and others interested in my work, please visit my 
        GitHub page linked in the footer on any page.  </p>
      <h3>Knowledge of the following: </h3>
      <ul className="list">
          <li className="item">
            <h4> Front-End</h4>
            <span>
              ReactJS, HTML, CSS, NPM,
              BootStrap
            </span>
          </li>
          <li className="item">
            <h4>Back-End</h4>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h4>Languages</h4>
            <span>JavaScript</span>
          </li>
        </ul>
    </div>
  )
}

export default About