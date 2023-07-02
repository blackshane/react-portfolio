import React from 'react';

 
const projects = [
    // TODO: WRITE IN PROJECTS HERE
    // Image
    // Title
    // Link to deployed App
    // Link to GitHub repo
    
]

// JSX Expression to render projects into the portfolio
export default function Project() {
    return (
      <div className='container'>
        <div className='p-5 mb-4 bg-light'>
            <h2>Projects</h2>
            <ul className='list-group'>
                {projects.map((project) => {
                    return (
                    <li className="list-group item" key={projects.title}>
                        {`${project.title} ${project.description}`}
                    </li>                    
                )
                    })}
            </ul>
        </div>

      </div>
    )
}