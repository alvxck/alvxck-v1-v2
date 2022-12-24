import './App.css';
import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import Profile from './components/Profile';

function App() {
	const [tab, setTab] = useState('About');

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
			<div className='divisor'/>
			<div className='personal-link'>
				<p>Personal Webpage</p>
			</div>
			<div className='home'>
				<Profile selected={tab} setTab={(id) => setTab(id)}/>
				<Content selected={tab}/>
			</div>
		</div>
	)
}

export default App;