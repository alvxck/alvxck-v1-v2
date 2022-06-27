import React from "react";
import { motion } from "framer-motion";


function Article() {

    return(
        <motion.div
            id='article' 
            className='article-container'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%'}}
            transition={{ ease: 'easeInOut', duration: 0.4 }}  
        >

        </motion.div>
    )
}

export default Article;