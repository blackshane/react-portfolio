import React from 'react';
import GitHubSvg from '../images/github.svg';
import LinkedInSvg from '../images/linkedin.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <ul>
                <li>
                    <a href='https://github.com/blackshane'> 
                    <img src={GitHubSvg} alt='GitHub SVG' />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/thomas-black-00a729a7/'>
                     <img src={LinkedInSvg} alt='LinkedIn SVG' />
                     </a>
                </li>
            </ul>
        </div>
        
    )
}