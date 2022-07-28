import './App.css';
import React, { useState } from 'react';
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

    function toggleMenu() {
        setShowMenu((prev) => !prev);
    }

	function scrollLeft() {
		document.getElementById('wallpaperr').scrollLeft += 20;
	}

	function scrollRight() {
		document.getElementById('wallpaperr').scrollLeft += -20;
	}

	// Disable scrolling if <Menu /> is open
	document.body.style.overflow = showMenu ? 'hidden' : 'overlay';


	const documentHeight = () => {
		const doc = document.documentElement
		doc.style.setProperty('--menu-height', `${window.innerHeight}px`)
	}

	window.addEventListener('resize', documentHeight);
	documentHeight();

	return (
		<div className='backdrop'>
			{/* <img 
				className='wallpaper'
				id='wallpaperr'
				src={wallpaper} 
				alt='wallpaper'
				onLoad={() => setLoading(false)}
			/> */}

			{/* <LoadingScreen loadState={loading}/> */}

			{/* <div className='scroll-button-container'>
				<svg 
					className='scroll-left' 
					onClick={scrollLeft}
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 256 512"
				>
					<path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
				</svg>
				<svg 
					className='scroll-right' 
					onClick={scrollRight}
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 256 512"
				>
					<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
				</svg>
			</div> */}

			{/* <div className='beacon-container'>
				{!showMenu && articles.map((article) => (
					<Beacon
						key={article.id}
						value={article.value}
						top={article.beacon.top}
						left={article.beacon.left}
						onClick={() => {setArticle(article.id); toggleMenu();}}
						svg={article.svg}
					/>
				))}
			</div> */}

			<div className='home'>
				<Header onClick={toggleMenu} menu={showMenu}/>
				<Menu open={showMenu} selected={article} setArticle={(id) => setArticle(id)}/>
        	</div>
		</div>
	)
}

export default App;