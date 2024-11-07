// src/coonttainenr/header/Header.jsx
import React from 'react'
import { images } from '../../coonstants';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper'
import { useTheme } from '../../ThemeContext';
import './header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`app__header app__flex ${isDarkMode ? 'dark-mode' : ''}`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'>
        <div className='app_header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello I am</p>
              <h1 className='head-text'>Mouad</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full stack Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'>
        <img src={images.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay_cercle'
          src={images.circle}
          alt='profile_cercle'
        />
      </motion.div>

      <motion.div 
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-cercles'>
        {[images.react, images.laravel, images.python].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');