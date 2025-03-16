import React, { useState, useEffect } from "react";
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import ShayariCategories from "../../components/ShayariCategories";
import { useParams } from "react-router-dom"; // ✅ Import useParams

const Dharmik = () => {
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
      const data = await fetchShayari("dharmik");
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
       window.location.href = `/dharmik-punjabi-shayari/${currentPage + 1}`;
     }
   };
 
   const prevPage = () => {
     if (currentPage > 1) {
       window.location.href = `/dharmik-punjabi-shayari/${currentPage - 1}`;
     }
   };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Read the best Dharmik Punjabi Shayari filled with spirituality, devotion, and religious wisdom. Express your faith through sacred Punjabi poetry."
      />
      <meta
        name="keywords"
        content="Dharmik Punjabi Shayari, Religious Shayari, Sikhism Shayari, Gurbani Quotes, Punjabi Spiritual Poetry"
      />
      <meta name="robots" content="index, follow" />

      {/* 🔥 Hero Section */}
      <header className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-12 px-5 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">🛕 Dharmik Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Feel the divine wisdom and spirituality through sacred Shayari.</p>
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
        heading={"🛕 ਧਾਰਮਿਕ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ – ਰੱਬ ਦੇ ਨਾਮ ਦੀ ਮਹਿਮਾ!"}
      />

      {/* 📌 Categories */}
      <ShayariCategories />
    </div>
  );
};

export default Dharmik;

