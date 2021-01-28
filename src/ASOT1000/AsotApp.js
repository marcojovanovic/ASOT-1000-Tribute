import React from 'react';
import { animationTwo, transition } from './framerAnimations';
import { motion } from 'framer-motion';

import './main.css';
import Player from './Player';
import InputRange from './InputRange';
import DisplaySong from './DisplaySong';

function AsotApp() {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationTwo}
      transition={transition}
      className="main"
    >

      
      <div className="container">
        <DisplaySong />
        <InputRange />
        <Player />
      </div>
    </motion.div>
  );
}

export default AsotApp;
