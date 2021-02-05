import React from 'react';
import { Link } from 'react-router-dom';
import zero from './images/1000.png';
import './css/landingPage.css';
import { motion } from 'framer-motion';
import { BackgroundImage } from 'react-image-and-background-image-fade';

function LandingPage() {
  return (
    <BackgroundImage
      className="landing"
      src='/accets/alter2.jpg'
      height='100vh'
    >
      <motion.h1 className="landing-center"
      
      initial={{ rotate:'180deg', transitionDelay:2 }}
      animate={{ rotate:'-720deg', transitionDelay:2 }}
      transition={{ duration: 0.5 }}
      >
        A State <span className="landing-span">of</span> Trance
        <span>
          <img className="landing-img" src={zero} alt="" />
        </span>
        Celebration
      </motion.h1>
      <Link to="/asot">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 6 }}
          className="button_base b07_3d_double_roll"
        >
          <a className="btn" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enter ASOT
          </a>
        </motion.div>
      </Link>
    </BackgroundImage>
  );
}

export default LandingPage;
