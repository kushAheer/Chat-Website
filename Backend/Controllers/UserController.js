import User from "../Models/UserModel.js";
// import ApiError from "../Utils/ApiError.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try{
        // console.log(req.body);
        const { fullName , userName  , Email, Password, Gender ,profilePicture} = req.body;
        const user = await User.findOne({Email , userName});
        
        if(user){
            // throw  ApiError(409, "User  or Email already exists");
            return res.status(409).json({
                message : "User or Email already exists"
            })
        }
        //hashing the password
        const hashPassword = await bcrypt.hash(Password, 10);
        console.log(true)
        const userData = await User.create({
            fullName,
            userName,
            Email,
            Password : hashPassword,
            Gender,
            profilePicture : "",
            token : "",
        })
        
        console.log(true);
        return res.status(201).json({
            message : "User Registered Successfully"
        })
        
    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}