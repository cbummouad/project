// src/wrapper/AppWrap.js

import React from 'react';
import { SocialMedia } from '../components';
import ScrollHandler from '../components/ScrollHandler';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2023 MOUAD</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <ScrollHandler />
    </div>
  );
};

export default AppWrap;