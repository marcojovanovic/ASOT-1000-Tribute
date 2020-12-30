import React from 'react'
import { animationTwo, transition } from './framerAnimations';
import { motion } from 'framer-motion';

import './main.css'
import Player from './Player';


function AsotApp() {
  return (
    <motion.div 
    initial="out"
    animate="end"
    exit="out"
    variants={animationTwo}
    transition={transition}  className='main'>

    <Player />


    </motion.div>
  )
}

export default AsotApp
