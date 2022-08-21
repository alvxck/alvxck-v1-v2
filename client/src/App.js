import './App.css';
import React, { useState, useEffect } from 'react';
import articles from './data/article-data';
import LoadingScreen from './components/LoadingScreen';
import wallpaper from './assets/alvx-wallpaper.jpg';
import Header from './components/Header';
import Beacon from './components/Beacon';
import Menu from './components/Menu';

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const [article, setArticle] = useState(0);
	const [loading, setLoading] = useState(true);


	// Get inner height of screen excluding safe areas on mobile
	const documentHeight = () => {
		const doc = document.documentElement
		doc.style.setProperty('--view-height', `${window.innerHeight}px`)
	}

	documentHeight();

	// Update inner height variable in CSS on screen resize
	useEffect(() => {
		window.addEventListener('resize', documentHeight);

		return () => {
			window.removeEventListener('resize', documentHeight)
		}
	}, [])

	// Disable scrolling if <Menu /> is open
	document.body.style.overflow = showMenu ? 'hidden' : 'overlay';

    function toggleMenu() {
        setShowMenu((prev) => !prev);
    }

	function scrollLeft() {
		window.scrollBy({
			left: -window.innerWidth,
			behavior: 'smooth'
		});
	}

	function scrollRight() {
		window.scrollBy({
			left: window.innerWidth,
			behavior: 'smooth'
		});	
	}

	return (
		<div className='backdrop'>
			<img 
				className='wallpaper'
				id='wallpaperr'
				src={wallpaper} 
				alt='wallpaper'
				onLoad={() => setLoading(false)}
			/>

			<LoadingScreen loadState={loading}/>

				{!showMenu && (
					<div className='scroll-button-container'>
						<svg 
							class="scroll-left"
							onClick={scrollLeft} 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 197.402 197.402"
						>
							<polygon points="146.883,197.402 45.255,98.698 146.883,0 152.148,5.418 56.109,98.698 152.148,191.98"/>
						</svg>

						<svg 
							class="scroll-right"
							onClick={scrollRight} 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 197.402 197.402"
						>
							<polygon points="146.883,197.402 45.255,98.698 146.883,0 152.148,5.418 56.109,98.698 152.148,191.98"/>
						</svg>
					</div>
				)}

			{!showMenu && (
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
			)}

			<div className='home'>
				<Header onClick={toggleMenu} menu={showMenu}/>
				<Menu open={showMenu} selected={article} setArticle={(id) => setArticle(id)}/>
        	</div>
		</div>
	)
}

export default App;