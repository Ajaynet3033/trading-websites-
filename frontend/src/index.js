import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './index.css'; 

import HomePage from './landingpage/home/HomePage'; 
import Signup from './landingpage/signup/signup'; // 1. Capitalized 'Signup'
import About from './landingpage/about/AboutPage'; 
import Product from './landingpage/products/Universe'; 
import PricingPage from './landingpage/pricing/PricingPage'; 
import Support from './landingpage/support/SupportPage'; 
import Navbar from './landingpage/Navbar'; 
import Footer from './landingpage/Footer'; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
  <BrowserRouter> 
    <Navbar /> {/* 2. Moved outside <Routes> */}
    <Routes> 
      <Route path="/" element={<HomePage />} /> 
      <Route path="/signup" element={<Signup />} /> {/* 3. Fixed component tag */}
      <Route path="/about" element={<About />} /> 
      <Route path="/product" element={<Product />} /> 
      <Route path="/pricing" element={<PricingPage />} /> 
      <Route path="/support" element={<Support />} /> {/* 4. Lowercased route path for consistency */}
    </Routes> 
    <Footer /> {/* 5. Moved outside <Routes> */}
  </BrowserRouter> 
);
