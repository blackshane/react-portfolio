import { useState } from 'react';
import picOfMe from '../images/pic-of-me.png';
import Nav from './Nav'

export default function Header() {

    const [imageSrc, setImageSrc] = useState(picOfMe)
    return (
        <div className="header">
            <h1> Thomas Shane Black</h1>
            <img className='header-img' src={imageSrc} alt='Me'></img>
            <Nav />
        </div>
    )
}