import React from 'react';
import blob from '../assets/blob.png';
import sheridan from '../assets/sheridan.png';

function About(props) {
    return (
        <div className={props.selected ? 'about-container-open' : 'about-container-closed'}>
            <img src={blob} alt='headshot'/>
            <h1>Hi! I'm Alex,</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            
            <div className='about-information'>
                <div className='about-education'>
                    <img src={sheridan} alt='sheridan'/>
                    <div className='about-education-info'>
                        <h1>Education</h1>
                        <ul>
                            <li>Institution · Sheridan College</li>
                            <li>Degree · Honours Bachelor of Computer Science (Co-op)</li>
                            <li>GPA · 3.88</li>
                            <li>Years · 2021 - 2025</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;