import './App.css';
import React, { useState, useEffect } from 'react';
import articles from './data/article-data';
import wallpaper from './assets/alvx-wallpaper.jpg';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Beacon from './components/Beacon';
import Menu from './components/Menu';

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const [article, setArticle] = useState(0);
	const [loading, setLoading] = useState(true);
	const [scrollPosition, setScrollPosition] = useState('left');


	// Update inner height variable in CSS on screen resize and set scroll button visibility
	useEffect(() => {
		window.addEventListener('resize', getWindowHeight);
		getWindowHeight();

		window.addEventListener('scroll', scrollVisibility);
		scrollVisibility();

		return () => {
			window.removeEventListener('resize', getWindowHeight);
			window.removeEventListener('scroll', scrollVisibility);
		}
	}, [])

	// Get inner height of screen excluding safe areas on mobile
	function getWindowHeight() {
		const DOC = document.documentElement;
		DOC.style.setProperty('--view-height', `${window.innerHeight}px`);
	};

	// Set scroll button visibility based on window location
	function scrollVisibility() {
		const WALLPAPER = document.getElementById('wallpaperr').getBoundingClientRect();

		if (Math.round(WALLPAPER.left) === 0) {
			setScrollPosition('left');
		}

		else if (Math.round(WALLPAPER.right) === window.innerWidth) {
			setScrollPosition('right');
		}

		else {
			setScrollPosition('center');
		}
	}

	// Disable scrolling if <Menu /> is open
	document.body.style.overflow = showMenu ? 'hidden' : 'overlay';

    function toggleMenu() {
        setShowMenu((prev) => !prev);
    }

	function scrollWindow(direction) {
		if (direction === 'left') {
			window.scrollBy({
				left: -document.getElementById('wallpaperr').offsetWidth,
				behavior: 'smooth'
			});
		}

		if (direction === 'right') {
			window.scrollBy({
				left: document.getElementById('wallpaperr').offsetWidth,
				behavior: 'smooth'
			});	
		}
	}

	return (
		<div className='backdrop'>
			<LoadingScreen loadState={loading}/>

			<img 
				className='wallpaper'
				id='wallpaperr'
				src={wallpaper} 
				alt='wallpaper'
				onLoad={() => setLoading(false)}
			/>

			{!showMenu && (
				<>
					<div className='scroll-button-container'>
						{(scrollPosition === 'right' || scrollPosition === 'center') && (
							<svg 							
								class="scroll-left"
								onClick={() => scrollWindow('left')} 
								xmlns="http://www.w3.org/2000/svg" 
								viewBox="0 0 1024 1024">
								<path d="M779.7 83.1l0.7 0.7v-0.4L728 31.1 261.1 498l466 466 51.9-51.8L364.8 498z"  />
							</svg>
						)}

						{(scrollPosition === 'left' || scrollPosition === 'center') && (
							<svg 							
								class="scroll-right"
								onClick={() => scrollWindow('right')} 
								xmlns="http://www.w3.org/2000/svg" 
								viewBox="0 0 1024 1024">
								<path d="M779.7 83.1l0.7 0.7v-0.4L728 31.1 261.1 498l466 466 51.9-51.8L364.8 498z"  />
							</svg>
						)}
					</div>

					<div className='beacon-container'>
						{articles.map((article) => (
							<Beacon
								key={article.key}
								value={article.value}
								top={article.beacon.top}
								left={article.beacon.left}
								onClick={() => {setArticle(article.id); toggleMenu();}}
								svg={article.svg}
							/>
						))}
					</div>
				</>
			)}

			<div className='home'>
				<Header onClick={toggleMenu} menu={showMenu} loading={loading}/>
				<Menu open={showMenu} selected={article} setArticle={(id) => setArticle(id)}/>
        	</div>
		</div>
	)
}

export default App;