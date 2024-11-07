// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../coonstants';
import { useTheme } from '../../ThemeContext';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`app__navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="app__navbar-menu-container"
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;