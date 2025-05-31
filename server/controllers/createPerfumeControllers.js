import getDataUrl from "../utils/urlGenerator.js";
import cloudinary from "cloudinary";
import Product from "../models/productModel.js";

export const createPerfumePost = async (req, res) => {
  try {
    const { productName, price } = req.body;
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No file uploaded" });

    const fileUrl = getDataUrl(file);
    const cloud = await cloudinary.v2.uploader.upload(fileUrl.content);

    await Product.create({
      productName,
      price,
      image: {
        id: cloud.public_id,
        url: cloud.secure_url,
      },
      // owner: req.user._id,
    });

    res.json({
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to upload file",
      error: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    // here we are fetching all the prodcuts
    const prodcuts = await Product.find().sort({ createdat: -1 });
    res.json(prodcuts);
  } catch (error) {
    res.status(500).json({
      message: "Unable to upload file",
      error: error.message,
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    // here we are fetching single product
    const prodcut = await Product.findById(req.params.id)
    res.json(prodcut);
  } catch (error) {
    res.status(500).json({
      message: "Unable to upload file",
      error: error.message,
    });
  }
};