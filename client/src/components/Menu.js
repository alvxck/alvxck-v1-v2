import React from 'react';
import { motion } from 'framer-motion';
import NavTab from './NavTab.js';
import About from './Articles/About.js';
import Contact from './Articles/Contact.js';
import Interests from './Articles/Interests.js';
import Projects from './Articles/Projects.js';
import Resume from './Articles/Resume.js';

function Menu(props) {

    const navTabs = [
        {
            id: 0,
            value: 'About',
        },
        {
            id: 1,
            value: 'Resume'
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
                <div
                    id='navbar' 
                    className='menu-navbar-container'
                >
                    {navTabs.map((tab) => (
                        <NavTab
                            key={tab.id}
                            id={tab.id}
                            value={tab.value}
                            onClick={() => props.setArticle(tab.id)}
                        />
                    ))}
                </div>

                <div
                    id='article'
                    className='menu-article-container'
                >
                    {(props.selected === 0) && <About />}
                    {(props.selected === 1) && <Resume />}
                    {(props.selected === 2) && <Contact />}
                    {(props.selected === 3) && <Projects />}
                    {(props.selected === 4) && <Interests />}

                </div>
            </div>
        </motion.div>
    )

}

export default Menu;