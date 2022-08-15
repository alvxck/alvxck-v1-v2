import React from 'react';
import profile from '../assets/profile.jpg';

function About(props) {
    return (
        <div className={props.selected ? 'about-container-open' : 'about-container-closed'}>
            <div className='about-content'>
                <img src={profile} alt='profile'/>

                <div className='about-content-information'>
                    <h1>Hi, my name is Alex.</h1>
                    <p>I am a computer science student focused on xxxxxxxx.</p>
                </div>
            </div>
            

        </div>
    )
}

export default About;