import React, { useState, useEffect } from "react";
import fetchShayari from "../Data/FetchData";
import ShayariDiv from "../components/ShayariDiv";
import { lazy, Suspense } from "react";
const ShayariCategories = lazy(() => import("../components/ShayariCategories"));

const Home = () => {
  const [shayari, setShayari] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;



  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => (touchStartX = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) nextPage();  // Swipe left
      if (touchEndX - touchStartX > 50) prevPage();  // Swipe right
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentPage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);  // Runs whenever `currentPage` changes

  useEffect(() => {
    const loadShayari = async () => {
      const data = await fetchShayari("trending");
      setShayari(data);
    };
    loadShayari();
  }, []);

  // Calculate the range of items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedShayari = shayari.slice(startIndex, endIndex);

  // Handle Next and Previous page
  const nextPage = () => {
    if (endIndex < shayari.length) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className=" min-h-screen bg-gray-100 text-gray-900">
      {/* 🌟 SEO Meta Tags */}
      <meta name="description" content="Read the best Punjabi Shayari in Love, Sadness, Attitude, and more. Share heart-touching Shayari with friends on WhatsApp and Facebook." />
      <meta name="keywords" content="Punjabi Shayari, Love Shayari, Sad Shayari, Attitude Shayari, Dosti Shayari" />
      <meta name="robots" content="index, follow" />

      {/* 🔥 Hero Section */}
      <header className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 px-5 text-center ">
        <h1 className=" text-2xl md:text-4xl font-bold">📜 Best Punjabi Shayari Collection</h1>
        <p className="mt-2 text-lg">Love, Sadness, Friendship & More – Read & Share!</p>
      </header>

      {/* 🌟 Trending Shayari */}
      <ShayariDiv heading={"🔥 Trending Punjabi Shayari"} shayari={shayari} itemsPerPage={itemsPerPage} paginatedShayari={paginatedShayari} prevPage={prevPage} currentPage={currentPage} nextPage={nextPage} endIndex={endIndex} ></ShayariDiv>

      {/* 📌 Categories */}
      <Suspense fallback={<div>Loading...</div>}>
        <ShayariCategories />
      </Suspense>;
    </div>
  );
};

export default Home;
