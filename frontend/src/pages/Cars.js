import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedCars from '../components/FeaturedCars';

const CarsPage = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8">Our Fleet</h1>
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
            {['All', 'Sedan', 'SUV', 'Luxury', 'Sports', 'Electric'].map(cat => (
              <button key={cat} className="px-6 py-2 rounded-full glass border-primary/20 text-gray-700 font-medium hover:bg-primary hover:text-white transition-all whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
          <FeaturedCars />
          <FeaturedCars /> {/* Duplicate for listing effect */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarsPage;
