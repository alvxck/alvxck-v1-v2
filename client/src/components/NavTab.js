import React from 'react';

function NavTab(props) {
    
    return (
        <div 
            className={props.id === props.selected ? 'nav-link-selected' : 'nav-link'}
            onClick={props.onClick}
            >
            <h1 className='nav-text'>
                {props.value}
            </h1>
            {props.svg}
        </div>
    )
}

export default NavTab;