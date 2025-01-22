// StudentLife.js
import React from 'react';
import { motion } from 'framer-motion';

const StudentLife = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-100 to-blue-200 text-center">
      <motion.h2
        className="text-4xl font-bold text-gradient from-green-500 to-blue-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Student Life
      </motion.h2>
      <motion.p
        className="text-lg max-w-2xl mx-auto text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Student life at DAV School is vibrant and enriching, with numerous clubs, events, and extracurricular activities designed to nurture students' talents.
      </motion.p>
    </section>
  );
};

export default StudentLife;
