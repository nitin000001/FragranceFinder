import express from 'express';
import connectDB from './config/mongodb-connenction.js';
import cors from 'cors';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary'
import productRoutes from './routes/perfumeCreateRoute.js'
// import { use } from 'react';

dotenv.config(); 
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
});

app.use("/api/product", productRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
