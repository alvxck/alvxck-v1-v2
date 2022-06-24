import React from 'react'
import wallpaper from '../assets/alvx-wallpaper.png';

function Background() {

    return (
        <img 
        src={wallpaper} 
        alt='wallpaper'
        className='wallpaper'
        />
    )
}

export default Background;