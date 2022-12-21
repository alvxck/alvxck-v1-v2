import React from "react";
import MediaLink from './MediaLink.js';
import Tab from './Tab.js';
import data from './data.js';

function Profile() {
    const dataLinks = data[0]['links'];

    return (
        <div className='profile'>
            <div className='profile-information'>
                <h1>Alexander Carvalho</h1>
                <p>Software Engineer based in Toronto.</p>
                <p>Currently @ Ansys.</p>
            </div>

            <div className='profile-links'>
                {dataLinks.map((media) => (
                    <MediaLink
                        key={media.key}
                        svg={media.svg}
                        link={media.link}
                    />
                ))}
            </div>

            <div className='profile-tabs'>
                {data.map((tab) => (
                    <Tab
                        key={tab.key}
                        value={tab.value}
                    />
                ))}
            </div>
        </div>
    )
}

export default Profile;