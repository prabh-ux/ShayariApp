import React from 'react'
import { categories } from "../Data/FetchData";
import { Link } from "react-router-dom";
const ShayariCategories = () => {
  return (
    <section className="bg-white py-6 px-[1rem] text-center min-h-[150px]">

        <h2 className="text-2xl font-semibold text-center ">💖 Explore More Punjabi Shayari Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6 min-h-[100px]">

          {categories.map((category) => (
           <Link 
           key={category.path} 
           to={category.path.replace(":pageNo", "1")}
           className="w-[180px] px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 text-center"
         >
           {category.label}
         </Link>
         
          ))}

        </div>
      </section>
  )
}

export default ShayariCategories