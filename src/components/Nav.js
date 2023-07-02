import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  
  return (
    <nav className="nav navbar">
      <section className='links'>
        <Link to='/'> About Me </Link>
        <Link to='./Project.js'> Portfolio</Link>
        <Link to='./Form/index.js'>Contact</Link>
        <Link to='./Resume.js'> Resume</Link>

      
        
       </section>
    </nav>
  );
}