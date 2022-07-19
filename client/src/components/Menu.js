import React from 'react';
import articles from '../data/article-data.js';
import NavTab from './NavTab.js';
import About from './About.js';
import Contact from './Contact.js';
import Work from './Work.js';
import Interests from './Interests.js';
import Projects from './Projects.js';

function Menu(props) {

    return (
        <div id='menu' className='menu-backdrop'>
            <div className='menu-container'>
                <div
                    id='navbar' 
                    className='menu-navbar-container'
                >
                    {articles.map((tab) => (
                        <NavTab
                            key={tab.id}
                            id={tab.id}
                            value={tab.value}
                            svg={tab.svg}
                            onClick={() => props.setArticle(tab.id)}
                            selected={props.selected}
                        />
                    ))}
                </div>

                <div id='article' className='menu-article-container'>
                        {(props.selected === 0) && <About key='about'/>}
                        {(props.selected === 1) && <Contact key='contact'/>}
                        {(props.selected === 2) && <Work key='work'/>}
                        {(props.selected === 3) && <Projects key='projects'/>}
                        {(props.selected === 4) && <Interests key='interests'/>}
                </div>
            </div>
        </div>
    )

}

export default Menu;