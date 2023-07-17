import React from 'react';
import { useState } from 'react';
import Caffiend from '../images/caffiend.png';
import TextEditor from '../images/text-editor.png';
import eCommerce from '../images/e-commerce-back-end.png';
import employee from '../images/employee-tracker.png';
import futbolFan from '../images/futbol-fan.png';
import weatherApp from '../images/weater-app.png';

 
export default function Projects() {
    const [projects, setProjects] = useState([
        { image: Caffiend, title: 'Caf-fiend', deployLink: 'https://mighty-cove-96789.herokuapp.com/', gitLink: 'https://github.com/jbowdle/Caf-Fiend', id: 1 },
        { image: TextEditor, title: 'Text Editor', deployLink: 'https://glacial-brook-21423-c62f95324d3c.herokuapp.com/', gitLink: 'https://github.com/blackshane/text-editor', id: 2 },
        { image: eCommerce, title: 'E-Commerce BackEnd',  gitLink: 'https://github.com/blackshane/e-commerce-back-end', id: 3},
        { image: employee, title: 'Employee Tracker', gitLink: 'https://github.com/blackshane/employee-tracker', id: 4},
        { image: futbolFan, title: 'Futbol Fan App', deployLink: 'https://blackshane.github.io/Futbol-Fan-App/', gitLink: 'https://github.com/blackshane/Futbol-Fan-App', id: 5},
        { image: weatherApp, title: 'Weather App', deployLink:'https://blackshane.github.io/weather-app/', gitLink: 'https://github.com/blackshane/weather-app', id: 6}


    ])


// JSX Expression to render projects into the portfolio
return (
    <div className="projects">
    {projects.map((project) => (
      <div className="project-list" key={project.id}>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <h3>
          GitHub Repo Link: <a href={project.gitLink}>{project.gitLink}</a>
        </h3>
        <h3>
          Link to Deployed Application:{' '}
          <a href={project.deployLink}>{project.deployLink}</a>
        </h3>
      </div>
        ))}
    </div>
)
    
}