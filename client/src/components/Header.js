import React from 'react';

function Header(props) {

    return (
        <div className='header-container'>
            <h1 className='header-button' onClick={props.onClick}>Alexander Carvalho</h1>
        </div>
    )
}

export default Header;