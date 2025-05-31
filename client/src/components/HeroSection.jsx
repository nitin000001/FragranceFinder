import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Your Signature{" "}
            <span className="text-pink-600">Fragrance</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Unleash elegance and confidence with our hand-picked collection of
            luxury perfumes. Find your perfect scent today.
          </p>
          <Link to="/products">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 hover:scale-120 cursor-pointer">
              Explore Collection
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1664298370042-8accef64e441?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwZXJmdW1lfGVufDB8fDB8fHww"
            alt="Perfume bottle"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
