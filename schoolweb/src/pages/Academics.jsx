// Academics.js
import React from 'react';
import { motion } from 'framer-motion';

const Academics = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 to-purple-200 text-center">
      <motion.h2
        className="text-4xl font-bold text-gradient from-blue-600 to-green-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Academics
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {['Primary Education', 'Secondary Education', 'Higher Secondary', 'Extracurriculars'].map((program, index) => (
          <motion.div
            key={program}
            className="w-64 p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600">{program}</h3>
            <p className="text-gray-600 mt-2">Explore our {program} programs designed to help students excel.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Academics;