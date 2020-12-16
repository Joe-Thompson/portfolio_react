import React from 'react';

function Nav() {
    return (
        <div className='nav_container'>
            <a href='#projects'>Projects</a>
            <a href='#' defaultValue='active'>About</a>
            <a href='#contactForm'>Contact</a>
            <a href='#'>Home</a>
        </div>
    )
}

export default Nav;