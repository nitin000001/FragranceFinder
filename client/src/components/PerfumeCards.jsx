import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";

const PerfumeCards = () => {
  const { products, loading } = useContext(ProductContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold text-gray-600">Loading featured perfumes...</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Perfumes</h2>
        <p className="text-gray-600">Explore our exclusive range of luxury scents</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-500 blur-sm opacity-70 scale-95 hover:scale-105 hover:blur-none hover:opacity-100 hover:shadow-2xl"
          >
            <img
              src={product.image?.url}
              alt={product.productName}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigate(`/${product._id}`)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerfumeCards;
