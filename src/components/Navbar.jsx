import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);


  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
    setCategoryOpen(false);
  };

  const Links = [
    { path: "/", label: "HOME", category: false },
    { path: "/love-punjabi-shayari/1", label: "Romantic Punjabi Shayari", category: true },
    { path: "/sad-punjabi-shayari/1", label: "Sad Punjabi Shayari", category: true },
    { path: "/motivational-punjabi-shayari/1", label: "Motivational Punjabi Shayari", category: true },
    { path: "/friendship-punjabi-shayari/1", label: "Friendship Punjabi Shayari", category: true },
    { path: "/attitude-punjabi-shayari/1", label: "Attitude Punjabi Shayari", category: true },
    { path: "/about", label: "ABOUT US", category: false },
    { path: "/contact", label: "CONTACT DEVLOPER", category: false },
  ]

  return (
    <nav className=" shadow-md text-gray-900 w-full sm:z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-pink-700">
            Punjabi Shayari
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center relative">
            <Link to="/" className="hover:text-pink-600 transition">Home</Link>
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center hover:text-pink-600 transition"
            >
              Categories <ChevronDown size={18} className="ml-1" />
            </button>

            {/* Desktop Dropdown */}
            {categoryOpen && (
  <motion.div 
    initial={{ opacity: 0, y: -10 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.3 }} 
    className="absolute top-10 bg-white shadow-md rounded-md w-48 p-2 z-30"
  >
    {Links.filter(item => item.category).map(({ path, label }) => (
      <Link
        key={path}
        to={path}
        onClick={() => setCategoryOpen(false)}
        className="block px-4 py-2 hover:bg-gradient-to-r from-pink-500 to-red-500 hover:text-white rounded transition-all duration-200 transform hover:scale-105 hover:translate-x-2"
      >
        {label}
      </Link>
    ))}
  </motion.div>
)}

            <Link to="/about" className="hover:text-pink-600 transition">About Us</Link>
            <Link to="/contact" className="hover:text-pink-600 transition">Contact Devloper</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu} // Close when clicking outside
        />
      )}

      {/* Mobile Menu (Slide in & Animated Close) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-4 transform"
      >
        {/* Close Button with Animation */}
        <motion.button
          onClick={closeMenu}
          className="self-end p-2 rounded-full hover:bg-gray-200 transition"
          whileHover={{ rotate: 90 }}
        >
          <X size={28} />
        </motion.button>

        {/* Mobile Links with Active State */}
        {Links.map(({ path, label, category }) => (
          <Link
            key={path}
            to={path}
            onClick={closeMenu}
            className={`block px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105  ${location.pathname === path
              ? "bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold"
              : "hover:bg-gray-100"
              } ${!category ? "font-bold" : "font-normal"}`}
          >
            {label}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
