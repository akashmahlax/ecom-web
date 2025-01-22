// Admissions.js
import React from 'react';
import { motion } from 'framer-motion';

const Admissions = () => {
  return (
    <section className="py-16 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold text-gradient from-pink-500 to-red-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Admissions
      </motion.h2>
      <motion.p
        className="text-lg max-w-2xl mx-auto text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover how to join our vibrant learning community. Learn about our admissions process, criteria, and how to apply.
      </motion.p>
      <div className="mt-8">
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Apply Now
        </motion.button>
      </div>
    </section>
  );
};

export default Admissions;