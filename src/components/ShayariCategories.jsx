import React from 'react'
import { categories } from "../Data/FetchData";
import { Link } from "react-router-dom";
const ShayariCategories = () => {
  return (
    <section className="bg-white min-h-[300px] py-6 px-[1rem] text-center">

        <h2 className="text-2xl font-semibold text-center ">💖 Explore More Punjabi Shayari Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((category) => (
            <Link
              key={category.path} // Unique key should be 'path'
              to={category.path.replace(":pageNo","1")} // Use the 'path' property correctly
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
            >
              {category.label} {/* Display the 'label' property */}
            </Link>
          ))}

        </div>
      </section>
  )
}

export default ShayariCategories