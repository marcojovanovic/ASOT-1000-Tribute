import React from 'react';
import { Link } from 'react-router-dom';
import asot1000 from './assets/asot1000/1000.png';
import './css/landingPage.css';
import './css/animations.css'
import './css/landingPageUtilitiy.css'
import { motion } from 'framer-motion';
import { BackgroundImage } from 'react-image-and-background-image-fade';

function LandingPage() {
  return (
    <BackgroundImage
      className="landing__page"
      src='/assets/landingPageImg/landingPageImg.jpg'
      height='100vh'
    >
      <motion.h1 className="landing__page--center"
      
      initial={{ rotate:'180deg', transitionDelay:2 }}
      animate={{ rotate:'-720deg', transitionDelay:2 }}
      transition={{ duration: 0.5 }}
      >
        A State <span className="landing__page--span">of</span> Trance
        <span>
          <img className="landing__page--img" src={asot1000} alt="" />
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
          <a className="landing__page--btn" href="#">
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
