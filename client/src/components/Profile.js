import React from "react";
import MediaLink from './MediaLink.js';
import Tab from './Tab.js';
import data from './data.js';

function Profile(props) {
    const dataLinks = data[0]['links'];

    return (
        <div className='profile'>
            <div className='profile-information'>
                <h1>Alexander Carvalho</h1>
                <p>Software Engineer based in Toronto.</p>
                <p>Currently @ <a id='current-job' href='https://www.geotab.com/' target='blank'>Geotab.</a></p>
                <div className='profile-links'>
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