import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link  to='/'>
               <img
            src="https://images.unsplash.com/photo-1701500096456-28186c4a306d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
            className="h-12 w-auto rounded-lg shadow-md"
          />
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Items are wrapped with link tags */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-10 mt-4 lg:mt-0 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent text-gray-800 lg:text-white px-6 lg:px-0 py-4 lg:py-0 rounded-b-md shadow-lg lg:shadow-none z-50`}
        >
          <Link to="/products">
            <button className="block w-full lg:w-auto text-left px-4 py-2 lg:px-0 lg:py-0 font-medium hover:text-pink-200 transition duration-300 cursor-pointer">
              Products
            </button>
          </Link>

          <Link to="/create-product">
            <button className="block w-full lg:w-auto text-left px-4 py-2 lg:px-0 lg:py-0 font-medium hover:text-pink-200 transition duration-300 cursor-pointer">
              Create Product
            </button>
          </Link>

          <Link to="/reviews">
            <button className="block w-full lg:w-auto text-left px-4 py-2 lg:px-0 lg:py-0 font-medium hover:text-pink-200 transition duration-300 cursor-pointer">
              Review
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
