// src/components/ScrollHandler.jsx

import React, { useState, useEffect } from 'react';
import NavigationDots from './NavigationDots';

const ScrollHandler = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'skills', 'testimonial', 'contact'];
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition + 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <NavigationDots active={activeSection} />;
};

export default ScrollHandler;