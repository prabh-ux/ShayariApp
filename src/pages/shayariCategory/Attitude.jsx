import React, { useState, useEffect } from "react";
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import { lazy, Suspense } from "react";
const ShayariCategories = lazy(() => import("../../components/ShayariCategories"));
import { useParams } from "react-router-dom"; // ✅ Import useParams

const AttitudePunjabiShayari = () => {
  const { pageNo } = useParams();
  const [shayari, setShayari] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  
    // ✅ Update currentPage when pageNo changes
    useEffect(() => {
      setCurrentPage(parseInt(pageNo, 10) || 1);
    }, [pageNo]);

  useEffect(() => {
    const loadShayari = async () => {
      const data = await fetchShayari("attitude");
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
      window.location.href = `/attitude-punjabi-shayari/${currentPage + 1}`;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.location.href = `/attitude-punjabi-shayari/${currentPage - 1}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Best Attitude Punjabi Shayari to express your swag and confidence. Read bold, powerful, and killer Punjabi attitude Shayari."
      />
      <meta
        name="keywords"
        content="Attitude Punjabi Shayari, Killer Shayari, Swag Shayari, Royal Punjabi Shayari, Bold Punjabi Poetry"
      />
      <meta name="robots" content="index, follow" />

      {/* 🔥 Hero Section */}
      <header className="bg-gradient-to-r from-black to-gray-800 text-white py-12 px-5 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">🔥 Attitude Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Show your swag with bold & confident Shayari in Punjabi!</p>
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
        heading={" 😎 ਐਟਿਟਿਉਡ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ – ਸਵੈਗ ਵਾਲਿਆਂ ਲਈ ਖਾਸ!"}
      />

            {/* 📌 Categories */}
            <Suspense fallback={<div>Loading...</div>}>
              <ShayariCategories />
            </Suspense>;
    </div>
  );
};

export default AttitudePunjabiShayari;
