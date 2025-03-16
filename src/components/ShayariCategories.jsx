import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "../Data/FetchData";

const ShayariCategories = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay (remove if data is static)
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-white py-6 px-[1rem] text-center min-h-[250px] flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-center min-h-[40px]">
        💖 Explore More Punjabi Shayari Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-6 min-h-[120px]">
        {loaded ? (
          categories.map((category) => (
            <Link
              key={category.path}
              to={category.path.replace(":pageNo", "1")}
              className="w-[180px] h-[50px] flex items-center justify-center px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-600 text-center transition"
              aria-label={`Explore ${category.label}`}
            >
              {category.label}
            </Link>
          ))
        ) : (
          // Skeleton placeholders (prevents layout shift)
          Array(8)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="w-[180px] h-[50px] bg-gray-300 rounded-lg animate-pulse"
              ></div>
            ))
        )}
      </div>
    </section>
  );
};

export default ShayariCategories;
