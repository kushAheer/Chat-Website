import mongoose from "mongoose";
 
const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONOGO_CONNECTION)
        console.log("Database connected successfully");
    }
    catch(error){
        console.log(error);
    }
};

export default connectDb;