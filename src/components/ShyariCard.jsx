import React, { useState } from "react";
import { FaWhatsapp, FaFacebook , FaCopy, FaCheck } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const ShayariCard = ({ item }) => {
  const [copied, setCopied] = useState(false);
  const [copyCount, setCopyCount] = useState(0);

  const handelShare = (app) => {
    if (app === "Whatsapp") {
      const url = `https://wa.me/?text=${encodeURIComponent(item.name)}`;
      window.open(url, "_blank");
    } else if (app === "Facebook") {
      const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(item.name)}`;

      window.open(url, "_blank");
    }else if(app==="Twitter"){
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(item.name)}`;
  window.open(url, "_blank");
    }
  }

  const handleCopy = () => {

    if(!copied)
    {
      navigator.clipboard.writeText(item.name);
      setCopied(true);
      setCopyCount((prev) => prev + 1); // Increment copy count
    
   

    
      setTimeout(() => setCopied(false), 2000); // Reset "Copied!" after 2 sec
    }
  };

  return (
    <div className="p-5 bg-white shadow-lg rounded-xl border border-gray-200 transition-transform transform hover:scale-105 flex flex-col justify-between">
      {/* Shayari Text */}
      <p className="text-lg font-semibold text-gray-900">{item.name}</p>

      <div className="flex justify-between items-center mt-4">
        {/* Copy Button with Copy Count */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-rose-900 font-medium cursor-pointer"
          >
            {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
            {copied ? "Copied!" : "Copy"}
          </button>
          {/* <span className="text-gray-600 text-sm">({copyCount})</span> */}
        </div>

        {/* Social Share Buttons */}
        <div className="flex gap-3">
          <FaWhatsapp className="text-green-500 cursor-pointer hover:scale-110 transition" onClick={()=>handelShare("Whatsapp")} />
          <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition"onClick={()=>handelShare("Facebook")}  />
          <FaSquareXTwitter className="text-black cursor-pointer hover:scale-110 transition"onClick={()=>handelShare("Twitter")}  />
        </div>
      </div>
    </div>
  );
};

export default ShayariCard;
