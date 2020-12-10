import React from 'react';
import useFirestore from '../../../hooks/useFirestore';
import { motion } from 'framer-motion';
import classes from './imageGrid.module.css';


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className={classes.ImgGrid}>
            
            {docs && docs.map(doc => (
                <motion.div className={classes.ImgWrap} key={doc.id} 
                layout
                whileHover={{opacity:1}}
                onClick={() => setSelectedImg(doc.url)}>
                    <motion.img src={doc.url}  alt="uploaded pic" 
                     initial={{ opacity: 0}} 
                     animate={{opacity: 1}}
                     transition={{delay: 1}} />
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid;
