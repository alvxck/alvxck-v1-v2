import React from 'react';
import articles from '../data/article-data.js';
import NavTab from './NavTab.js';
import About from './About.js';
import Contact from './Contact.js';
import Work from './Work.js';
import Skills from './Skills.js';
import Projects from './Projects.js';

function Menu(props) {

    return (
        <div id='menu' className={props.open ? 'menu-backdrop-open' : 'menu-backdrop-closed'}>
            <div className='menu-container'>
                <div
                    id='navbar' 
                    className={props.open ? 'menu-navbar-open' : 'menu-navbar-closed'}
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

                <div id='article' className={props.open ? 'menu-article-open' : 'menu-article-closed'}>
                        <About key='about' selected={props.selected === 0}/>
                        <Skills key='interests' selected={props.selected === 1}/>
                        <Work key='work' selected={props.selected === 2}/>
                        <Projects key='projects' selected={props.selected === 3}/>
                        <Contact key='contact' selected={props.selected === 4}/>
                </div>
            </div>
        </div>
    )

}

export default Menu;