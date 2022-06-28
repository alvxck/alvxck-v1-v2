import React from "react";
import { motion } from "framer-motion";


function Article(props) {

    return(
        <motion.div
            id='article' 
            className='article-container'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw'}}
            transition={{ ease: 'easeInOut', duration: .4 }}  
        >
            <>{props.comp}</>
        </motion.div>
    )
}

export default Article;