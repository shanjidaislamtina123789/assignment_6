import React from "react";
const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-100">
      
      <div className="flex-shrink-0">
        <h1 
          className="text-3xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
        >
          DigiTools
        </h1>
      </div>

      <div className="hidden lg:flex items-center space-x-8">
        <a href="#" className="text-gray-600 font-medium hover:text-[#4F39F6] transition-colors">Products</a>
        <a href="#" className="text-gray-600 font-medium hover:text-[#4F39F6] transition-colors">Features</a>
        <a href="#" className="text-gray-600 font-medium hover:text-[#4F39F6] transition-colors">Pricing</a>
        <a href="#" className="text-gray-600 font-medium hover:text-[#4F39F6] transition-colors">Testimonials</a>
        <a href="#" className="text-gray-600 font-medium hover:text-[#4F39F6] transition-colors">FAQ</a>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#4F39F6] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>

        <button className="text-gray-700 font-bold hover:text-[#4F39F6] transition-colors">
          Login
        </button>

        <button 
          className="px-8 py-2 rounded-full text-white font-bold transition-all"
          style={{ 
            background: "linear-gradient(90deg, #4F39F6 0%, #9514FA 100%)"
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



