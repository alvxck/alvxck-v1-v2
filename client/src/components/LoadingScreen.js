import React from 'react';
import {ReactComponent as SwipeSVG} from '../assets/swipe.svg';

function LoadingScreen(props) {
    return(
        <div className={props.loadState ? 'loading-container-await' : 'loading-container-loaded'}>
            <div className={props.loadState ? 'loading-header-await' : 'loading-header-loaded'}>
                <h1 translate='no'>Alexander Carvalho</h1>
            </div>

            {!props.loadState && (
                <div className='swipe-container'>
                    <div className='swipe-container-content'>
                        <SwipeSVG />
                        <p>Swipe to Navigate</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoadingScreen;