import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/About';
import Lenis from '@studio-freight/lenis';
import TileCalculator from './pages/Tilecalculator';
import Products from './pages/Products';
import Export from './pages/Export';


const App = () => {
  function smoothscroll() {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
  smoothscroll();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />
        <Route path="/export" element={<Export />} />
        <Route path="/calculator" element={<TileCalculator />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
