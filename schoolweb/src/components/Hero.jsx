import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      
      {/* Three.js Canvas for 3D Animation */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.8} fade />
        
        {/* Animated 3D Globe */}
        <Sphere args={[1.5, 64, 64]} position={[0, 0, -5]}>
          <meshStandardMaterial color="#ffffff" wireframe />
        </Sphere>
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Inspiring Tomorrow's Leaders
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl max-w-2xl mx-auto text-white mt-4 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Dalla school is committed to nurturing students with the knowledge, skills, and values they need to succeed.
        </motion.p>

        <motion.button
          className="px-8 py-3 
          bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Discover Our Programs
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;