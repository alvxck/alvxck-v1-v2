import React, {useEffect, useState} from 'react';
import {ReactComponent as SwipeSVG} from '../assets/swipe.svg';


// Main header component
function Header(props) {
    const [showSwipe, setShowSwipe] = useState(true);

    // Remove swipe gesture from DOM after 5s
    useEffect(() => {
        if (props.loadState === false) {
            setTimeout(() => {
                setShowSwipe(false);
            }, 5000);
        }
    }, [props])

    return (
        <>
            <div className='header-container'>
                <h1 translate='no'>Alexander Carvalho</h1>
                <div className='header-menu' onClick={props.onClick}>
                    <svg 
                        className={props.menu ? 'header-svg-selected' : 'header-svg'}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        >
                        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
                    </svg>
                    <h1>Menu</h1>
                </div>
            </div>

            {showSwipe && (
                <div className='swipe-container'>
                    <div className='swipe-container-content'>
                        <SwipeSVG />
                        <p>Swipe to Navigate</p>
                    </div>
                </div>
            )}
        </>

    )
}

export default Header;