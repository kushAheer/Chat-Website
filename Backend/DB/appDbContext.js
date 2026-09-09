import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.MONOGO_CONNECTION
        );

        console.log(
            "MongoDB connected:",
            connection.connection.host
        );

    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default connectDb;