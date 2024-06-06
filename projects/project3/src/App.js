import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register.js';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
import About from './pages/About';
import { ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer.js'
import './App.css';

function App() {


  return (
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </Router>
  );
}

export default App;
