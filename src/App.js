/* eslint-disable react/jsx-no-undef */
import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'

//import Link from '@mui/material/Link';

const App = () => {

//  const About  = lazy(()=>import('../src/pages/Product'))

  return(
    <>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/product' element={<Product/>}/>
    
      <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
  </Routes>
    </>
  )
}

export default App

