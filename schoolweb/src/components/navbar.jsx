import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-900 to-purple-900 p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center text-white">
        
        {/* 3D Rotating Cube Logo */}
        <div className="relative w-12 h-12">
          <Canvas>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            <Box args={[1, 1, 1]}>
              <meshStandardMaterial color="orange" />
            </Box>
          </Canvas>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {['Home', 'About', 'Academics', 'Admissions', 'Events', 'Contact'].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-lg font-semibold hover:text-yellow-400"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;