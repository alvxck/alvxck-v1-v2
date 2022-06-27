import './App.css';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
	const [show, setShow] = useState(false);

    function toggleMenu() {
        setShow((prevShow) => !prevShow);
    }

	// Disable scrolling if <Menu /> is open
	document.body.style.overflow = show ? 'hidden' : 'overlay';

	return (
		<div className='backdrop'>
			<LoadingScreen />

			<Header 
				onClick={toggleMenu}
			/>
			
			<Home />

			<AnimatePresence>
				{show && <Menu />}
			</AnimatePresence>
		</div>
	)
}

export default App;
