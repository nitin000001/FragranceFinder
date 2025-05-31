import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">PerfumeAura</h2>
          <p className="text-sm text-gray-400">
            Discover your signature scent with our curated collection of premium perfumes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Shop</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">Subscribe to get the latest offers and trends.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PerfumeAura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
