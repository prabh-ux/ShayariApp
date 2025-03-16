import NewPunjabiShayari from '../pages/shayariCategory/NewPunjabiShayari'
import LovePunjabiShayari from '../pages/shayariCategory/LovePunjabiShayari';
import SadPunjabiShayari from '../pages/shayariCategory/SadPunjabiShayari';
import AlonePunjabiShayari from '../pages/shayariCategory/AlonePunjabiShayari';
import BreakUp from '../pages/shayariCategory/BreakUp';
import Attitude from '../pages/shayariCategory/Attitude';
import Friends from '../pages/shayariCategory/Friends';
import Funny from '../pages/shayariCategory/Funny';
import Songs from '../pages/shayariCategory/Songs';
import Dharmik from '../pages/shayariCategory/Dharmik';
import Motivational from '../pages/shayariCategory/Motivational';

const catageoryMap={
  trending: "/Shayaries/loveShayari.json",
  motivational: "/Shayaries/MotivationalShayari.json",
  sad: "/Shayaries/SadShayari.json",
  alone: "/Shayaries/AloneShayari.json",
  attitude: "/Shayaries/AttitudeShayari.json",
  breakup: "/Shayaries/BreakUpShayari.json",
  dharmik: "/Shayaries/DharmikShayari.json",
  friends: "/Shayaries/FriendsShayari.json",
  funny: "/Shayaries/FunnyShayari.json",
  love: "/Shayaries/loveShayari.json",
  songs: "/Shayaries/SongsShayari.json",

 }

 const fetchShayari = async (category) => {
  try {
    if (category === "new" || category === "trending") {
      // Fetch all Shayari JSON files in parallel
      const responses = await Promise.all(
        Object.values(catageoryMap).map((url) => fetch(url))
      );

      // Filter successful responses
      const validResponses = responses.filter((res) => res.ok);
      if (validResponses.length === 0) throw new Error("Failed to load any Shayari!");

      // Read and parse JSON files
      const shayariArrays = await Promise.all(validResponses.map((res) => res.json()));

      // Merge all Shayari into one array
      const combinedShayari = shayariArrays.flat();

      // Handle sorting based on category
      if (category === "new") {
        // Sort by `dateUpdatedOn` (latest first), fallback to `dateAddedOn`
        combinedShayari.sort((a, b) => {
          const dateA = new Date(a.dateUpdatedOn || a.dateAddedOn);
          const dateB = new Date(b.dateUpdatedOn || b.dateAddedOn);
          return dateB - dateA; // Descending order (latest first)
        });

        return combinedShayari; // Return all sorted Shayari
      }

      // If trending, shuffle and return only 40 random Shayari
      combinedShayari.sort(() => Math.random() - 0.5);
      return combinedShayari.slice(0, 80);
    }

    // If category is not "new" or "trending", fetch the specific category
    if (!catageoryMap[category]) throw new Error("Invalid category!");

    const response = await fetch(catageoryMap[category]);
    if (!response.ok) throw new Error(`Failed to load Shayari: ${response.status}`);

    const text = await response.text();
    if (!text.trim()) throw new Error("Empty JSON file!");

    return JSON.parse(text);
  } catch (error) {
    console.error("❌ Error fetching Shayari:", error);
    return [];
  }
};







export default fetchShayari;

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
