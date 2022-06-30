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
	const [article, setArticle] = useState();

    function toggleMenu() {
        setShow((prevShow) => !prevShow);
    }

	// Disable scrolling if <Menu /> is open
	document.body.style.overflow = show ? 'hidden' : 'overlay';

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
					<Beacon />
				</div>

				<AnimatePresence>
					{show && <Menu selected={article}/>}
				</AnimatePresence>
        	</div>
		</div>
	)
}

export default App;
