import React from 'react';
import { motion } from 'framer-motion';

const FacultyCard = ({ name, position, bio, image }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
      initial={{ rotateY: 0 }}
      whileHover={{ rotateY: 180 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Front of Card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <img src={image} alt={name} className="rounded-full w-24 h-24 object-cover mb-4" />
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
      
      {/* Back of Card */}
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-800 text-white rounded-lg">
        <p className="text-center">{bio}</p>
      </div>
    </motion.div>
  );
};

export default FacultyCard;