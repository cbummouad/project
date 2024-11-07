import React from 'react';
import { FaGithub, FaInstagram, FaFacebookF,FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/cbummouad" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/mouad.harit.5" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/mouad.harit.5" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
    <div>
      <a href="https://wa.me/+212679669221" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  </div>
);

export default SocialMedia;