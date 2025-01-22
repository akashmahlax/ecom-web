import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 to-blue-900 p-8 text-white">
      
      {/* 3D Spinning Globe */}
      <div className="flex-1">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
          <Sphere args={[1.5, 64, 64]}>
            <meshStandardMaterial color="aqua" wireframe />
          </Sphere>
        </Canvas>
      </div>

      {/* Contact Form */}
      <motion.div
        className="flex-1 p-8 bg-white bg-opacity-10 rounded-lg shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 bg-gray-800 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 bg-gray-800 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-lg mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 bg-gray-800 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;