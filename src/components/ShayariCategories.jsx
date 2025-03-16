import React from 'react'
import { Link } from "react-router-dom";

export const categories = [
  { path: "/new-punjabi-shayari/:pageNo", label: "New Punjabi Shayari", component: NewPunjabiShayari },
  { path: "/love-punjabi-shayari/:pageNo", label: "Love Punjabi Shayari", component: LovePunjabiShayari },
  { path: "/sad-punjabi-shayari/:pageNo", label: "Sad Punjabi Shayari", component: SadPunjabiShayari },
  { path: "/alone-punjabi-shayari/:pageNo", label: "Alone Punjabi Shayari", component: AlonePunjabiShayari },
  { path: "/breakup-punjabi-shayari/:pageNo", label: "Breakup Punjabi Shayari", component: BreakUp },
  { path: "/attitude-punjabi-shayari/:pageNo", label: "Attitude Punjabi Shayari", component: Attitude },
  { path: "/friendship-punjabi-shayari/:pageNo", label: "Friendship Punjabi Shayari", component: Friends },
  { path: "/funny-punjabi-shayari/:pageNo", label: "Funny Punjabi Shayari", component: Funny },
  { path: "/songs-punjabi-shayari/:pageNo", label: "Punjabi Shayari on Songs", component: Songs },
  { path: "/dharmik-punjabi-shayari/:pageNo", label: "Dharmik (Religious) Punjabi Shayari", component: Dharmik },
  { path: "/motivational-punjabi-shayari/:pageNo", label: "Motivational Punjabi Shayari", component: Motivational }
];
const ShayariCategories = () => {
  return (
<section className="bg-white py-6 px-[1rem] text-center h-[250px]">

        <h2 className="text-2xl font-semibold text-center ">💖 Explore More Punjabi Shayari Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6 min-h-[100px]">

          {categories.map((category) => (
           <Link 
           key={category.path} 
           to={category.path.replace(":pageNo", "1")}
           className="w-[180px] px-6 py-3 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-600 text-center"
         >
           {category.label}
         </Link>
         
          ))}

        </div>
      </section>
  )
}

export default ShayariCategories