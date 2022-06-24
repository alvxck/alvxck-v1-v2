import React from 'react';

function Header(props) {

    function openMenu() {

    }

    return (
        <div className='header-container'>
            <h1 className='header-button' onClick={openMenu}>Alexander Carvalho</h1>
        </div>
    )
}

export default Header;