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
              className="w-fit h-fit flex items-center justify-center px-[0.5rem] text-nowrap py-[0.5rem] bg-red-700 text-white rounded-lg  hover:bg-red-600 text-center transition"
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
      <div className="flex flex-wrap justify-center gap-4 mt-6 min-h-[120px]">
        <Link to="/punjabi-shayari" className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Best Punjabi Shayari Collection
        </Link>

        <Link
          to="/alone-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Alone Shayari
        </Link>
        <Link
          to="/attitude-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Attitude Shayari
        </Link>
        <Link
          to="/breakup-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          BreakUp Shayari
        </Link>
        <Link
          to="/dharmik-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Dharmik Shayari
        </Link>
        <Link
          to="/friendship-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Friendship Shayari
        </Link>
        <Link
          to="/funny-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Funny Shayari
        </Link>
        <Link
          to="/love-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Love Shayari
        </Link>
        <Link
          to="/motivational-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Motivational Shayari
        </Link>
        <Link
          to="/new-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          New Shayaries
        </Link>
        <Link
          to="/sad-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Sad Shayaries
        </Link>
        <Link
          to="/songs-shayari-seo"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Songs Shayaries
        </Link>

      </div>
    </section>
  );
};

export default ShayariCategories;
