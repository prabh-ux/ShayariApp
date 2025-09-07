import { useState } from 'react'

import Navbar from './components/Navbar'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import PrivicyPolicy from './pages/PrivicyPolicy';

import { categories } from './Data/FetchData';
import SeoDemo from './seo/SeoDemo';
import AloneShayariSeo from './seo/AloneShayariSeo';
import AttitudeSeo from './seo/AttitudeSeo';
import BreakUpSeo from './seo/BreakUpSeo';
import DharmikSeo from './seo/DharmikSeo';
import FriendsSeo from './seo/FriendsSeo';
import FunnyShayariSeo from './seo/FunnyShayariSeo';
import LoveSeo from './seo/LoveSeo';
import MotivationalSeo from './seo/MotivationalSeo';
import NewSeo from './seo/NewSeo';
import SadSeo from './seo/SadSeo';
import SongsSeo from './seo/SongsSeo';


function App() {


  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {categories.map(({ path, component: Components }) => (
          <Route key={path} path={path} element={<Components />} />
        ))}

        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/privacy' element={<PrivicyPolicy />}></Route>
        <Route path="/punjabi-shayari" element={<SeoDemo />} />
        <Route path="/alone-shayari-seo" element={<AloneShayariSeo />} />
        <Route path="/attitude-shayari-seo" element={<AttitudeSeo />} />
        <Route path="/breakup-shayari-seo" element={<BreakUpSeo />} />
        <Route path="/dharmik-shayari-seo" element={<DharmikSeo />} />
        <Route path="/friendship-shayari-seo" element={<FriendsSeo />} />

        <Route path="/funny-shayari-seo" element={<FunnyShayariSeo />} />
        <Route path="/love-shayari-seo" element={<LoveSeo />} />
        <Route path="/motivational-shayari-seo" element={<MotivationalSeo />} />
        <Route path="/new-shayari-seo" element={<NewSeo />} />
        <Route path="/sad-shayari-seo" element={<SadSeo />} />
        <Route path="/songs-shayari-seo" element={<SongsSeo />} />


      </Routes>
    </div>
  )
}

export default App
