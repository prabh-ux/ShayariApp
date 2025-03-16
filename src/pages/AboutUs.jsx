import React from "react";
import { categories } from "../Data/FetchData";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 Hero Section */}
      <header className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 px-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">📖 About Us</h1>
        <p className="mt-2 text-lg">Discover the Passion Behind Punjabi Shayari</p>
      </header>

      {/* 💡 About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-700">Who We Are</h2>
        <p className="mt-4 text-gray-700 text-lg text-center">
          We are passionate lovers of **Punjabi Shayari**, curating the best collections of 
          **romantic, sad, attitude, and friendship** shayari for you. Our goal is to provide 
          a platform where poetry meets emotions and words become expressions.
        </p>
      </section>

      {/* 🚀 Mission Statement */}
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto mt-6">
        <h3 className="text-2xl font-semibold text-red-600 text-center">Our Mission</h3>
        <p className="mt-3 text-gray-700 text-center">
          To spread the beauty of **Punjabi Shayari** worldwide, making it accessible for 
          **shayari lovers** to read, share, and enjoy effortlessly.
        </p>
      </section>

      {/* 🎭 Categories Showcase */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-700">Our Collection</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((item) => (
            <Link to={item.path} key={item.path} className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-center py-3 px-4 rounded-lg shadow-md">
              {item.label} 
            </Link>
          ))}
        </div>
      </section>

      {/* 📩 Contact Us */}
      <section className="bg-red-50 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600">Stay Connected</h2>
        <p className="mt-2 text-gray-700">
          Have a **shayari suggestion** or want to **collaborate**? Reach out to us!
        </p>
        <a href="/contact" className="mt-4 inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
