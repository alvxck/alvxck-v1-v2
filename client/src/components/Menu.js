import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import articles from '../data/article-data.js';
import NavTab from './NavTab.js';
import About from './About.js';
import Contact from './Contact.js';
import Work from './Work.js';
import Interests from './Interests.js';
import Projects from './Projects.js';

function Menu(props) {

    return (
        <motion.div 
            id='menu' 
            className='menu-backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: .4 }}  
        >
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

                <motion.div
                    id='article'
                    className='menu-article-container'
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100vw'}}
                    transition={{ ease: 'easeInOut', duration: .4 }} 
                >
                    <AnimatePresence>
                        {(props.selected === 0) && <About key='about'/>}
                        {(props.selected === 1) && <Contact key='contact'/>}
                        {(props.selected === 2) && <Work key='work'/>}
                        {(props.selected === 3) && <Projects key='projects'/>}
                        {(props.selected === 4) && <Interests key='interests'/>}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    )

}

export default Menu;