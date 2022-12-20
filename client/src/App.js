import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

	// Update inner height variable in CSS on screen resize and set scroll button visibility
	useEffect(() => {
		window.addEventListener('resize', getWindowHeight);
		getWindowHeight();


		return () => {
			window.removeEventListener('resize', getWindowHeight);
		}
	}, [])

	// Get inner height of screen excluding safe areas on mobile
	function getWindowHeight() {
		const DOC = document.documentElement;
		DOC.style.setProperty('--view-height', `${window.innerHeight}px`);
	};


	return (
		<div className='main'>

		</div>

	)
}

export default App;