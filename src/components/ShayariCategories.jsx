import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "../Data/FetchData";

const ShayariCategories = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate data load for skeletons
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // List of main SEO links (avoids repeating Tailwind classes)
  const seoLinks = [
    { path: "/punjabi-shayari", label: "Best Punjabi Shayari Collection" },
    { path: "/alone-shayari-seo", label: "Alone Shayari" },
    { path: "/attitude-shayari-seo", label: "Attitude Shayari" },
    { path: "/breakup-shayari-seo", label: "BreakUp Shayari" },
    { path: "/dharmik-shayari-seo", label: "Dharmik Shayari" },
    { path: "/friendship-shayari-seo", label: "Friendship Shayari" },
    { path: "/funny-shayari-seo", label: "Funny Shayari" },
    { path: "/love-shayari-seo", label: "Love Shayari" },
    { path: "/motivational-shayari-seo", label: "Motivational Shayari" },
    { path: "/new-shayari-seo", label: "New Shayaries" },
    { path: "/sad-shayari-seo", label: "Sad Shayaries" },
    { path: "/songs-shayari-seo", label: "Songs Shayaries" },
  ];

  return (
    <section className="bg-white py-6 px-4 text-center flex flex-col items-center">
      <h2 className="text-2xl font-semibold min-h-[40px]">
        💖 Explore More Punjabi Shayari Categories
      </h2>

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 min-h-[120px]">
        {loaded
          ? categories.map((category) => (
              <Link
                key={category.path}
                to={category.path.replace(":pageNo", "1")}
                className="flex items-center justify-center px-3 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition text-center"
                aria-label={`Explore ${category.label}`}
              >
                {category.label}
              </Link>
            ))
          : // Skeleton placeholders (fixed width and height to prevent layout shift)
            Array(8)
              .fill("")
              .map((_, idx) => (
                <div
                  key={idx}
                  className="w-[160px] h-[40px] bg-gray-300 rounded-lg animate-pulse"
                ></div>
              ))}
      </div>

      {/* SEO Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 min-h-[120px]">
        {seoLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-blue-600 hover:text-blue-800 font-medium underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShayariCategories;
