import React from 'react';
import Navbar from '../components/navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import AboutUs from '../pages/AboutUs';
import EventsCalendar from '../pages/EventsCalendar';
import ContactUs from '../pages/ContactUs';
import AcademicPrograms from './AcademicPrograms';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Navbar */}
      <Navbar />
      

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Animation Background */}
        <Canvas className="absolute inset-0 z-0">
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <Stars radius={100} depth={50} count={7000} factor={5} fade />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-teal-300 to-purple-500 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Future Leaders
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl max-w-lg mx-auto text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            At DAV School, we provide a transformative education that shapes students' minds, builds character, and prepares them for future success.
          </motion.p>
          <motion.button
            className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Explore Our Programs
          </motion.button>
        </div>
      </section>

      {/* About Us Section */}
      {/* <section className="py-16 bg-indigo-400 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About DAV School
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-green-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Our mission is to nurture intellectual growth, creativity, and core values in our students, empowering them to achieve their fullest potential.
        </motion.p>
        <AboutUs />
      </section> */}
       <AboutUs />

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-purple-900 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Academic Programs
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {['Science', 'Mathematics', 'Arts', 'Sports', 'Technology'].map((program) => (
            <motion.div
              key={program}
              className="w-72 p-6 bg-white bg-opacity-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <h3 className="text-2xl font-semibold text-teal-300">{program}</h3>
              <p className="text-gray-300 mt-2">Join our {program} program to discover your potential and unlock new opportunities.</p>
            </motion.div>
          ))}
        </div>
      </section>
      <AcademicPrograms/>

      {/* Events Section */}
      <section className="py-16 bg-gray-900 text-center">
        <EventsCalendar />
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gradient-to-r from-teal-800 to-blue-800 text-center">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;