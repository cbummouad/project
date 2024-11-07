// src/App.js
import React from 'react';
import { About, Footer, Skills, Work, Header, Tetimonio, Product } from './coonttainenr';
import { Navbar } from './components';
import { ThemeProvider } from './ThemeContext';
import './App.scss';

function App() {
  return (
    <ThemeProvider>
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Tetimonio />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;