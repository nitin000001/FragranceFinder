import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log("disConnected to mongoDB");
    }
}

export default connectDB;