import React from "react";
import MediaLink from './MediaLink.js';
import Tab from './Tab.js';

function Profile() {

    return (
        <div className='profile'>
            <div className='profile-information'>
                <h1>Alexander Carvalho</h1>
                <p>Software Engineer based in Toronto.</p>
                <p>Currently @ Ansys.</p>
            </div>

            <div className='profile-links'>
                <MediaLink />
                <MediaLink />
                <MediaLink />
            </div>

            <div className='profile-tabs'>
                <Tab key={'About'}/>
                <Tab key={'Experience'}/>
                <Tab key={'Projects'}/>
            </div>
        </div>
    )
}

export default Profile;