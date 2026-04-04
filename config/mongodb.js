//Setup connection
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected!");
    } catch(err) {
        console.error("Connection failed!", err.message);
    };
};