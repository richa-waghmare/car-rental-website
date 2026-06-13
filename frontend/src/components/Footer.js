import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span>LuxeDrive</span>
            </Link>
            <p className="text-gray-400 font-medium">
              Elevating your travel experience with our premium fleet and exceptional service. Available 24/7.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 bg-gray-400"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5 bg-gray-400"></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/cars" className="text-gray-400 hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to get updates on new arrivals and special offers.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 p-1 text-primary hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2026 LuxeDrive Premium Rentals. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Designed by Antigravity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
