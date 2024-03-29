import './App.css';
import { useState, useEffect } from 'react';
import { Content } from './components/Content';
import { Profile } from './components/Profile';

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
			<div className='home'>
				<Profile selected={tab} setTab={(id : string) => setTab(id)}/>
				<Content selected={tab}/>
			</div>
			<div className='footer'>
                <p>ALVX © </p>
				<p id='year'>2023</p>
            </div>
		</div>
	)
}

export default App;