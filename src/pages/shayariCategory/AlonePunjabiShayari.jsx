import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // ✅ Import useParams
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import { lazy, Suspense } from "react";
const ShayariCategories = lazy(() => import("../../components/ShayariCategories"));

const AlonePunjabiShayari = () => {
  const { pageNo } = useParams(); // ✅ Get page number from URL
  const [shayari, setShayari] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // ✅ Default to page 1
  const itemsPerPage = 12;

  // ✅ Update currentPage when pageNo changes
  useEffect(() => {
    setCurrentPage(parseInt(pageNo, 10) || 1);
  }, [pageNo]);

  useEffect(() => {
    const loadShayari = async () => {
      const data = await fetchShayari("alone");
      setShayari(data);
    };
    loadShayari();
  }, []);

  // ✅ Pagination (adjusted for 1-based indexing)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedShayari = shayari.slice(startIndex, endIndex);

  // ✅ Corrected navigation functions
  const nextPage = () => {
    if (endIndex < shayari.length) {
      window.location.href = `/alone-punjabi-shayari/${currentPage + 1}`;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.location.href = `/alone-punjabi-shayari/${currentPage - 1}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Best Alone Punjabi Shayari for those who feel lonely. Express your feelings with deep, heart-touching Shayari in Punjabi."
      />
      <meta
        name="keywords"
        content="Alone Punjabi Shayari, Sad Shayari, Punjabi Poetry, Heartbroken Shayari, Dard Bhari Shayari"
      />
      <meta name="robots" content="index, follow" />

      {/* 🔥 Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-5 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">💔 Alone Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Express your loneliness through the most touching Shayari.</p>
      </header>

      {/* 🌟 Shayari List */}
      <ShayariDiv
        shayari={shayari}
        itemsPerPage={itemsPerPage}
        paginatedShayari={paginatedShayari}
        prevPage={prevPage}
        currentPage={currentPage}
        nextPage={nextPage}
        endIndex={endIndex}
        heading={"💔 ਤਨਹਾਈ ਦੀ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ – ਇਕੱਲਿਆਂ ਲਈ ਖਾਸ!"}
      />

      {/* 📌 Categories */}
      <Suspense fallback={<div>Loading...</div>}>
        <ShayariCategories />
      </Suspense>;
    </div>
  );
};

export default AlonePunjabiShayari;
