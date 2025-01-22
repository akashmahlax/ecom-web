// src/pages/EventsCalendar.jsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaTheaterMasks, FaFlask } from 'react-icons/fa';

const Football = () => (
  <group position={[0, 1, 0]}>
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#353535" roughness={0.3} metalness={0.8} />
    </mesh>
    <mesh position={[0, 0.7, 0]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color="white" />
    </mesh>
    <Html position={[0, -1.5, 0]}>
      <motion.div
        className="text-center text-white bg-opacity-70 bg-black px-2 py-1 rounded"
        animate={{ y: [0, -0.1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        Football Game
      </motion.div>
    </Html>
  </group>
);

const Cricket = () => (
  <group position={[3, 1, 0]}>
    <mesh position={[0, 1.5, 0]}>
      <cylinderGeometry args={[0.05, 0.05, 1, 32]} />
      <meshStandardMaterial color="#8B4513" roughness={0.8} />
    </mesh>
    <mesh position={[0.5, 1, 0]}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial color="red" roughness={0.5} metalness={0.3} />
    </mesh>
    <Html position={[0, -1.5, 0]}>
      <motion.div
        className="text-center text-white bg-opacity-70 bg-black px-2 py-1 rounded"
        animate={{ y: [0, -0.1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        Cricket Match
      </motion.div>
    </Html>
  </group>
);

const OtherEventIcon = ({ icon, description, position }) => (
  <group position={position}>
    <Html center>
      <motion.div
        className="flex flex-col items-center bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-lg"
        style={{ minWidth: '120px', minHeight: '150px' }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-4xl text-yellow-400">{icon}</div>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
      </motion.div>
    </Html>
  </group>
);

const Calendar3D = () => {
  const eventsData = [
    { position: [-3, 0, 0], icon: <FaTheaterMasks />, description: 'Drama Festival' },
    { position: [-1, 0, 0], icon: <FaFlask />, description: 'Science Fair' },
  ];

  return (
    <group>
      <Football />
      <Cricket />
      {eventsData.map((event, index) => (
        <OtherEventIcon key={index} position={event.position} icon={event.icon} description={event.description} />
      ))}
    </group>
  );
};

const EventsCalendar = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-indigo-500 to-purple-600">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Calendar3D />
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center p-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          School Events & Calendar
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white mt-4 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore our exciting school events in 3D!
        </motion.p>
      </div>
    </div>
  );
};

export default EventsCalendar;