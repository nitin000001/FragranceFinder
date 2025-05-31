import React, { useRef, useState, useContext } from "react";
import { ProductContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [filePrev, setFilePrev] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { createProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleClick = () => {
    inputRef.current.click();
  };

  const changeFileHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFilePrev(reader.result);
      setFile(file);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", file);

    try {
      await createProduct(
        formData,
        setFilePrev,
        setFile,
        setName,
        setPrice,
        setDescription,
        navigate
      );
      toast.success("🎉 Product created successfully!");
    } catch (error) {
      toast.error("❌ Failed to create product.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 p-6 flex flex-col items-center">
      <ToastContainer position="top-center" autoClose={3000} />
      <h2 className="text-white text-4xl font-extrabold mt-6 mb-2">Add a New Product</h2>
      <p className="text-white text-lg font-medium mb-10 text-center ">
        After creating the product, it will be available in the product listing section.
      </p>

      <div className="flex flex-wrap gap-10 justify-center w-full max-w-6xl bg-white/90 rounded-3xl p-10 shadow-2xl backdrop-blur-md">
        {/* Image Upload Section */}
        <div className="w-full sm:w-96 flex flex-col items-center bg-gradient-to-br from-pink-100 to-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
          {filePrev ? (
            <img
              src={filePrev}
              alt="Preview"
              className="w-full h-56 object-cover rounded-xl shadow-md border-2 border-white mb-4"
            />
          ) : (
            <div className="w-full h-56 flex items-center justify-center text-pink-500 text-lg border-2 border-dashed border-pink-300 rounded-xl mb-4">
              Image Preview
            </div>
          )}

          <div
            onClick={handleClick}
            className="bg-pink-500 hover:bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md cursor-pointer transition"
            title="Choose Image"
          >
            <FaPlus size={20} />
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={changeFileHandler}
          />
          <p className="mt-3 text-pink-700 font-medium">Choose an image</p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full sm:max-w-lg bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6"
        >
          <div>
            <label className="block mb-2 text-gray-700 text-md font-semibold">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 text-md font-semibold">
              Price (₹)
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="₹1000"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
