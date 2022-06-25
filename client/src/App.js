import './App.css';
import React, { useState } from 'react'
import Background from './components/Background';
import Header from './components/Header';
import Menu from './components/Menu';

function App(props) {
	const [show, setShow] = useState(false)


    function toggleMenu() {
        setShow((prevShow) => !prevShow)
    }

	return (
		<div className='backdrop'>
			<Background />
			<Header 
				onClick={toggleMenu}
			/>

			{show && <Menu />}
		</div>
	)
}

export default App;
