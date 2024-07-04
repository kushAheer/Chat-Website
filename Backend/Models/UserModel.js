import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    
    Email : {
        type : String,
        required : true
    },
    Password :{
        type : String,
        required : true
    },
    Gender :{
        type : String,
        required : true,
        enum : ["male","female"]
    },
    
    profilePicture : {
        type : String,
        default : ""
    },
});

const User = mongoose.model('User', userSchema);

export default User;