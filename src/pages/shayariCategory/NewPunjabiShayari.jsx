import React, { useState, useEffect } from "react";
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import { lazy, Suspense } from "react";
const ShayariCategories = lazy(() => import("../../components/ShayariCategories"));
import { useParams } from "react-router-dom"; // ✅ Import useParams

const NewPunjabiShayari = () => {
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
      const data = await fetchShayari("new"); // Fetching new Punjabi Shayari
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
      window.location.href = `/new-punjabi-shayari/${currentPage + 1}`;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.location.href = `/new-punjabi-shayari/${currentPage - 1}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Read the latest New Punjabi Shayari with fresh and trending poetic expressions. Find Shayari on Love, Sadness, Friendship & More."
      />
      <meta
        name="keywords"
        content="New Punjabi Shayari, Latest Punjabi Poetry, Love Shayari, Punjabi Quotes, Best Shayari 2025"
      />
      <meta name="robots" content="index, follow" />

      {/* 🔥 Hero Section */}
      <header className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-12 px-5 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">🆕 New Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Discover the freshest and most heart-touching Punjabi Shayari.</p>
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
        heading={"📜 ਨਵੀਂ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ – ਹਰ ਸ਼ਬਦ ‘ਚ ਨਵਾਂ ਅਹਿਸਾਸ!"}
      />

      {/* 📌 Categories */}
      <Suspense fallback={<div>Loading...</div>}>
        <ShayariCategories />
      </Suspense>;
    </div>
  );
};

export default NewPunjabiShayari;
