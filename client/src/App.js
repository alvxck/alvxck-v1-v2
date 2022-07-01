import './App.css';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import wallpaper from './assets/alvx-wallpaper.png';
import Header from './components/Header';
import Beacon from './components/Beacon';
import Menu from './components/Menu';

function App() {
	const [show, setShow] = useState(false);
	const [article, setArticle] = useState(0);

    function toggleMenu() {
        setShow((prevShow) => !prevShow);
    }

	// Disable scrolling if <Menu /> is open
	document.body.style.overflow = show ? 'hidden' : 'overlay';


	const beacons = [
		{
			id: 0,
			value: 'about',
			top: '50%',
			left: '20%',
		},
		{
			id: 1,
			value: 'resume',
			top: '50%',
			left: '40%',
		},
		{
			id: 2,
			value: 'contact',
			top: '50%',
			left: '60%',
		},
		{
			id: 3,
			value: 'projects',
			top: '50%',
			left: '80%',
		},
		{
			id: 4,
			value: 'interests',
			top: '50%',
			left: '110%',
		},
	]

	return (
		<div className='backdrop'>
			<LoadingScreen />
			<div className='home'>
				<img 
					className='wallpaper'
					src={wallpaper} 
					alt='wallpaper'
				/>
				
				<Header onClick={toggleMenu}/>

				<div className='beacon-container'>
					{beacons.map((beacon) => (
						<Beacon
							key={beacon.id}
							value={beacon.value}
							top={beacon.top}
							left={beacon.left}
							onClick={() => {setArticle(beacon.id); toggleMenu();}}
						/>
					))}
				</div>

				<AnimatePresence>
					{show && <Menu selected={article} setArticle={(id) => setArticle(id)}/>}
				</AnimatePresence>
        	</div>
		</div>
	)
}

export default App;
