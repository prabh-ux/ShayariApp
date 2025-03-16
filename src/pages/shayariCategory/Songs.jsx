import React, { useState, useEffect } from "react";
import fetchShayari from "../../Data/FetchData";
import ShayariDiv from "../../components/ShayariDiv";
import ShayariCategories from "../../components/ShayariCategories";
import { useParams } from "react-router-dom"; // ✅ Import useParams

const SongsPunjabiShayari = () => {
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
      const data = await fetchShayari("songs");
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
      window.location.href = `/songs-punjabi-shayari/${currentPage + 1}`;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.location.href = `/songs-punjabi-shayari/${currentPage - 1}`;
    }
  };
  return (
    <div className="min-h-screen  bg-gray-100 text-gray-900  ">
      {/* 🌟 SEO Meta Tags */}
      <meta
        name="description"
        content="Enjoy the best Punjabi Shayari inspired by songs. Heart-touching lyrics & poetic expressions of love, sadness, and emotions in music."
      />
      <meta
        name="keywords"
        content="Songs Punjabi Shayari, Punjabi song lyrics, musical shayari, romantic lyrics, sad lyrics, dard bhari shayari"
      />
      <meta name="robots" content="index, follow" />

      {/* 🎶 Hero Section */}
      <header className="py-12 px-5 text-center  bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <h1 className="text-2xl md:text-4xl font-bold">🎶 Songs Punjabi Shayari</h1>
        <p className="mt-2 text-lg">Lyrics that touch the soul – Feel the emotions in every word.</p>
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
        heading={"🎵 Punjabi Songs Shayari – ਗੀਤਾਂ ਵਾਲੀ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ – ਹਰ ਬੋਲ ‘ਚ ਇਸ਼ਕ, ਦੁੱਖ ਤੇ ਰੌਣਕ!"}
      />

      {/* 📌 Categories */}   
      <ShayariCategories />
    </div>
  );
};

export default SongsPunjabiShayari;
