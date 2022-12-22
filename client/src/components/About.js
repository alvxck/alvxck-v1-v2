import React from "react";


function About(props) {

    return (
        <div className={props.selected === 'About' ? 'tab-selected' : 'tab-hidden'}>
            <div className='about'>

            </div>
        </div>
    )
}

export default About;