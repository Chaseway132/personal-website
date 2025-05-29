import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  console.log("Home page loaded");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hello, I'm Peter
        </motion.h1>
        <motion.p
          className="text-xl text-white/90 mb-6 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Welcome to my personal portfolio website where I showcase my projects, achievements, and skills.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 text-center"
            style={{ minWidth: 150 }}
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300 text-center"
            style={{ minWidth: 150 }}
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 