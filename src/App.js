import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './pages/home';
import './App.css';

import Landscape from './pages/landscape';
import Potrait from './pages/potrait';
import Footer from './component/footer';


export default function App(){
  return(
    <>
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/potrait' element={<Potrait/>}/>
        <Route path='/landscape' element={<Landscape/>}/>
        
      </Routes>
      <Footer/>
    </div>
    </>
  )
}
