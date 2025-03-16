import React from 'react'
import ShyariCard from "../components/ShyariCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icons for navigation
const ShayariDiv = ({paginatedShayari,prevPage,currentPage,shayari,itemsPerPage,nextPage,endIndex,heading}) => {
  return (
    <section className="max-w-6xl mx-auto my-8 p-4 shadow-2xl ">
    <h2 className="text-2xl font-semibold text-center">{heading}</h2>

    {/* Shayari Grid */}
    <div className="grid md:grid-cols-3 gap-4 mt-6 transition-opacity duration-500 ease-in-out">
      {paginatedShayari.map((item, index) => (
        <ShyariCard key={index} item={item} />
      ))}
    </div>


    {/* Pagination Arrows */}
    <div className="flex justify-center items-center mt-6 gap-6">
      <button
      aria-label="next"
        onClick={prevPage}
        disabled={currentPage === 1}
        className={` cursor-pointer px-4 py-2 rounded-full shadow-md transform transition-all duration-200 active:scale-90 ${currentPage === 1||currentPage === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-rose-900 hover:bg-rose-800 text-white"}`}
      >
        <FaArrowLeft size={20} />
      </button>


      <span className="text-lg font-medium">{currentPage } / {Math.ceil(shayari.length / itemsPerPage)}</span>

      <button
      aria-label="next"
        onClick={nextPage}
        disabled={endIndex >= shayari.length}
        className={`cursor-pointer px-4 py-2 rounded-full shadow-md ${endIndex >= shayari.length ? "bg-gray-300 cursor-not-allowed" : " bg-rose-900 hover:bg-rose-800 text-white"} transform transition-all duration-200`}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  </section>
  )
}

export default ShayariDiv
