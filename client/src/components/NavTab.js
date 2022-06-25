import React from 'react';

function NavTab(props) {
    
    return (
        <div className='nav-link'>
            <h1 className='nav-text'>{props.value}</h1>
        </div>
    )
}

export default NavTab;