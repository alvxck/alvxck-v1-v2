import React from "react";
import MediaLink from './MediaLink.js';
import Tab from './Tab.js';
import data from './data.js';
import e24 from '../assets/e24.gif';

function Profile(props) {
    const dataLinks = data[0]['links'];

    return (
        <div className='profile'>
            <div className='profile-information'>
                <img id='slide-in-1' src={e24} alt='car'/>
                <h1 id='slide-in-2'>Alexander Carvalho</h1>
                <p id='slide-in-3'>Software Engineer based in Toronto.</p>
                <p id='slide-in-4'>Currently @ <a id='current-job' href='https://www.geotab.com/' target='blank'>Geotab.</a></p>
                <div id='slide-in-5' 
                    className='profile-links'
                    >
                    {dataLinks.map((media) => (
                        <MediaLink
                            key={media.key}
                            svg={media.svg}
                            link={media.link}
                        />
                    ))}
                </div>
            </div>

            <div className='profile-tabs'>
                {data.map((tab) => (
                    <Tab
                        key={tab.key}
                        value={tab.value}
                        selected={props.selected}
                        onClick={() => props.setTab(tab.value)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Profile;