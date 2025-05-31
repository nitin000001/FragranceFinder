import express from 'express'
import uploadfiles from "../config/multer-connection.js"
import { createPerfumePost, getAllProducts, getSingleProduct } from '../controllers/createPerfumeControllers.js';

const router = express.Router();

router.post("/create", uploadfiles, createPerfumePost);
router.get("/getAllProducts", getAllProducts);
router.get("/:id", getSingleProduct);

export default router;
