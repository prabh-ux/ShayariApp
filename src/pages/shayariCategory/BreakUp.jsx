import React, { useState, useEffect } from "react";
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import ShayariCategories from "../../components/ShayariCategories";
import { useParams } from "react-router-dom"; // ✅ Import useParams

const BreakUpPunjabiShayari = () => {
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
      const data = await fetchShayari("breakup");
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
        window.location.href = `/breakup-punjabi-shayari/${currentPage + 1}`;
      }
    };
  
    const prevPage = () => {
      if (currentPage > 1) {
        window.location.href = `/breakup-punjabi-shayari/${currentPage - 1}`;
      }
    };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Most heart-touching Breakup Punjabi Shayari. Express your pain and emotions with deep, sad Punjabi poetry."
      />
      <meta
        name="keywords"
        content="Breakup Punjabi Shayari, Sad Punjabi Poetry, Heartbreak Shayari, Dard Bhari Shayari, Punjabi Love Shayari"
      />
      <meta name="robots" content="index, follow" />

      {/* 💔 Hero Section */}
      <header className="bg-gradient-to-r from-red-600 to-pink-700 text-white py-12 px-5 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">💔 Breakup Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Relate to the pain of heartbreak with emotional Punjabi Shayari.</p>
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
        heading={"🥀 ਬ੍ਰੇਕਅੱਪ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ – ਵਿਛੋੜੇ ਦੇ ਦਰਦ ਨੂੰ ਸ਼ਬਦ ਮਿਲੇ!"}
      />

      {/* 📌 Categories Navigation */}
      <ShayariCategories />
    </div>
  );
};

export default BreakUpPunjabiShayari;
