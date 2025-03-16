import React, { useState, useEffect } from "react";
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import { lazy, Suspense } from "react";
const ShayariCategories = lazy(() => import("../../components/ShayariCategories"));
import { useParams } from "react-router-dom"; // ✅ Import useParams

const LovePunjabiShayari = () => {
  const [shayari, setShayari] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const { pageNo } = useParams();

  // ✅ Update currentPage when pageNo changes
  useEffect(() => {
    setCurrentPage(parseInt(pageNo, 10) || 1);
  }, [pageNo]);

  useEffect(() => {
    const loadShayari = async () => {
      const data = await fetchShayari("love"); // Fetch Love Shayari
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
      window.location.href = `/love-punjabi-shayari/${currentPage + 1}`;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.location.href = `/love-punjabi-shayari/${currentPage - 1}`;
    }
  };


  return (
    <div className="min-h-screen bg-pink-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Read the best Love Punjabi Shayari to express your romantic feelings. Heart-touching and emotional Shayari for lovers."
      />
      <meta
        name="keywords"
        content="Love Punjabi Shayari, Romantic Shayari, Punjabi Poetry, Heart-touching Love Shayari"
      />
      <meta name="robots" content="index, follow" />

      {/* ❤️ Hero Section */}
      <header className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-12 px-5 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">❤️ Love Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Express your love with the most romantic Punjabi Shayari.</p>
      </header>

      {/* 🌹 Shayari List */}
      <ShayariDiv
        shayari={shayari}
        itemsPerPage={itemsPerPage}
        paginatedShayari={paginatedShayari}
        prevPage={prevPage}
        currentPage={currentPage}
        nextPage={nextPage}
        endIndex={endIndex}
        heading={"❤️ ਪੰਜਾਬੀ ਲਵ ਸ਼ਾਇਰੀ – ਇਸ਼ਕ ਦੇ ਜਜ਼ਬਾਤ ਸ਼ਬਦਾਂ ‘ਚ!"}
      />

      {/* 📌 Categories */}
      <Suspense fallback={<div>Loading...</div>}>
        <ShayariCategories />
      </Suspense>;
    </div>
  );
};

export default LovePunjabiShayari;

