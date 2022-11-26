import mongoose from "mongoose";

//mongoDB Connection
export const mongoDBConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully`.bgGreen.black);
    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }
};
