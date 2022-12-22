import React from "react";


function About(props) {

    return (
        <div className={props.selected === 'About' ? 'tab-selected' : 'tab-hidden'}>
            <div className='about'>
                <div className='about-header'>
                    <h1>Who am I?</h1>
                    <p>Your mom . com</p>
                    <h1>What do I do?</h1>
                    <p>Your mom . com</p>
                </div>

                <div className='about-content'>

                </div>
            </div>
        </div>
    )
}

export default About;