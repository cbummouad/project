import React from 'react';
import { motion } from 'framer-motion';

const MotionWrapp = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${classNames}`}>
        <Component />
      </div>
    </motion.div>
  );
}

export default MotionWrapp;