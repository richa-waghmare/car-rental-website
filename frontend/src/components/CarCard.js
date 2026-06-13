import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="card group">
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img 
          src={car.image || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600'} 
          alt={car.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
          {car.category || 'Luxury'}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{car.name}</h3>
            <p className="text-gray-500 text-sm font-medium">{car.brand || 'Premium'}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">${car.price}</p>
            <p className="text-xs text-gray-400 font-semibold uppercase">per day</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-50">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>{car.seats || 4} Seats</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{car.transmission || 'Auto'}</span>
          </div>
        </div>

        <button className="w-full btn-secondary group-hover:btn-primary py-3">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
