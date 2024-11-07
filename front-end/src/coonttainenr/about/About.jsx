// src/coonttainenr/about/About.jsx
import React, { useEffect, useState } from 'react';
import './about.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrapp } from '../../wrapper';
import { useTheme } from '../../ThemeContext';
import { urlFor, client } from '../../client';

function About() {
  const { isDarkMode } = useTheme();
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then(data => {
        setAbouts(data);
      });
  }, []);

  return (
    <div className={`app__about ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className='head-text'>
        <span className='oth'>Great User Experience</span>
        <span> means </span>
        <span className='oth'>Increased Engagement</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrapp(About, 'app__about'),
  'about',
  "app__whitebg"
);