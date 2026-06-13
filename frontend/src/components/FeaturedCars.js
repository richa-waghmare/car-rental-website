import React from 'react';
import CarCard from './CarCard';

const FeaturedCars = () => {
  const cars = [
    { id: 1, name: '911 Carrera', brand: 'Porsche', price: 299, image: 'https://images.unsplash.com/photo-1503376780353-7e661876a43e?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'G-Wagon G63', brand: 'Mercedes', price: 450, image: 'https://images.unsplash.com/photo-1520050206274-a1ae446cb3cc?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Model S Plaid', brand: 'Tesla', price: 199, image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Huracán EVO', brand: 'Lamborghini', price: 899, image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Premium Fleet</h2>
            <p className="text-4xl md:text-5xl font-bold text-gray-900">Featured Vehicles</p>
            <p className="text-gray-500 font-medium">Experience the thrill of driving our top-rated luxury cars, meticulously maintained for your pleasure.</p>
          </div>
          <button className="btn-secondary">View All Cars</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
