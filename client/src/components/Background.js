import React from 'react';
import wallpaper from '../assets/alvx-wallpaper.png';

function Background() {

    return (
        <img 
        className='background-wallpaper'
        src={wallpaper} 
        alt='wallpaper'
        />
    )
}

export default Background;