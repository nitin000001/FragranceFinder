// components/ProductDetail.jsx
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { fetchSingleProduct, singleProduct, loading } = useContext(ProductContext);

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  if (loading || !singleProduct) {
    return <div className="text-center mt-10">Loading product details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <img
        src={singleProduct.image?.url}
        alt={singleProduct.productName}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{singleProduct.productName}</h1>
      <p className="text-2xl font-semibold text-pink-600 mb-6">₹{singleProduct.price}</p>
      <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full">
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetail;
