import React from 'react';
import profile from '../assets/sha-preview.png';

function About(props) {
    return (
        <div className={props.selected ? 'about-container-open' : 'about-container-closed'}>

        </div>
    )
}

export default About;