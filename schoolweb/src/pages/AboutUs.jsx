import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import AcademicPrograms from './AcademicPrograms';

const AboutUs = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Three.js Canvas */}
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={6000} factor={4} fade />
          {/* 3D Rotating Globe */}
          <Sphere args={[2, 64, 64]} position={[0, 0, -5]}>
            <meshStandardMaterial color="#ffffff" wireframe />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>
      <div className="relative z-10 text-center p-8 max-w-2xl mx-auto">
        <motion.h2
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About DAV School
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          DAV School is committed to fostering intellectual growth and building a foundation of values. Our mission is to prepare students for a dynamic world with critical thinking skills, creativity, and global awareness.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {['Global Education', 'Leadership', 'Innovation'].map((value, index) => (
            <motion.div
              key={value}
              className="w-52 p-4 bg-opacity-10 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              <h3 className="text-xl font-semibold text-yellow-300">{value}</h3>
              <p className="text-gray-300 mt-2">Explore our commitment to {value}.</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AcademicPrograms/>
    </section>
  );
};

export default AboutUs;