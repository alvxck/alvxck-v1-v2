import './App.css';
import React, { useState } from 'react';
import articles from './data/article-data';
import LoadingScreen from './components/LoadingScreen';
import wallpaper from './assets/alvx.jpg';
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

	// Disable scrolling if <Menu /> is open
	document.body.style.overflow = showMenu ? 'hidden' : 'overlay';


	const documentHeight = () => {
		const doc = document.documentElement
		doc.style.setProperty('--view-height', `${window.innerHeight}px`)
	}

	window.addEventListener('resize', documentHeight);
	documentHeight();

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
							key={article.id}
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