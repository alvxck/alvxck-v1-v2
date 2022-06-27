import React from 'react';
import wallpaper from '../assets/alvx-wallpaper.png';

function Home() {
    return (
        <div className='home-container'>
            <img 
                className='home-wallpaper'
                src={wallpaper} 
                alt='wallpaper'
            />
            {/* import beacon box */}

        </div>
    )
}

export default Home;