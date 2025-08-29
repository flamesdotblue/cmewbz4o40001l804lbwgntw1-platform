import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Features />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

export default App;
