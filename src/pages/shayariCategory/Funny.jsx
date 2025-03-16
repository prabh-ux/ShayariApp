import React, { useState, useEffect } from "react";
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import ShayariCategories from "../../components/ShayariCategories";
import { useParams } from "react-router-dom"; // ✅ Import useParams

const FunnyPunjabiShayari = () => {
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
      const data = await fetchShayari("funny");
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
      window.location.href = `/funny-punjabi-shayari/${currentPage + 1}`;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.location.href = `/funny-punjabi-shayari/${currentPage - 1}`;
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Read the best Funny Punjabi Shayari and make your friends laugh! Enjoy hilarious Punjabi jokes and witty poetry."
      />
      <meta
        name="keywords"
        content="Funny Punjabi Shayari, Punjabi Jokes, Punjabi Comedy, Hilarious Shayari, Punjabi Funny Poetry"
      />
      <meta name="robots" content="index, follow" />

      {/* 🔥 Hero Section */}
      <header className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-12 px-5 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">😂 Funny Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Enjoy hilarious Punjabi Shayari and share the laughter!</p>
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
        heading={"😂 ਮਜ਼ੇਦਾਰ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ – ਹੱਸੋ ਤੇ ਚਿੰਤਾ ਭੁੱਲੋ!"}
      />

      {/* 📌 Categories */}
      <ShayariCategories />
    </div>
  );
};

export default FunnyPunjabiShayari;
