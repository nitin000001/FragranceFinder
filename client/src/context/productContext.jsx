import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// Create context
const ProductContext = createContext();

// Create provider
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [createdProducts, setCreatedProducts] = useState([]);

  //  Function to create a new product
  const createProduct = async (
    formData,
    setFilePrev,
    setFile,
    setName,
    setPrice,
    setDescription,
    navigate
  ) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/product/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        toast.success("Product created successfully!");

        // Reset form fields
        setFilePrev("");
        setFile(null);
        setName("");
        setPrice("");
        setDescription("");

        // Optionally refresh product list
        fetchProducts();
        fetchCreatedProducts();

        // Redirect to product list
        navigate("/products");
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product");
    }
  };

  //  Fetch all created products 
  const fetchCreatedProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product/create`
      );
      setCreatedProducts(data);
    } catch (error) {
      console.error("Failed to fetch created products:", error);
      toast.error("Error fetching created products");
    } finally {
      setLoading(false);
    }
  };

  //  Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product/getAllProducts`
      );
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      toast.error("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  //  Fetch single product by ID
  const fetchSingleProduct = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product/${id}`
      );
      setSingleProduct(data);
    } catch (error) {
      console.error("Failed to fetch single product:", error);
      toast.error("Error fetching single product");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        singleProduct,
        loading,
        fetchProducts,
        fetchSingleProduct,
        fetchCreatedProducts,
        createdProducts,
        createProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
