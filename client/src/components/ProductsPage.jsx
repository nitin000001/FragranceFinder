import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";

const ProductsPage = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Our Perfume Collection
        </h1>
        <p className="text-gray-600 text-lg">
          Browse through our exclusive scents crafted to perfection.
        </p>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
          {products.map((product) => (
            <div
              key={product._id}
              className="relative cursor-pointer group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 backdrop-blur-md"
            >
              <div className="blur-sm group-hover:blur-none transition duration-500">
                <img
                  src={product.image?.url} 
                  alt={product.productName} 
                  className="w-full h-64 object-cover transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {product.productName} 
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-pink-600">
                    {product.price}
                  </span>
                  <button className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white px-4 py-2 rounded-full transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
