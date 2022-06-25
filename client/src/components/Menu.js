import React from 'react';
import NavTab from './NavTab.js';


function Menu() {

    return (
        <div className='menu-container'>
            <div className='menu-navbar'>
                <NavTab
                    // svg={} 
                    value='About'
                />
                <NavTab 
                    // svg={} 
                    value='Resume'
                />
                <NavTab 
                    // svg={}
                    value='Contact'
                />
                <NavTab 
                    // svg={}
                    value='Projects'
                />
                <NavTab 
                    // svg={}
                    value='Interests'
                />
            </div>
            <div>

            </div>
        </div>
    )

}

export default Menu;