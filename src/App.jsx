import { useState } from 'react'

import Navbar from './components/Navbar'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import PrivicyPolicy from './pages/PrivicyPolicy';

import { categories } from './Data/FetchData';


function App() {


  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {categories.map(({path,component:Components})=>( 
           <Route key={path} path={path} element={<Components/>} />
        ))}
        
       
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/privacy' element={<PrivicyPolicy />}></Route>
      </Routes>
    </div>
  )
}

export default App
