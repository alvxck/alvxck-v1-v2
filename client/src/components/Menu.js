import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavTab from './NavTab.js';
import Article from './Article.js';


function Menu() {
    const [article, setArticle] = useState()

    const navTabs = [
        {
            id: 0,
            value: 'About'
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
                    {(article === 0) && <Article />}
                    {(article === 1) && <Article />}
                    {(article === 2) && <Article />}
                    {(article === 3) && <Article />}
                    {(article === 4) && <Article />}

                </motion.div>
            </div>
        </motion.div>
    )

}

export default Menu;