import React from 'react';
import { useDarkMode } from "../utils/darkmode";

function Nav() {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    let title = 'Dark Mode'

    return (
        <div className='nav_container'>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contactForm'>Contact</a>
            <div className='dark_mode_container'>
                <p>{!darkMode ? title : 'Light Mode'}</p>
                <ion-icon name="arrow-forward-outline"></ion-icon>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
                </div>
            </div>
        </div>
    )
}

export default Nav;