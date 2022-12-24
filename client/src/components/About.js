import React from "react";
import data from "./data";


function About(props) {
    const dataSkills = data[0]['skills'];

    return (
        <div className={props.selected === 'About' ? 'tab-selected' : 'tab-hidden'}>
            <div className='about'>
                <div className='about-header'>

                </div>

                <div className='about-content'>
                    {dataSkills}
                </div>
            </div>
        </div>
    )
}

export default About;