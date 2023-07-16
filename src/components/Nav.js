import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  
  return (
    <div className="nav navbar">
      <section className='links'>
        <Link to='/'> About Me </Link>
        <Link to='/portfolio'> Portfolio </Link>
        <Link to='/contact'>Contact </Link>
        <Link to='/resume'> Resume</Link>

      
        
       </section>
    </div>
  );
}