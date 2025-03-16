import React, { useState, useEffect } from "react";
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import ShayariCategories from "../../components/ShayariCategories";
import { useParams } from "react-router-dom"; // ✅ Import useParams

const SadPunjabiShayari = () => {
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
      const data = await fetchShayari("sad");
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
      window.location.href = `/sad-punjabi-shayari/${currentPage + 1}`;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.location.href = `/sad-punjabi-shayari/${currentPage - 1}`;
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Feel the pain of heart-touching Sad Punjabi Shayari. Read and share emotional Shayari in Punjabi."
      />
      <meta
        name="keywords"
        content="Sad Punjabi Shayari, Emotional Shayari, Punjabi Dard Bhari Shayari, Broken Heart Shayari, Depression Shayari"
      />
      <meta name="robots" content="index, follow" />

      {/* 🔥 Hero Section */}
      <header className="bg-gradient-to-r from-purple-700 to-black text-white py-12 px-5 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">💔 Sad Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Express your emotions with deep, heart-touching Punjabi Shayari.</p>
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
        heading={"😢 ਦੁੱਖ ਭਰੀ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ – ਤੋਟੇ ਦਿਲ ਦੀ ਆਵਾਜ਼!"}
      />

      {/* 📌 Categories */}
      <ShayariCategories />
    </div>
  );
};

export default SadPunjabiShayari;

