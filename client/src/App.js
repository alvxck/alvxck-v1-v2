import './App.css';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import articles from './assets/article-data';
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

	function scrollLeft() {
		document.getElementById('wallpaper').scrollLeft += 20;
	}

	function scrollRight() {

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
				
				<Header onClick={toggleMenu} menu={show}/>

				<div className='scroll-button-container'>
					<svg 
						className='scroll-left' 
						onClick={scrollLeft}
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 512 512"
					>
						<path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/>
					</svg>
					<svg 
						className='scroll-right' 
						onClick={scrollRight}
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 512 512"
					>
						<path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/>
					</svg>
				</div>

				<div className='beacon-container'>
					{!show && articles.map((article) => (
						<Beacon
							key={article.id}
							value={article.value}
							top={article.beacon.top}
							left={article.beacon.left}
							onClick={() => {setArticle(article.id); toggleMenu();}}
						/>
					))}
				</div>

				<AnimatePresence>
					{ show && <Menu selected={article} setArticle={(id) => setArticle(id)}/>}
				</AnimatePresence>
        	</div>
		</div>
	)
}

export default App;
