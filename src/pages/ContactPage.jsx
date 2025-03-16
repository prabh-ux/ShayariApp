import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
      {/* 🌟 Profile Section */}
      <motion.div 
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 px-5 text-center rounded-lg shadow-lg w-full max-w-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 👤 Profile Image */}
        <div className="flex justify-center">
          <motion.img
            src="/devloper.jpg" // Replace with your actual image URL
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover object-top" 
            whileHover={{ scale: 1.1 }}
          />
        </div>

        <h1 className="text-4xl font-bold mt-4">👋 Hey, I'm Prabhkirat Singh</h1>
        <p className="mt-2 text-lg">UI/UX Designer | Web Developer | Creative Mind</p>
      </motion.div>

      {/* 🏠 Info Section */}
      <section className="mt-10 text-center">
        <p className="text-xl text-gray-800 font-semibold">🌍 Based in Chandigarh, India</p>
        <p className="text-lg text-gray-700 mt-2">
          I specialize in front-end development, UI/UX design, and creating smooth, user-friendly web applications.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Passionate about blending creativity with technology, I focus on delivering **interactive** and **engaging** user experiences.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Apart from coding, I enjoy **singing, fitness, and psychology**.
        </p>
      </section>

      {/* 🎨 Animated Button */}
      <motion.div 
        className="mt-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link 
          to="https://prabhkirat-singh-resume.vercel.app/" 
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore My Journey 🚀
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutMe;
