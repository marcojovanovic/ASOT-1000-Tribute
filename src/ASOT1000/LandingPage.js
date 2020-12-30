import React from 'react';
import { Link } from 'react-router-dom';
import zero from './images/1000.png';
import './landingPage.css';
import { motion } from 'framer-motion';
import { animationThree, transition } from './framerAnimations';

function LandingPage() {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
      transition={transition}
      className="landing"
    >
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="landing-center"
      >
        A State <span className="landing-span">of</span> Trance{' '}
        <span>
          <img className="landing-img" src={zero} alt="" />
        </span>
        Celebration
      </motion.h1>
      <Link to="/asot">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 7 }}
          className="button_base b07_3d_double_roll"
        >
          <div>Pogledaj App</div>
          <div>Pogledaj App</div>
          <div>Pogledaj App</div>
          <div>Pogledaj App</div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default LandingPage;
