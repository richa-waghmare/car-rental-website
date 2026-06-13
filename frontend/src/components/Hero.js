import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      {/* Decorative Blob */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tertiary/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
            Premium Car Rental
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Drive the <span className="text-primary italic">Experience</span> of Luxury
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Choose from the world's most prestigious car manufacturers. Whether it's for a business trip or a weekend getaway, we have the perfect ride for you.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-primary flex items-center gap-2">
              Explore Fleet
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-500 font-medium">Luxury Cars</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">12k+</p>
              <p className="text-sm text-gray-500 font-medium">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">45+</p>
              <p className="text-sm text-gray-500 font-medium">Locations</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl -rotate-6 scale-95 blur-xl opacity-30"></div>
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e661876a43e?auto=format&fit=crop&q=80&w=1000" 
            alt="Porsche 911" 
            className="rounded-2xl shadow-2xl relative z-10 w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
          />
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">4.9/5</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">User Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
