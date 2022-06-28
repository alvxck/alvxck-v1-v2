import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavTab from './NavTab.js';
import About from './Articles/About.js';
import Contact from './Articles/Contact.js';
import Interests from './Articles/Interests.js';
import Projects from './Articles/Projects.js';
import Work from './Articles/Work.js';

function Menu() {
    const [article, setArticle] = useState()

    const navTabs = [
        {
            id: 0,
            value: 'About'
        },
        {
            id: 1,
            value: 'Work'
        },
        {
            id: 2,
            value: 'Contact'
        },
        {
            id: 3,
            value: 'Projects'
        },
        {
            id: 4,
            value: 'Interests'
        },
    ]

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
                <motion.div
                    id='navbar' 
                    className='menu-navbar-container'
                >
                    {navTabs.map((tab) => (
                        <NavTab
                            key={tab.id}
                            id={tab.id}
                            value={tab.value}
                            onClick={() => setArticle(tab.id)}
                        />
                    ))}
                </motion.div>

                <motion.div
                    id='article'
                    className='menu-article-container'
                >
                    {(article === 0) && <About />}
                    {(article === 1) && <Work />}
                    {(article === 2) && <Contact />}
                    {(article === 3) && <Projects />}
                    {(article === 4) && <Interests />}

                </motion.div>
            </div>
        </motion.div>
    )

}

export default Menu;