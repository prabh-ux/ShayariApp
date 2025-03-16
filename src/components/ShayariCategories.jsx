import React from 'react';
import { categories } from "../Data/FetchData";
import { Link } from "react-router-dom";

const ShayariCategories = () => {
  return (
    <section className="bg-white py-6 px-[1rem] text-center h-[280px] flex flex-col items-center justify-start">
      {/* Title with reserved space to prevent CLS */}
      <h2 className="text-2xl font-semibold text-center min-h-[40px]">
        💖 Explore More Punjabi Shayari Categories
      </h2>

      {/* Categories container with consistent spacing */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-full max-w-4xl">
        {categories.map((category) => (
          <Link 
            key={category.path} 
            to={category.path.replace(":pageNo", "1")}
            className="w-[180px] h-[50px] flex items-center justify-center px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-600 text-center transition"
            aria-label={`Explore ${category.label}`}
          >
            {category.label}
          </Link>
        ))}
      </div>

      {/* Invisible Placeholder to reserve space */}
      <div className="h-[50px] invisible">Placeholder</div>
    </section>
  );
}

export default ShayariCategories;
