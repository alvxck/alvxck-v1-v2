import './App.css';
import React, { useEffect } from 'react';
import Content from './components/Content';
import Profile from './components/Profile';

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
			<div className='divisor'></div>
			<div className='home'>
				<Profile />
				<Content />
			</div>
		</div>
	)
}

export default App;