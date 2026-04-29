import React from "react";
import { motion } from "framer-motion";

const AnimationPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Game Background Video */}
      {/* Background Image */}
      <img
        src="https://i.ibb.co.com/bRBNC7K4/image.jpg"
        alt="Game Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Welcome to Fire Game Zone 🎮🔥
        </motion.h1>

        <p className="text-gray-200 text-lg mb-6">
          Experience the ultimate battle and action world
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-2xl bg-red-600 text-white font-semibold shadow-lg"
        >
          Start Game
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AnimationPage;