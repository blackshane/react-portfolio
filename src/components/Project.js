import React from 'react';
 
const projects = [
    // TODO: WRITE IN PROJECTS HERE
]

// JSX Expression to render projects into the portfolio
export default function Project() {
    return (
      <div className='container'>
        <div className='p-5 mb-4 bg-light'>
            <h2>Projects</h2>
            <ul className='list-group'>
                {projects.map((project) => (
                    <li className="list-group item" key={projects.id}>
                        {`${project.name} ${project.description}`}
                    </li>                    
                ))}
            </ul>
        </div>

      </div>
    )
}